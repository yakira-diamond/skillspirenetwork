export default function FormField({ label, id, ...rest }) {
  return (
    <div>
      <label htmlFor={id} className="text-sm font-medium text-graphite/80 block mb-2">
        {label}
      </label>
      <input
        id={id}
        name={id}
        className="w-full rounded-xl border border-graphite/15 px-4 py-3 text-sm focus:outline-none focus:border-imperial"
        {...rest}
      />
    </div>
  );
}
