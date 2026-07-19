"use client";

import Image from "next/image";
import { useState } from "react";
import { Star } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { testimonials } from "@/config/content";
import { SectionHeading } from "@/features/marketing/section-heading";

export function TestimonialsSection() {
  const [index, setIndex] = useState(0);
  const testimonial = testimonials[index];

  return (
    <section className="section-pad">
      <div className="container">
        <SectionHeading
          eyebrow="Testimonials"
          title="Trusted by leaders shipping serious software"
          text="Clients choose Solverstreet Technologies for thoughtful strategy, clean engineering, and clear delivery momentum."
        />
        <Card className="mx-auto max-w-3xl p-8 text-center">
          <Image src={testimonial.image} alt={testimonial.name} width={76} height={76} className="mx-auto rounded-full" />
          <div className="mt-5 flex justify-center gap-1">
            {Array.from({ length: testimonial.rating }).map((_, star) => <Star key={star} className="size-4 fill-yellow-400 text-yellow-400" />)}
          </div>
          <p className="mt-5 text-xl leading-8">&ldquo;{testimonial.quote}&rdquo;</p>
          <p className="mt-5 font-semibold">{testimonial.name}</p>
          <p className="text-sm text-muted-foreground">{testimonial.role}</p>
          <div className="mt-6 flex justify-center gap-2">
            {testimonials.map((item, itemIndex) => (
              <Button key={item.name} variant={index === itemIndex ? "default" : "outline"} size="sm" onClick={() => setIndex(itemIndex)}>
                {itemIndex + 1}
              </Button>
            ))}
          </div>
        </Card>
      </div>
    </section>
  );
}
