import { NextResponse } from "next/server";
import { auth } from "@/lib/auth";
import { prisma } from "@/lib/prisma";

export async function POST(request: Request) {
  const session = await auth();
  if (!session?.user?.id) return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  const { projectSlug } = await request.json();
  if (!projectSlug) return NextResponse.json({ error: "Missing project" }, { status: 400 });

  await prisma.savedProject.upsert({
    where: { userId_projectSlug: { userId: session.user.id, projectSlug } },
    update: {},
    create: { userId: session.user.id, projectSlug }
  });
  return NextResponse.json({ ok: true });
}
