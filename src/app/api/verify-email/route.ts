import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";

export async function GET(request: Request) {
  const url = new URL(request.url);
  const email = url.searchParams.get("email");
  const token = url.searchParams.get("token");
  if (!email || !token) return NextResponse.redirect(new URL("/login?verified=0", url.origin));

  const record = await prisma.verificationToken.findUnique({
    where: { identifier_token: { identifier: email, token } }
  });
  if (!record || record.expires < new Date()) return NextResponse.redirect(new URL("/login?verified=0", url.origin));

  await prisma.user.update({ where: { email }, data: { emailVerified: new Date() } });
  await prisma.verificationToken.delete({ where: { identifier_token: { identifier: email, token } } });
  return NextResponse.redirect(new URL("/login?verified=1", url.origin));
}
