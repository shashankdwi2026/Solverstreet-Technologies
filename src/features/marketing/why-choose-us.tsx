import { Reveal } from "@/components/motion/reveal";
import { Card } from "@/components/ui/card";
import { reasons } from "@/config/content";
import { SectionHeading } from "@/features/marketing/section-heading";

export function WhyChooseUs() {
  return (
    <section id="solutions" className="section-pad">
      <div className="container">
        <SectionHeading
          eyebrow="Why Choose Us"
          title="Enterprise delivery without enterprise drag"
          text="We combine product strategy, architecture discipline, and fast iteration to create software that can scale."
        />
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {reasons.map((reason, index) => (
            <Reveal key={reason.title} delay={(index % 4) * 0.05}>
              <Card className="h-full p-5">
                <reason.icon className="size-6 text-primary" />
                <h3 className="mt-4 font-semibold">{reason.title}</h3>
              </Card>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
