import Link from "next/link";
import SpireMark from "./SpireMark";

export default function AuthShell({ eyebrow, title, subtitle, children, footer }) {
  return (
    <section className="mx-auto max-w-md px-5 sm:px-8 py-16 sm:py-24">
      <Link href="/" className="flex items-center gap-2.5 mb-10 w-fit">
        <SpireMark className="h-6 w-8" />
        <span className="font-display font-semibold text-imperial text-lg">SkillSpire</span>
      </Link>
      <p className="eyebrow text-lilac mb-3">{eyebrow}</p>
      <h1 className="font-display text-2xl sm:text-3xl font-semibold text-imperial mb-2">
        {title}
      </h1>
      {subtitle && <p className="text-sm text-graphite/60 mb-8">{subtitle}</p>}
      <div className={subtitle ? "" : "mt-8"}>{children}</div>
      {footer && <div className="mt-8 text-sm text-graphite/60">{footer}</div>}
    </section>
  );
}
