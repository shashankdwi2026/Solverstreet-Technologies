import bcrypt from "bcryptjs";
import crypto from "crypto";
import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";
import { forgotPasswordSchema } from "@/lib/validators";
import { absoluteUrl } from "@/lib/utils";

export async function POST(request: Request) {
  const parsed = forgotPasswordSchema.safeParse(await request.json());
  if (!parsed.success) return NextResponse.json({ error: "Invalid email" }, { status: 400 });

  const token = crypto.randomBytes(32).toString("hex");
  await prisma.passwordResetToken.create({
    data: {
      email: parsed.data.email,
      tokenHash: await bcrypt.hash(token, 12),
      expires: new Date(Date.now() + 1000 * 60 * 30)
    }
  });

  console.info(`Password reset link: ${absoluteUrl(`/reset-password?token=${token}&email=${encodeURIComponent(parsed.data.email)}`)}`);
  return NextResponse.json({ ok: true });
}
