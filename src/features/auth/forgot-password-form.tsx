"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

export function ForgotPasswordForm() {
  const [message, setMessage] = useState("");

  async function onSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const data = Object.fromEntries(new FormData(event.currentTarget));
    await fetch("/api/forgot-password", { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify(data) });
    setMessage("If the email exists, a reset link has been generated in the server logs for this prototype.");
  }

  return (
    <form onSubmit={onSubmit} className="grid gap-4">
      {message ? <p className="rounded-md bg-muted p-3 text-sm">{message}</p> : null}
      <label className="grid gap-2 text-sm font-medium">Email<Input name="email" type="email" required /></label>
      <Button type="submit">Send Reset Link</Button>
    </form>
  );
}
