import { AuthCard } from "@/features/auth/auth-card";
import { ResetPasswordForm } from "@/features/auth/reset-password-form";

export default function ResetPasswordPage() {
  return (
    <AuthCard title="Choose a new password" subtitle="Use a strong password with at least eight characters.">
      <ResetPasswordForm />
    </AuthCard>
  );
}
