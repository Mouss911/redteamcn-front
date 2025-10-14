interface TimeRangeSelectorProps {
  range: string;
  onRangeChange: (range: string) => void;
  ranges?: { label: string; value: string }[];
}

export function TimeRangeSelector({ 
  range, 
  onRangeChange,
  ranges = [
    { label: "Last 3 months", value: "3m" },
    { label: "Last 6 months", value: "6m" },
    { label: "Last year", value: "1y" },
    { label: "All time", value: "all" },
  ]
}: TimeRangeSelectorProps) {
  return (
    <select
      value={range}
      onChange={(e) => onRangeChange(e.target.value)}
      className="inline-flex items-center justify-center rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring border border-input bg-background shadow-sm hover:bg-accent hover:text-accent-foreground h-9 px-3 py-1"
    >
      {ranges.map((r) => (
        <option key={r.value} value={r.value}>
          {r.label}
        </option>
      ))}
    </select>
  );
}
