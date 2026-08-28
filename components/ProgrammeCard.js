import Link from "next/link";
import StatusBadge from "./StatusBadge";

export default function ProgrammeCard({
  href = "#",
  category,
  name,
  description,
  level,
  duration,
  price,
  status = "open",
}) {
  return (
    <Link
      href={href}
      className="group flex flex-col justify-between rounded-2xl border border-graphite/10 bg-ivory p-6 hover:border-imperial/30 hover:shadow-[0_8px_30px_-12px_rgba(28,31,74,0.25)] transition-all"
    >
      <div>
        <div className="flex items-center justify-between mb-4">
          <span className="eyebrow text-lilac">{category}</span>
          <StatusBadge status={status} />
        </div>
        <h3 className="font-display text-xl font-semibold text-imperial mb-2 group-hover:text-imperial-deep">
          {name}
        </h3>
        <p className="text-sm text-graphite/65 leading-relaxed mb-5">{description}</p>
      </div>
      <div className="flex items-center justify-between pt-4 border-t border-graphite/10">
        <span className="text-xs text-graphite/55">
          {level} &middot; {duration}
        </span>
        <span className="text-sm font-semibold text-imperial">{price}</span>
      </div>
    </Link>
  );
}
