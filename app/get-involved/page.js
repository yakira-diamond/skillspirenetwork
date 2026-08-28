import Link from "next/link";

export const metadata = { title: "Get Involved | SkillSpire Network" };

const CARDS = [
  { title: "Learn", copy: "Join a programme.", href: "/learn" },
  { title: "Volunteer", copy: "Contribute your time and skills.", href: "/contact" },
  { title: "Partner", copy: "Work with SkillSpire.", href: "/contact" },
  { title: "Contribute", copy: "Write, speak, mentor or create.", href: "/contact" },
];

export default function GetInvolved() {
  return (
    <section className="mx-auto max-w-5xl px-5 sm:px-8 py-16 sm:py-24">
      <p className="eyebrow text-lilac mb-4">Get Involved</p>
      <h1 className="font-display text-3xl sm:text-4xl font-semibold text-imperial mb-12 max-w-xl">
        There&apos;s more than one way to be part of SkillSpire.
      </h1>
      <div className="grid sm:grid-cols-2 gap-6">
        {CARDS.map((c) => (
          <Link
            key={c.title}
            href={c.href}
            className="rounded-2xl border border-graphite/10 p-8 hover:border-imperial/30 transition-colors"
          >
            <h3 className="font-display text-xl font-semibold text-imperial mb-2">{c.title}</h3>
            <p className="text-sm text-graphite/65">{c.copy}</p>
          </Link>
        ))}
      </div>
    </section>
  );
}
