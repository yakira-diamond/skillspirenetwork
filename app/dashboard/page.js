import { redirect } from "next/navigation";
import { createClient } from "@/lib/supabase/server";
import LogoutButton from "@/components/LogoutButton";

export const metadata = { title: "Dashboard | SkillSpire Network" };

export default async function Dashboard() {
  const supabase = await createClient();
  const {
    data: { user },
  } = await supabase.auth.getUser();

  if (!user) {
    redirect("/login");
  }

  const name = user.user_metadata?.full_name || user.email;

  return (
    <section className="mx-auto max-w-4xl px-5 sm:px-8 py-16 sm:py-20">
      <div className="flex items-center justify-between mb-10">
        <div>
          <p className="eyebrow text-lilac mb-2">Dashboard</p>
          <h1 className="font-display text-2xl sm:text-3xl font-semibold text-imperial">
            Welcome back, {name}.
          </h1>
        </div>
        <LogoutButton />
      </div>

      <div className="rounded-2xl border border-dashed border-graphite/20 p-14 text-center">
        <p className="text-graphite/60 text-sm">
          Your programmes and progress will appear here once enrollment and
          checkout are wired up in a later phase.
        </p>
      </div>
    </section>
  );
}
