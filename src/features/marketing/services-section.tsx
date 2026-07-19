import { Reveal } from "@/components/motion/reveal";
import { Card } from "@/components/ui/card";
import { services } from "@/config/content";
import { SectionHeading } from "@/features/marketing/section-heading";

export function ServicesSection() {
  return (
    <section id="services" className="section-pad bg-muted/30">
      <div className="container">
        <SectionHeading
          eyebrow="Services"
          title="Full-stack digital capability for AI-era companies"
          text="From discovery and architecture to implementation and support, our teams deliver the pieces your roadmap needs."
        />
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service, index) => (
            <Reveal key={service.title} delay={(index % 3) * 0.06}>
              <Card className="group h-full p-6 transition duration-300 hover:-translate-y-1 hover:border-primary/40">
                <service.icon className="size-7 text-primary transition group-hover:scale-110" />
                <h3 className="mt-5 text-lg font-semibold">{service.title}</h3>
                <p className="mt-3 text-sm leading-6 text-muted-foreground">{service.text}</p>
              </Card>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
