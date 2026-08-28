export const metadata = { title: "Opportunities | SkillSpire Network" };

const CATEGORIES = ["Jobs", "Internships", "Scholarships", "Fellowships", "Competitions", "Events"];

export default function Opportunities() {
  return (
    <>
      <section className="bg-imperial-deep text-ivory py-16 sm:py-24">
        <div className="mx-auto max-w-4xl px-5 sm:px-8">
          <p className="eyebrow text-lilac mb-4">Opportunities</p>
          <h1 className="font-display text-3xl sm:text-5xl font-semibold leading-tight">
            Your next opportunity could be here.
          </h1>
        </div>
      </section>
      <section className="mx-auto max-w-6xl px-5 sm:px-8 py-16 sm:py-20">
        <div className="flex flex-wrap gap-3 mb-12">
          {CATEGORIES.map((c) => (
            <span key={c} className="eyebrow rounded-full border border-imperial/20 text-imperial px-4 py-2">
              {c}
            </span>
          ))}
        </div>
        <div className="rounded-2xl border border-dashed border-graphite/20 p-14 text-center">
          <p className="text-graphite/60 text-sm">No opportunities posted yet.</p>
        </div>
      </section>
    </>
  );
}
