"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { createClient } from "@/lib/supabase/client";
import AuthShell from "@/components/AuthShell";
import FormField from "@/components/FormField";
import Button from "@/components/Button";

// Supabase sends the user here from the reset-password email link with a
// recovery session already active, so this page just needs to collect the
// new password and call updateUser.
export default function ResetPassword() {
  const router = useRouter();
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [error, setError] = useState("");
  const [done, setDone] = useState(false);
  const [loading, setLoading] = useState(false);

  async function handleSubmit(e) {
    e.preventDefault();
    setError("");

    if (password !== confirmPassword) {
      setError("Passwords don't match.");
      return;
    }
    if (password.length < 8) {
      setError("Password must be at least 8 characters.");
      return;
    }

    setLoading(true);
    const supabase = createClient();
    const { error: updateError } = await supabase.auth.updateUser({ password });
    setLoading(false);

    if (updateError) {
      setError(updateError.message);
      return;
    }
    setDone(true);
    setTimeout(() => router.push("/login"), 1500);
  }

  if (done) {
    return (
      <AuthShell eyebrow="Password reset" title="Password updated">
        <p className="text-sm text-graphite/65">Taking you to login...</p>
      </AuthShell>
    );
  }

  return (
    <AuthShell eyebrow="Password reset" title="Set a new password">
      <form onSubmit={handleSubmit} className="flex flex-col gap-5">
        <FormField
          label="New password"
          id="password"
          type="password"
          required
          minLength={8}
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <FormField
          label="Confirm new password"
          id="confirmPassword"
          type="password"
          required
          value={confirmPassword}
          onChange={(e) => setConfirmPassword(e.target.value)}
        />
        {error && <p className="text-sm text-red-600">{error}</p>}
        <Button type="submit" disabled={loading} className="mt-2">
          {loading ? "Updating..." : "Update password"}
        </Button>
      </form>
    </AuthShell>
  );
}
