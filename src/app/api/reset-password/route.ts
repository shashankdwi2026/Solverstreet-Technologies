import bcrypt from "bcryptjs";
import { NextResponse } from "next/server";
import { z } from "zod";
import { prisma } from "@/lib/prisma";

export async function POST(request: Request) {
  const parsed = z.object({
    email: z.string().email(),
    token: z.string().min(20),
    password: z.string().min(8)
  }).safeParse(await request.json());
  if (!parsed.success) return NextResponse.json({ error: "Invalid token" }, { status: 400 });

  const tokens = await prisma.passwordResetToken.findMany({
    where: { email: parsed.data.email, expires: { gt: new Date() } },
    orderBy: { createdAt: "desc" },
    select: { id: true, tokenHash: true }
  });

  const matched = await asyncFind(tokens, (item) => bcrypt.compare(parsed.data.token, item.tokenHash));
  if (!matched) return NextResponse.json({ error: "Invalid token" }, { status: 400 });

  await prisma.user.update({
    where: { email: parsed.data.email },
    data: { passwordHash: await bcrypt.hash(parsed.data.password, 12) }
  });
  await prisma.passwordResetToken.delete({ where: { id: matched.id } });

  return NextResponse.json({ ok: true });
}

async function asyncFind<T>(items: T[], predicate: (item: T) => Promise<boolean>) {
  for (const item of items) {
    if (await predicate(item)) return item;
  }
  return undefined;
}
