// The Spire: SkillSpire's signature mark. Four ascending bars, each one
// a stage of the Learn → Build → Connect → Grow journey. Used in the
// nav, the hero, and as a loading/step indicator across the site.
export default function SpireMark({ className = "", glow = true, tone = "neon" }) {
  const barColor = tone === "neon" ? "#00F0FF" : "#B79EFF";
  return (
    <svg
      viewBox="0 0 44 32"
      className={className}
      role="img"
      aria-label="SkillSpire"
    >
      {glow && (
        <defs>
          <filter id="spire-glow" x="-50%" y="-50%" width="200%" height="200%">
            <feGaussianBlur stdDeviation="1.4" result="blur" />
            <feMerge>
              <feMergeNode in="blur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
        </defs>
      )}
      <g filter={glow ? "url(#spire-glow)" : undefined}>
        <rect x="0" y="20" width="6" height="12" rx="1" fill={barColor} opacity="0.55" />
        <rect x="10" y="14" width="6" height="18" rx="1" fill={barColor} opacity="0.72" />
        <rect x="20" y="7" width="6" height="25" rx="1" fill={barColor} opacity="0.88" />
        <rect x="30" y="0" width="6" height="32" rx="1" fill={barColor} />
      </g>
    </svg>
  );
}
