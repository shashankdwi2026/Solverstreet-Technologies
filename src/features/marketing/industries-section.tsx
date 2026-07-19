import { Reveal } from "@/components/motion/reveal";
import { Card } from "@/components/ui/card";
import { industries } from "@/config/content";
import { SectionHeading } from "@/features/marketing/section-heading";

export function IndustriesSection() {
  return (
    <section id="industries" className="section-pad">
      <div className="container">
        <SectionHeading
          eyebrow="Industries"
          title="Built for regulated, operationally complex markets"
          text="Our delivery model adapts to sector-specific security, compliance, workflow, and data requirements."
        />
        <div className="grid gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
          {industries.map((industry, index) => (
            <Reveal key={industry.title} delay={(index % 4) * 0.04}>
              <Card className="flex h-24 items-center gap-4 p-5 transition hover:-translate-y-1 hover:border-primary/40">
                <industry.icon className="size-6 text-primary" />
                <span className="font-medium">{industry.title}</span>
              </Card>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
