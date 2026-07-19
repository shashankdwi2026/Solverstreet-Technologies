import { Reveal } from "@/components/motion/reveal";
import { Card } from "@/components/ui/card";
import { stats } from "@/config/content";
import { SectionHeading } from "@/features/marketing/section-heading";

export function AboutSection() {
  return (
    <section id="about" className="section-pad">
      <div className="container">
        <SectionHeading
          eyebrow="About"
          title="Strategy, design, and engineering under one roof"
          text="We partner with leadership teams to turn ambitious AI and digital roadmaps into resilient products, platforms, and measurable operating leverage."
        />
        <div className="grid gap-5 md:grid-cols-3">
          {[
            ["Mission", "Make intelligent software practical, secure, and valuable for every business function."],
            ["Vision", "A world where teams operate with AI-native systems that amplify human judgment."],
            ["Values", "Clarity, ownership, craft, measurable outcomes, and long-term trust."]
          ].map(([title, text], index) => (
            <Reveal key={title} delay={index * 0.08}>
              <Card className="h-full p-6">
                <h3 className="text-xl font-semibold">{title}</h3>
                <p className="mt-3 text-sm leading-6 text-muted-foreground">{text}</p>
              </Card>
            </Reveal>
          ))}
        </div>
        <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {stats.map((stat, index) => (
            <Reveal key={stat.label} delay={index * 0.06}>
              <Card className="p-6 text-center">
                <div className="gradient-text text-4xl font-semibold">{stat.value}</div>
                <p className="mt-2 text-sm text-muted-foreground">{stat.label}</p>
              </Card>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
