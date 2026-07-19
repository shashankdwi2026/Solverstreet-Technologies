import Link from "next/link";
import { AuthCard } from "@/features/auth/auth-card";
import { LoginForm } from "@/features/auth/login-form";

export default function LoginPage() {
  return (
    <AuthCard
      title="Welcome back"
      subtitle="Sign in to view your dashboard, inquiries, saved projects, and account settings."
      footer={<>New to Solverstreet Technologies? <Link href="/register" className="text-primary">Create an account</Link>.</>}
    >
      <LoginForm />
    </AuthCard>
  );
}
