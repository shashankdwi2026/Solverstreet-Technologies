import Link from "next/link";
import { AuthCard } from "@/features/auth/auth-card";
import { ForgotPasswordForm } from "@/features/auth/forgot-password-form";

export default function ForgotPasswordPage() {
  return (
    <AuthCard
      title="Reset your password"
      subtitle="Enter your email address and we will generate a reset link."
      footer={<Link href="/login" className="text-primary">Return to login</Link>}
    >
      <ForgotPasswordForm />
    </AuthCard>
  );
}
