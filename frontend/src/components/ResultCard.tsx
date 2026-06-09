import { LucideIcon } from "lucide-react";

interface ResultCardProps {
  title: string;
  icon: LucideIcon;
  children: React.ReactNode;
}

export function ResultCard({ title, icon: Icon, children }: ResultCardProps) {
  return (
    <div className="framer-card border border-hairline flex flex-col h-full">
      <div className="flex items-center gap-3 border-b border-hairline pb-4 mb-4">
        <div className="flex items-center justify-center w-8 h-8 rounded-full bg-surface-2">
          <Icon className="h-4 w-4 text-ink" />
        </div>
        <h3 className="headline text-ink">{title}</h3>
      </div>
      <div className="flex-1 text-ink">
        {children}
      </div>
    </div>
  );
}
