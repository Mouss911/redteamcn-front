import type { ReactNode } from "react";
import { FiCopy, FiCode } from "react-icons/fi";

export interface ChartItem {
  id: string;
  title: string;
  description: string;
  category: string;
  chart?: ReactNode;
}

interface ChartCardProps {
  chart: ChartItem;
  onViewCode?: () => void;
  onCopy?: () => void;
}

export function ChartCard({ chart, onViewCode, onCopy }: ChartCardProps) {
  return (
    <div className="group relative rounded-lg border bg-card overflow-hidden hover:shadow-md transition-shadow">
      {/* Header */}
      <div className="flex items-start justify-between p-4 border-b">
        <div className="flex items-center space-x-2">
          <FiCode className="h-4 w-4 text-muted-foreground" />
          <span className="text-sm font-medium">{chart.id}</span>
        </div>
        <div className="flex items-center space-x-2">
          <button
            onClick={onCopy}
            className="inline-flex items-center justify-center rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 border border-input bg-background shadow-sm hover:bg-accent hover:text-accent-foreground h-8 w-8 px-0"
          >
            <FiCopy className="h-3.5 w-3.5" />
          </button>
          <button
            onClick={onViewCode}
            className="inline-flex items-center justify-center rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 border border-input bg-background shadow-sm hover:bg-accent hover:text-accent-foreground h-8 px-3 py-1"
          >
            View Code
          </button>
        </div>
      </div>

      {/* Chart Content */}
      <div className="p-6">
        <div className="space-y-2 mb-4">
          <h3 className="text-lg font-semibold">{chart.title}</h3>
          <p className="text-sm text-muted-foreground">{chart.description}</p>
        </div>
        
        {/* Chart Area */}
        <div className="rounded-md bg-muted/50 p-8 min-h-[300px] flex items-center justify-center">
          {chart.chart || (
            <p className="text-muted-foreground">Chart: {chart.title}</p>
          )}
        </div>
      </div>
    </div>
  );
}
