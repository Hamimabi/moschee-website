type RenovationProgressProps = {
  compact?: boolean;
};

// Hier kannst du die Prozentzahl zentral für Startseite und Aktuelles-Seite ändern.
const renovationProgress = {
  percentage: 25,
};

export default function RenovationProgress({ compact = false }: RenovationProgressProps) {
  return (
    <section
      className={`rounded-lg border border-slate-200 bg-white ${
        compact ? "p-4 shadow-sm" : "p-5 shadow-sm md:p-6"
      }`}
    >
      <div className="flex items-center justify-between gap-4">
        <p className="text-sm font-bold uppercase tracking-[0.16em] text-emerald-950">Fortschritt</p>
        <p className="text-sm font-bold text-emerald-950">{renovationProgress.percentage}%</p>
      </div>

      <div className="mt-3 h-1.5 overflow-hidden rounded-full bg-slate-100">
        <div
          className="h-full rounded-full bg-emerald-800"
          style={{ width: `${renovationProgress.percentage}%` }}
          aria-label={`Renovierungsfortschritt: ${renovationProgress.percentage} Prozent`}
        />
      </div>
    </section>
  );
}
