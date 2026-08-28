"use client";

import { useState } from "react";
import { createClient } from "@/lib/supabase/client";
import AuthShell from "@/components/AuthShell";
import FormField from "@/components/FormField";
import Button from "@/components/Button";

export default function ForgotPassword() {
  const [email, setEmail] = useState("");
  const [error, setError] = useState("");
  const [sent, setSent] = useState(false);
  const [loading, setLoading] = useState(false);

  async function handleSubmit(e) {
    e.preventDefault();
    setError("");
    setLoading(true);

    const supabase = createClient();
    const { error: resetError } = await supabase.auth.resetPasswordForEmail(email, {
      redirectTo: `${window.location.origin}/reset-password`,
    });
    setLoading(false);

    if (resetError) {
      setError(resetError.message);
      return;
    }
    setSent(true);
  }

  if (sent) {
    return (
      <AuthShell eyebrow="Password reset" title="Check your email">
        <p className="text-sm text-graphite/65 leading-relaxed">
          If an account exists for {email}, we&apos;ve sent a link to reset
          your password.
        </p>
      </AuthShell>
    );
  }

  return (
    <AuthShell
      eyebrow="Password reset"
      title="Forgot your password?"
      subtitle="Enter your email and we'll send you a reset link."
    >
      <form onSubmit={handleSubmit} className="flex flex-col gap-5">
        <FormField
          label="Email"
          id="email"
          type="email"
          required
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        {error && <p className="text-sm text-red-600">{error}</p>}
        <Button type="submit" disabled={loading} className="mt-2">
          {loading ? "Sending..." : "Send reset link"}
        </Button>
      </form>
    </AuthShell>
  );
}
