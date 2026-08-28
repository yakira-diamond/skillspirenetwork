import Button from "@/components/Button";

export const metadata = { title: "Community | SkillSpire Network" };

export default function Community() {
  return (
    <>
      <section className="bg-imperial-deep text-ivory py-16 sm:py-24">
        <div className="mx-auto max-w-4xl px-5 sm:px-8">
          <p className="eyebrow text-lilac mb-4">Community</p>
          <h1 className="font-display text-3xl sm:text-5xl font-semibold leading-tight mb-6">
            You don&apos;t have to build alone.
          </h1>
          <Button href="/signup" variant="onDark">Join the Community</Button>
        </div>
      </section>

      <section id="recognition" className="mx-auto max-w-4xl px-5 sm:px-8 py-16 sm:py-24">
        <p className="eyebrow text-lilac mb-4">Recognition Programme</p>
        <h2 className="font-display text-2xl sm:text-3xl font-semibold text-imperial mb-6">
          Your contribution should count.
        </h2>
        <div className="flex flex-wrap items-center gap-3 text-sm font-mono text-imperial/70">
          <span>Participate</span> <span className="text-lilac">→</span>
          <span>Contribute</span> <span className="text-lilac">→</span>
          <span>Earn Points</span> <span className="text-lilac">→</span>
          <span>Get Recognised</span>
        </div>
        <p className="text-graphite/70 leading-relaxed mt-6 max-w-xl text-sm">
          A points-based system that rewards event participation, volunteering,
          community contribution, referrals and projects, not just paid
          enrollment.
        </p>
      </section>
    </>
  );
}
