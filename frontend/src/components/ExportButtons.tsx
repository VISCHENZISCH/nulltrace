"use client";

import { Download, FileJson } from "lucide-react";

interface ExportButtonsProps {
  data: any;
  filename: string;
}

export function ExportButtons({ data, filename }: ExportButtonsProps) {
  const exportJson = () => {
    const blob = new Blob([JSON.stringify(data, null, 2)], { type: "application/json" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = `${filename}.json`;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
  };

  const exportPdf = () => {
    alert("Export PDF en cours de développement.");
  };

  return (
    <div className="flex items-center gap-2">
      <button onClick={exportJson} className="btn-secondary" style={{ padding: "8px 12px" }}>
        <FileJson className="mr-2 h-4 w-4" />
        JSON
      </button>
      <button onClick={exportPdf} className="btn-secondary" style={{ padding: "8px 12px" }}>
        <Download className="mr-2 h-4 w-4" />
        PDF
      </button>
    </div>
  );
}
