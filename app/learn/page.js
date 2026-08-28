import ProgrammeCard from "@/components/ProgrammeCard";

export const metadata = { title: "Learn | SkillSpire Network" };

const PROGRAMMES = [
  {
    href: "/learn/social-media-management",
    category: "Digital Marketing",
    name: "Social Media Management",
    description:
      "A hands-on cohort covering strategy, content and platform management, built around real Nigerian brand case studies.",
    level: "Beginner",
    duration: "4 weeks · 12 sessions",
    price: "Cohort-based",
    status: "open",
  },
  {
    category: "Content & Storytelling",
    name: "Digital Content Creation",
    description: "Turn a phone and an idea into a consistent content practice.",
    level: "Beginner",
    duration: "Coming soon",
    price: "TBA",
    status: "coming-soon",
  },
  {
    category: "Career & Branding",
    name: "Personal Branding for Tech Careers",
    description: "Build the visibility to be found for the work you want to do.",
    level: "All levels",
    duration: "Coming soon",
    price: "TBA",
    status: "coming-soon",
  },
];

export default function Learn() {
  return (
    <>
      <section className="bg-imperial-deep text-ivory py-16 sm:py-24">
        <div className="mx-auto max-w-4xl px-5 sm:px-8">
          <p className="eyebrow text-lilac mb-4">Learn</p>
          <h1 className="font-display text-3xl sm:text-5xl font-semibold leading-tight mb-6">
            Find the skill you&apos;re ready to build.
          </h1>
          <input
            type="text"
            placeholder="Search programmes..."
            className="w-full sm:w-96 rounded-full bg-ivory/10 border border-ivory/20 px-5 py-3 text-sm placeholder:text-ivory/40 focus:outline-none focus:border-neon"
          />
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-5 sm:px-8 py-16 sm:py-20">
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {PROGRAMMES.map((p) => <ProgrammeCard key={p.name} {...p} />)}
        </div>
      </section>
    </>
  );
}
