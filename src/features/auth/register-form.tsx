"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

export function RegisterForm() {
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);

  async function onSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setLoading(true);
    const form = event.currentTarget;
    const data = Object.fromEntries(new FormData(form));
    const response = await fetch("/api/register", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data)
    });
    setLoading(false);
    setMessage(response.ok ? "Account created. Check server logs for the prototype verification link." : "Registration failed.");
    if (response.ok) form.reset();
  }

  return (
    <form onSubmit={onSubmit} className="grid gap-4">
      {message ? <p className="rounded-md bg-muted p-3 text-sm">{message}</p> : null}
      <label className="grid gap-2 text-sm font-medium">Name<Input name="name" required /></label>
      <label className="grid gap-2 text-sm font-medium">Email<Input name="email" type="email" required /></label>
      <label className="grid gap-2 text-sm font-medium">Password<Input name="password" type="password" minLength={8} required /></label>
      <Button type="submit" disabled={loading}>{loading ? "Creating..." : "Register"}</Button>
    </form>
  );
}
