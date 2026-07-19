"use client";

import Link from "next/link";
import { signIn } from "next-auth/react";
import { useRouter, useSearchParams } from "next/navigation";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

export function LoginForm() {
  const router = useRouter();
  const params = useSearchParams();
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  async function onSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setLoading(true);
    const data = new FormData(event.currentTarget);
    const result = await signIn("credentials", {
      email: data.get("email"),
      password: data.get("password"),
      redirect: false
    });
    setLoading(false);
    if (result?.error) {
      setError("Invalid email or password.");
      return;
    }
    router.push("/dashboard");
  }

  return (
    <form onSubmit={onSubmit} className="grid gap-4">
      {params.get("verified") === "1" ? <p className="rounded-md bg-teal-500/10 p-3 text-sm text-teal-600">Email verified. You can sign in now.</p> : null}
      {error ? <p className="rounded-md bg-red-500/10 p-3 text-sm text-red-500">{error}</p> : null}
      <label className="grid gap-2 text-sm font-medium">Email<Input name="email" type="email" required /></label>
      <label className="grid gap-2 text-sm font-medium">Password<Input name="password" type="password" required /></label>
      <Button type="submit" disabled={loading}>{loading ? "Signing in..." : "Login"}</Button>
      <Link href="/forgot-password" className="text-sm text-primary">Forgot password?</Link>
    </form>
  );
}
