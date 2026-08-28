export default function PillarCard({ number, name, description }) {
  return (
    <div className="border-t-2 border-imperial/10 pt-5 hover:border-neon transition-colors">
      <span className="font-mono text-xs text-lilac">{number}</span>
      <h3 className="font-display text-lg font-semibold text-imperial mt-2 mb-2">
        {name}
      </h3>
      <p className="text-sm leading-relaxed text-graphite/70">{description}</p>
    </div>
  );
}
