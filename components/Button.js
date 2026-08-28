import Link from "next/link";

const VARIANTS = {
  primary: "bg-imperial text-ivory hover:bg-imperial-deep",
  onDark: "bg-neon text-imperial-deep hover:brightness-95",
  ghost: "bg-transparent text-imperial border border-imperial/25 hover:border-imperial/60",
  ghostOnDark: "bg-transparent text-ivory border border-ivory/30 hover:border-ivory/70",
};

export default function Button({ href, variant = "primary", children, className = "", ...rest }) {
  const styles = `inline-flex items-center justify-center gap-2 rounded-full px-6 py-3 text-sm font-semibold transition-colors disabled:opacity-50 disabled:cursor-not-allowed ${VARIANTS[variant]} ${className}`;
  if (href) {
    return (
      <Link href={href} className={styles} {...rest}>
        {children}
      </Link>
    );
  }
  return (
    <button className={styles} {...rest}>
      {children}
    </button>
  );
}
