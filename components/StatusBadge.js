// Cohort status badge. Status meanings match the SkillSpire UX spec:
// open, coming-soon, waitlist, closed, completed.
const STYLES = {
  open: "bg-neon/15 text-imperial border-neon/40",
  "coming-soon": "bg-lilac/15 text-imperial border-lilac/40",
  waitlist: "bg-imperial/8 text-imperial border-imperial/25",
  closed: "bg-graphite/8 text-graphite/70 border-graphite/20",
  completed: "bg-graphite/8 text-graphite/50 border-graphite/15",
};

const LABELS = {
  open: "Open",
  "coming-soon": "Coming soon",
  waitlist: "Waitlist",
  closed: "Closed",
  completed: "Completed",
};

export default function StatusBadge({ status = "open" }) {
  return (
    <span
      className={`eyebrow inline-flex items-center rounded-full border px-3 py-1 ${STYLES[status]}`}
    >
      {LABELS[status]}
    </span>
  );
}
