export function RiskBadge({ score }: { score: number }) {
  let color = "bg-semantic-success";
  let label = "Faible";

  if (score >= 70) {
    color = "bg-red-500";
    label = "Élevé";
  } else if (score >= 30) {
    color = "bg-gradient-orange";
    label = "Moyen";
  }

  return (
    <div className="flex items-center gap-3">
      <div className={`${color} px-3 py-1 rounded-full text-inverse-ink caption`}>
        {label}
      </div>
      <span className="body-sm text-ink-muted">{score}/100</span>
    </div>
  );
}
