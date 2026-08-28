import Link from "next/link";
import SpireMark from "./SpireMark";

const COLUMNS = [
  {
    title: "Learn",
    links: [
      { href: "/learn", label: "Programmes" },
      { href: "/learn#cohorts", label: "Cohort dates" },
    ],
  },
  {
    title: "Community",
    links: [
      { href: "/community", label: "About the community" },
      { href: "/community#recognition", label: "Recognition Programme" },
    ],
  },
  {
    title: "Organisation",
    links: [
      { href: "/about", label: "About SkillSpire" },
      { href: "/get-involved", label: "Partner with us" },
      { href: "/contact", label: "Contact" },
    ],
  },
];

export default function Footer() {
  return (
    <footer className="bg-imperial-deep text-ivory/80">
      <div className="mx-auto max-w-6xl px-5 sm:px-8 py-14">
        <div className="grid grid-cols-2 md:grid-cols-5 gap-10">
          <div className="col-span-2">
            <div className="flex items-center gap-2.5 mb-4">
              <SpireMark className="h-6 w-8" />
              <span className="font-display font-semibold text-ivory text-lg">
                SkillSpire
              </span>
            </div>
            <p className="text-sm leading-relaxed max-w-xs text-ivory/60">
              A digital skills ecosystem for emerging professionals: learn, build,
              connect and grow.
            </p>
          </div>

          {COLUMNS.map((col) => (
            <div key={col.title}>
              <p className="eyebrow text-lilac mb-4">{col.title}</p>
              <ul className="flex flex-col gap-2.5">
                {col.links.map((l) => (
                  <li key={l.href}>
                    <Link href={l.href} className="text-sm hover:text-neon transition-colors">
                      {l.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-14 pt-6 border-t border-ivory/10 flex flex-col sm:flex-row justify-between gap-3 text-xs text-ivory/45">
          <p>&copy; {new Date().getFullYear()} SkillSpire Network. All rights reserved.</p>
          <div className="flex gap-5">
            <Link href="/contact" className="hover:text-ivory/70">Contact</Link>
            <a href="#" className="hover:text-ivory/70">Instagram</a>
            <a href="#" className="hover:text-ivory/70">LinkedIn</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
