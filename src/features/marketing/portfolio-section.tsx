"use client";

import Image from "next/image";
import { useMemo, useState } from "react";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { projects } from "@/config/content";
import { SectionHeading } from "@/features/marketing/section-heading";

export function PortfolioSection() {
  const [filter, setFilter] = useState("All");
  const filters = useMemo(() => ["All", ...new Set(projects.flatMap((project) => [project.category, project.technology]))], []);
  const visible = filter === "All" ? projects : projects.filter((project) => project.category === filter || project.technology === filter);

  return (
    <section id="portfolio" className="section-pad bg-muted/30">
      <div className="container">
        <SectionHeading
          eyebrow="Portfolio"
          title="Representative digital products and platforms"
          text="A sample of the systems we design for automation, insight, growth, and secure enterprise adoption."
        />
        <div className="mb-8 flex flex-wrap justify-center gap-2">
          {filters.map((item) => (
            <Button key={item} variant={filter === item ? "default" : "outline"} size="sm" onClick={() => setFilter(item)}>
              {item}
            </Button>
          ))}
        </div>
        <div className="grid gap-6 md:grid-cols-2">
          {visible.map((project) => (
            <motion.div key={project.slug} layout initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
              <Card className="overflow-hidden">
                <div className="relative aspect-[16/9]">
                  <Image src={project.image} alt={project.title} fill className="object-cover" sizes="(min-width: 768px) 50vw, 100vw" />
                </div>
                <div className="p-6">
                  <div className="flex flex-wrap gap-2">
                    <Badge>{project.category}</Badge>
                    <Badge>{project.technology}</Badge>
                  </div>
                  <h3 className="mt-4 text-xl font-semibold">{project.title}</h3>
                  <p className="mt-2 text-sm leading-6 text-muted-foreground">{project.description}</p>
                  <div className="mt-4 flex flex-wrap gap-2">
                    {project.stack.map((item) => <Badge key={item} className="bg-background">{item}</Badge>)}
                  </div>
                  <Button className="mt-5" variant="outline">View Details <ArrowUpRight className="size-4" /></Button>
                </div>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
