const FILTERS = [
  { id: "all", label: "Hammasi" },
  { id: "active", label: "Faol" },
  { id: "done", label: "Bajarilgan" },
];

export default function Filters({ value, onChange }) {
  return (
    <div className="filters" role="group" aria-label="Filtr">
      {FILTERS.map((f) => (
        <button
          key={f.id}
          type="button"
          aria-pressed={value === f.id}
          onClick={() => onChange(f.id)}
        >
          {f.label}
        </button>
      ))}
    </div>
  );
}
