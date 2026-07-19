import Link from "next/link";
import { BrainCircuit } from "lucide-react";
import { Card } from "@/components/ui/card";

export function AuthCard({
  title,
  subtitle,
  children,
  footer
}: {
  title: string;
  subtitle: string;
  children: React.ReactNode;
  footer?: React.ReactNode;
}) {
  return (
    <main className="min-h-[calc(100vh-4rem)] bg-muted/30 py-16">
      <div className="container flex justify-center">
        <Card className="w-full max-w-md p-7">
          <Link href="/" className="mb-8 flex items-center gap-2 font-semibold">
            <span className="flex size-9 items-center justify-center rounded-md bg-primary text-primary-foreground">
              <BrainCircuit className="size-5" />
            </span>
            <span>Solverstreet Technologies</span>
          </Link>
          <h1 className="text-2xl font-semibold">{title}</h1>
          <p className="mt-2 text-sm text-muted-foreground">{subtitle}</p>
          <div className="mt-6">{children}</div>
          {footer ? <div className="mt-6 text-sm text-muted-foreground">{footer}</div> : null}
        </Card>
      </div>
    </main>
  );
}
