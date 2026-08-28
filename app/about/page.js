import PillarCard from "@/components/PillarCard";

export const metadata = { title: "About | SkillSpire Network" };

const PILLARS = [
  { number: "01", name: "Skill-Based Learning", description: "Practical, cohort-based training in in-demand digital skills." },
  { number: "02", name: "Implementation & Earning", description: "Real projects that turn skills into paid work." },
  { number: "03", name: "Community & Collaboration", description: "A network to build alongside, not a course to take alone." },
  { number: "04", name: "Visibility & Personal Branding", description: "Positioning your work in front of the people who can hire it." },
  { number: "05", name: "Structured Programmes", description: "Clear cohorts with defined outcomes and timelines." },
];

export default function About() {
  return (
    <>
      <section className="bg-imperial-deep text-ivory py-20 sm:py-28">
        <div className="mx-auto max-w-4xl px-5 sm:px-8">
          <p className="eyebrow text-lilac mb-4">About SkillSpire</p>
          <h1 className="font-display text-3xl sm:text-5xl font-semibold leading-tight">
            Building a stronger generation of skilled, connected professionals.
          </h1>
        </div>
      </section>

      <section className="mx-auto max-w-4xl px-5 sm:px-8 py-16 sm:py-20 grid sm:grid-cols-2 gap-12">
        <div>
          <h2 className="font-display text-2xl font-semibold text-imperial mb-4">Our Story</h2>
          <p className="text-graphite/70 leading-relaxed text-sm">
            SkillSpire Network exists to empower underserved communities through
            digital skills, as a pathway to income, independence and career
            growth.
          </p>
        </div>
        <div>
          <h2 className="font-display text-2xl font-semibold text-imperial mb-4">Our Ecosystem</h2>
          <p className="text-graphite/70 leading-relaxed text-sm mb-3">
            <strong className="text-imperial">SkillSpire Academy</strong> — paid,
            structured learning programmes for skills development and career
            growth.
          </p>
          <p className="text-graphite/70 leading-relaxed text-sm">
            <strong className="text-imperial">SkillSpire Outreach</strong> — access
            and community development for those who can&apos;t afford paid
            programmes.
          </p>
        </div>
      </section>

      <section className="bg-lilac/10 py-16 sm:py-20">
        <div className="mx-auto max-w-6xl px-5 sm:px-8">
          <h2 className="font-display text-2xl sm:text-3xl font-semibold text-imperial mb-10">
            Five Pillars
          </h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-8">
            {PILLARS.map((p) => <PillarCard key={p.number} {...p} />)}
          </div>
        </div>
      </section>
    </>
  );
}
