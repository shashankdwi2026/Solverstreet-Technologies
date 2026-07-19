import { redirect } from "next/navigation";
import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";
import { Skeleton } from "@/components/ui/skeleton";
import { projects } from "@/config/content";
import { LogoutButton } from "@/features/auth/logout-button";
import { auth } from "@/lib/auth";
import { prisma } from "@/lib/prisma";

export default async function DashboardPage() {
  const session = await auth();
  if (!session?.user?.id) redirect("/login");

  const [user, inquiries, savedProjects] = await Promise.all([
    prisma.user.findUnique({ where: { id: session.user.id } }),
    prisma.inquiry.findMany({ where: { userId: session.user.id }, orderBy: { createdAt: "desc" } }),
    prisma.savedProject.findMany({ where: { userId: session.user.id }, orderBy: { createdAt: "desc" } })
  ]);

  const saved = savedProjects.map((item) => projects.find((project) => project.slug === item.projectSlug)).filter(Boolean);

  return (
    <main className="min-h-[calc(100vh-4rem)] bg-muted/30 py-12">
      <div className="container">
        <div className="flex flex-col justify-between gap-4 md:flex-row md:items-center">
          <div>
            <Badge>Protected Dashboard</Badge>
            <h1 className="mt-4 text-3xl font-semibold">Hello, {user?.name || "there"}</h1>
            <p className="mt-2 text-muted-foreground">Manage your profile, inquiries, saved projects, and account settings.</p>
          </div>
          <LogoutButton />
        </div>

        <div className="mt-8 grid gap-6 lg:grid-cols-[0.85fr_1.15fr]">
          <Card className="p-6">
            <h2 className="text-xl font-semibold">User Profile</h2>
            <div className="mt-5 grid gap-3 text-sm">
              <Info label="Name" value={user?.name || "Not set"} />
              <Info label="Email" value={user?.email || "Not set"} />
              <Info label="Company" value={user?.company || "Not set"} />
              <Info label="Country" value={user?.country || "Not set"} />
              <Info label="Email Verification" value={user?.emailVerified ? "Verified" : "Pending"} />
            </div>
          </Card>

          <Card className="p-6">
            <h2 className="text-xl font-semibold">Submitted Inquiries</h2>
            <div className="mt-5 grid gap-4">
              {inquiries.length ? inquiries.map((inquiry) => (
                <div key={inquiry.id} className="rounded-lg border p-4">
                  <div className="flex flex-wrap items-center justify-between gap-2">
                    <h3 className="font-semibold">{inquiry.serviceRequired}</h3>
                    <Badge>{inquiry.status}</Badge>
                  </div>
                  <p className="mt-2 text-sm text-muted-foreground">{inquiry.projectDescription}</p>
                </div>
              )) : <EmptyState text="No inquiries yet. Submit the contact form to start a conversation." />}
            </div>
          </Card>

          <Card className="p-6">
            <h2 className="text-xl font-semibold">Saved Projects</h2>
            <div className="mt-5 grid gap-3">
              {saved.length ? saved.map((project) => project ? <div key={project.slug} className="rounded-lg border p-4 font-medium">{project.title}</div> : null) : <EmptyState text="No saved projects yet." />}
            </div>
          </Card>

          <Card className="p-6">
            <h2 className="text-xl font-semibold">Account Settings</h2>
            <p className="mt-2 text-sm text-muted-foreground">Profile editing, notification preferences, and security settings can be extended here.</p>
            <div className="mt-5 grid gap-3">
              <Skeleton className="h-11" />
              <Skeleton className="h-11" />
              <Skeleton className="h-11" />
            </div>
          </Card>
        </div>
      </div>
    </main>
  );
}

function Info({ label, value }: { label: string; value: string }) {
  return (
    <div className="flex justify-between gap-4 border-b pb-3">
      <span className="text-muted-foreground">{label}</span>
      <span className="font-medium">{value}</span>
    </div>
  );
}

function EmptyState({ text }: { text: string }) {
  return <p className="rounded-lg border border-dashed p-5 text-sm text-muted-foreground">{text}</p>;
}
