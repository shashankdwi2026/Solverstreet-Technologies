"use client";

import { useSearchParams } from "next/navigation";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

export function ResetPasswordForm() {
  const params = useSearchParams();
  const [message, setMessage] = useState("");

  async function onSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const data = Object.fromEntries(new FormData(event.currentTarget));
    const response = await fetch("/api/reset-password", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data)
    });
    setMessage(response.ok ? "Password reset. You can log in now." : "Reset link is invalid or expired.");
  }

  return (
    <form onSubmit={onSubmit} className="grid gap-4">
      {message ? <p className="rounded-md bg-muted p-3 text-sm">{message}</p> : null}
      <input type="hidden" name="token" value={params.get("token") || ""} />
      <input type="hidden" name="email" value={params.get("email") || ""} />
      <label className="grid gap-2 text-sm font-medium">New Password<Input name="password" type="password" minLength={8} required /></label>
      <Button type="submit">Reset Password</Button>
    </form>
  );
}
