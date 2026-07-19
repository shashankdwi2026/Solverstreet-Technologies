import Link from "next/link";
import { AuthCard } from "@/features/auth/auth-card";
import { RegisterForm } from "@/features/auth/register-form";

export default function RegisterPage() {
  return (
    <AuthCard
      title="Create your account"
      subtitle="Register to manage inquiries, save projects, and collaborate with our delivery team."
      footer={<>Already registered? <Link href="/login" className="text-primary">Login</Link>.</>}
    >
      <RegisterForm />
    </AuthCard>
  );
}
