"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { Send } from "lucide-react";
import { useForm } from "react-hook-form";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Select } from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/components/ui/toaster";
import { industries, services } from "@/config/content";
import { SectionHeading } from "@/features/marketing/section-heading";
import { inquirySchema, type InquiryInput } from "@/lib/validators";

const budgets = ["$5k - $15k", "$15k - $50k", "$50k - $150k", "$150k+"];
const timelines = ["Immediately", "1-3 months", "3-6 months", "6+ months"];

export function ContactSection() {
  const { toast } = useToast();
  const form = useForm<InquiryInput>({ resolver: zodResolver(inquirySchema) });

  async function onSubmit(values: InquiryInput) {
    const response = await fetch("/api/inquiries", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(values)
    });

    if (!response.ok) {
      toast({ title: "Inquiry was not sent", description: "Please check the form and try again.", type: "error" });
      return;
    }

    form.reset();
    toast({ title: "Inquiry sent", description: "Our team will contact you shortly.", type: "success" });
  }

  return (
    <section id="contact" className="section-pad bg-muted/30">
      <div className="container">
        <SectionHeading
          eyebrow="Contact"
          title="Tell us what you want to build"
          text="Share a few details and our strategy team will respond with next steps, estimated scope, and the right delivery model."
        />
        <Card className="mx-auto max-w-4xl p-6 md:p-8">
          <form onSubmit={form.handleSubmit(onSubmit)} className="grid gap-5 md:grid-cols-2">
            <Field label="Name" error={form.formState.errors.name?.message}><Input {...form.register("name")} /></Field>
            <Field label="Company" error={form.formState.errors.company?.message}><Input {...form.register("company")} /></Field>
            <Field label="Email" error={form.formState.errors.email?.message}><Input type="email" {...form.register("email")} /></Field>
            <Field label="Phone" error={form.formState.errors.phone?.message}><Input {...form.register("phone")} /></Field>
            <Field label="Country" error={form.formState.errors.country?.message}><Input {...form.register("country")} /></Field>
            <Field label="Industry" error={form.formState.errors.industry?.message}>
              <Select {...form.register("industry")} defaultValue=""><option value="" disabled>Select industry</option>{industries.map((item) => <option key={item.title}>{item.title}</option>)}</Select>
            </Field>
            <Field label="Service Required" error={form.formState.errors.serviceRequired?.message}>
              <Select {...form.register("serviceRequired")} defaultValue=""><option value="" disabled>Select service</option>{services.map((item) => <option key={item.title}>{item.title}</option>)}</Select>
            </Field>
            <Field label="Budget Range" error={form.formState.errors.budgetRange?.message}>
              <Select {...form.register("budgetRange")} defaultValue=""><option value="" disabled>Select budget</option>{budgets.map((item) => <option key={item}>{item}</option>)}</Select>
            </Field>
            <Field label="Project Timeline" error={form.formState.errors.projectTimeline?.message}>
              <Select {...form.register("projectTimeline")} defaultValue=""><option value="" disabled>Select timeline</option>{timelines.map((item) => <option key={item}>{item}</option>)}</Select>
            </Field>
            <Field label="File Upload" error={form.formState.errors.fileName?.message}>
              <Input type="file" onChange={(event) => form.setValue("fileName", event.target.files?.[0]?.name)} />
            </Field>
            <div className="md:col-span-2">
              <Field label="Project Description" error={form.formState.errors.projectDescription?.message}>
                <Textarea {...form.register("projectDescription")} />
              </Field>
            </div>
            <div className="md:col-span-2">
              <Button type="submit" disabled={form.formState.isSubmitting}>
                <Send className="size-4" /> {form.formState.isSubmitting ? "Sending..." : "Send Inquiry"}
              </Button>
            </div>
          </form>
        </Card>
      </div>
    </section>
  );
}

function Field({ label, error, children }: { label: string; error?: string; children: React.ReactNode }) {
  return (
    <label className="grid gap-2 text-sm font-medium">
      {label}
      {children}
      {error ? <span className="text-xs text-red-500">{error}</span> : null}
    </label>
  );
}
