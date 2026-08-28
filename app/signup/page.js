"use client";

import { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { createClient } from "@/lib/supabase/client";
import AuthShell from "@/components/AuthShell";
import FormField from "@/components/FormField";
import Button from "@/components/Button";

export default function SignUp() {
  const router = useRouter();
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [error, setError] = useState("");
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
    const { error: signUpError } = await supabase.auth.signUp({
      email,
      password,
      options: {
        data: { full_name: fullName },
        emailRedirectTo: `${window.location.origin}/dashboard`,
      },
    });
    setLoading(false);

    if (signUpError) {
      setError(signUpError.message);
      return;
    }
    router.push("/signup/check-email");
  }

  return (
    <AuthShell
      eyebrow="Join SkillSpire"
      title="Create your account"
      footer={
        <>
          Already have an account?{" "}
          <Link href="/login" className="text-imperial font-medium hover:underline">
            Log in
          </Link>
        </>
      }
    >
      <form onSubmit={handleSubmit} className="flex flex-col gap-5">
        <FormField
          label="Full name"
          id="fullName"
          type="text"
          required
          value={fullName}
          onChange={(e) => setFullName(e.target.value)}
        />
        <FormField
          label="Email"
          id="email"
          type="email"
          required
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <FormField
          label="Password"
          id="password"
          type="password"
          required
          minLength={8}
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <FormField
          label="Confirm password"
          id="confirmPassword"
          type="password"
          required
          value={confirmPassword}
          onChange={(e) => setConfirmPassword(e.target.value)}
        />
        {error && <p className="text-sm text-red-600">{error}</p>}
        <Button type="submit" disabled={loading} className="mt-2">
          {loading ? "Creating account..." : "Create account"}
        </Button>
      </form>
    </AuthShell>
  );
}
