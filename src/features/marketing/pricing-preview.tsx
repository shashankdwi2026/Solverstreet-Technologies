import Link from "next/link";
import { Check } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { SectionHeading } from "@/features/marketing/section-heading";

const plans = [
  { name: "Discovery Sprint", price: "$4.5k+", items: ["AI opportunity mapping", "Architecture blueprint", "Delivery roadmap"] },
  { name: "Product Build", price: "$18k+", items: ["Dedicated squad", "Weekly demos", "Cloud-ready launch"] },
  { name: "Enterprise Partner", price: "Custom", items: ["Security review", "SLA support", "Roadmap ownership"] }
];

export function PricingPreview() {
  return (
    <section className="section-pad bg-muted/30">
      <div className="container">
        <SectionHeading
          eyebrow="Pricing"
          title="Flexible engagement models"
          text="Start with a focused sprint or scale into a long-term engineering partnership."
        />
        <div className="grid gap-5 md:grid-cols-3">
          {plans.map((plan) => (
            <Card key={plan.name} className="p-6">
              <h3 className="text-xl font-semibold">{plan.name}</h3>
              <p className="mt-3 text-3xl font-semibold">{plan.price}</p>
              <div className="mt-5 grid gap-3">
                {plan.items.map((item) => (
                  <span key={item} className="flex items-center gap-2 text-sm text-muted-foreground">
                    <Check className="size-4 text-primary" /> {item}
                  </span>
                ))}
              </div>
              <Button className="mt-6 w-full" asChild><Link href="/#contact">Discuss Fit</Link></Button>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
