import nodemailer from "nodemailer";

const from = process.env.SMTP_FROM || "Solverstreet Technologies <hello@solverstreettechnologies.example>";

function getTransporter() {
  if (!process.env.SMTP_HOST) return null;

  return nodemailer.createTransport({
    host: process.env.SMTP_HOST,
    port: Number(process.env.SMTP_PORT || 587),
    secure: Number(process.env.SMTP_PORT) === 465,
    auth: process.env.SMTP_USER
      ? {
          user: process.env.SMTP_USER,
          pass: process.env.SMTP_PASS
        }
      : undefined
  });
}

export async function sendInquiryEmails(input: {
  name: string;
  email: string;
  company: string;
  serviceRequired: string;
}) {
  const transporter = getTransporter();
  if (!transporter) {
    console.info("SMTP is not configured. Skipping inquiry emails.");
    return;
  }

  await Promise.all([
    transporter.sendMail({
      from,
      to: input.email,
      subject: "We received your project inquiry",
      text: `Hi ${input.name},\n\nThanks for contacting Solverstreet Technologies. Our solutions team will review your ${input.serviceRequired} request and respond shortly.\n\nSolverstreet Technologies`
    }),
    transporter.sendMail({
      from,
      to: process.env.BUSINESS_EMAIL || from,
      subject: `New ${input.serviceRequired} inquiry from ${input.company}`,
      text: `${input.name} (${input.email}) submitted a new inquiry for ${input.serviceRequired}.`
    })
  ]);
}
