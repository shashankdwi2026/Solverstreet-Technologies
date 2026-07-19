import { z } from "zod";

export const inquirySchema = z.object({
  name: z.string().min(2, "Enter your full name."),
  company: z.string().min(2, "Company name is required."),
  email: z.string().email("Enter a valid business email."),
  phone: z.string().min(7, "Enter a valid phone number."),
  country: z.string().min(2, "Country is required."),
  industry: z.string().min(2, "Select an industry."),
  serviceRequired: z.string().min(2, "Select a service."),
  budgetRange: z.string().min(2, "Select a budget range."),
  projectTimeline: z.string().min(2, "Select a project timeline."),
  projectDescription: z.string().min(30, "Tell us a little more about your project."),
  fileName: z.string().optional()
});

export const registerSchema = z.object({
  name: z.string().min(2),
  email: z.string().email(),
  password: z.string().min(8, "Use at least 8 characters.")
});

export const loginSchema = z.object({
  email: z.string().email(),
  password: z.string().min(1)
});

export const forgotPasswordSchema = z.object({
  email: z.string().email()
});

export const resetPasswordSchema = z.object({
  token: z.string().min(20),
  password: z.string().min(8)
});

export type InquiryInput = z.infer<typeof inquirySchema>;
