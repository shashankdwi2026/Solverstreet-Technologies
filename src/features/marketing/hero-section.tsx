"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, CalendarCheck, CircuitBoard, DatabaseZap, ShieldCheck } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

const particles = Array.from({ length: 34 }, (_, index) => ({
  id: index,
  left: `${(index * 29) % 100}%`,
  top: `${(index * 47) % 100}%`,
  duration: 4 + (index % 7)
}));

export function HeroSection() {
  return (
    <section className="relative min-h-[calc(100vh-4rem)] overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(20,184,166,0.18),transparent_28%),radial-gradient(circle_at_85%_15%,rgba(59,130,246,0.16),transparent_26%),linear-gradient(180deg,rgba(255,255,255,0.86),rgba(255,255,255,0.58))] dark:bg-[radial-gradient(circle_at_20%_20%,rgba(20,184,166,0.18),transparent_28%),radial-gradient(circle_at_85%_15%,rgba(124,58,237,0.18),transparent_26%),linear-gradient(180deg,rgba(2,6,23,0.92),rgba(2,6,23,0.7))]" />
      <div className="absolute inset-0 opacity-[0.16] [background-image:linear-gradient(to_right,currentColor_1px,transparent_1px),linear-gradient(to_bottom,currentColor_1px,transparent_1px)] [background-size:72px_72px]" />
      {particles.map((particle) => (
        <motion.span
          key={particle.id}
          className="absolute size-1 rounded-full bg-primary"
          style={{ left: particle.left, top: particle.top }}
          animate={{ opacity: [0.1, 0.8, 0.1], y: [-12, 12, -12] }}
          transition={{ duration: particle.duration, repeat: Infinity, ease: "easeInOut" }}
        />
      ))}

      <div className="container relative grid min-h-[calc(100vh-4rem)] items-center gap-12 py-16 lg:grid-cols-[1.05fr_0.95fr]">
        <div>
          <Badge className="bg-background/80">AI agents, automation, cloud, analytics</Badge>
          <motion.h1
            initial={{ opacity: 0, y: 28 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="mt-6 max-w-4xl text-5xl font-semibold tracking-tight md:text-7xl"
          >
            Building Intelligent Digital Products with <span className="gradient-text">AI</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 22 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="mt-6 max-w-2xl text-lg leading-8 text-muted-foreground"
          >
            Solverstreet Technologies designs and ships secure AI agents, custom software, enterprise applications, Salesforce solutions,
            analytics platforms, and cloud-native systems for companies operating worldwide.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 22 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="mt-8 flex flex-col gap-3 sm:flex-row"
          >
            <Button size="lg" asChild>
              <Link href="/#contact"><CalendarCheck className="size-5" /> Book Consultation</Link>
            </Button>
            <Button size="lg" variant="outline" asChild>
              <Link href="/#services">Explore Services <ArrowRight className="size-5" /></Link>
            </Button>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.94 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.15 }}
          className="relative mx-auto w-full max-w-xl"
        >
          <div className="glass rounded-lg p-5 shadow-glow">
            <div className="grid gap-4">
              {[
                { icon: CircuitBoard, title: "AI orchestration", text: "Agents, tools, memory, permissions" },
                { icon: DatabaseZap, title: "Data intelligence", text: "Pipelines, dashboards, forecasting" },
                { icon: ShieldCheck, title: "Enterprise guardrails", text: "SSO, audit trails, secure APIs" }
              ].map((item, index) => (
                <motion.div
                  key={item.title}
                  animate={{ y: [0, index % 2 ? -8 : 8, 0] }}
                  transition={{ duration: 5 + index, repeat: Infinity, ease: "easeInOut" }}
                  className="rounded-lg border bg-background/85 p-5"
                >
                  <item.icon className="size-6 text-primary" />
                  <h3 className="mt-4 font-semibold">{item.title}</h3>
                  <p className="mt-1 text-sm text-muted-foreground">{item.text}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
