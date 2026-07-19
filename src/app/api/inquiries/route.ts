import { NextResponse } from "next/server";
import { auth } from "@/lib/auth";
import { sendInquiryEmails } from "@/lib/mail";
import { prisma } from "@/lib/prisma";
import { inquirySchema } from "@/lib/validators";

export async function POST(request: Request) {
  const payload = await request.json();
  const parsed = inquirySchema.safeParse(payload);
  if (!parsed.success) return NextResponse.json({ error: "Invalid inquiry" }, { status: 400 });

  const session = await auth();
  const inquiry = await prisma.inquiry.create({
    data: {
      ...parsed.data,
      userId: session?.user?.id
    }
  });

  await sendInquiryEmails(parsed.data);
  return NextResponse.json({ inquiryId: inquiry.id });
}
