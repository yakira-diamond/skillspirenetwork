"use client";

import { Suspense, useState } from "react";
import Link from "next/link";
import { useRouter, useSearchParams } from "next/navigation";
import { createClient } from "@/lib/supabase/client";
import AuthShell from "@/components/AuthShell";
import FormField from "@/components/FormField";
import Button from "@/components/Button";

function LoginForm() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  async function handleSubmit(e) {
    e.preventDefault();
    setError("");
    setLoading(true);

    const supabase = createClient();
    const { error: signInError } = await supabase.auth.signInWithPassword({
      email,
      password,
    });
    setLoading(false);

    if (signInError) {
      setError(signInError.message);
      return;
    }
    router.push(searchParams.get("next") || "/dashboard");
    router.refresh();
  }

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-5">
      <FormField
        label="Email"
        id="email"
        type="email"
        required
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <div>
        <FormField
          label="Password"
          id="password"
          type="password"
          required
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <Link
          href="/forgot-password"
          className="text-xs text-imperial/70 hover:text-imperial mt-2 inline-block"
        >
          Forgot password?
        </Link>
      </div>
      {error && <p className="text-sm text-red-600">{error}</p>}
      <Button type="submit" disabled={loading} className="mt-2">
        {loading ? "Logging in..." : "Log in"}
      </Button>
    </form>
  );
}

export default function Login() {
  return (
    <AuthShell
      eyebrow="Welcome back"
      title="Log in"
      footer={
        <>
          Don&apos;t have an account?{" "}
          <Link href="/signup" className="text-imperial font-medium hover:underline">
            Create one
          </Link>
        </>
      }
    >
      <Suspense fallback={null}>
        <LoginForm />
      </Suspense>
    </AuthShell>
  );
}
