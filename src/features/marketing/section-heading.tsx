import { Badge } from "@/components/ui/badge";

export function SectionHeading({
  eyebrow,
  title,
  text
}: {
  eyebrow: string;
  title: string;
  text: string;
}) {
  return (
    <div className="mx-auto mb-12 max-w-3xl text-center">
      <Badge>{eyebrow}</Badge>
      <h2 className="mt-5 text-3xl font-semibold tracking-tight md:text-5xl">{title}</h2>
      <p className="mt-4 text-base leading-7 text-muted-foreground md:text-lg">{text}</p>
    </div>
  );
}
