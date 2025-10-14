import { useState } from "react";
import { Tabs } from "../../../components/Tabs";
import { ChartCard, type ChartItem } from "../../../components/ChartCard";
import { ThemeSelector } from "../../../components/ThemeSelector";
import { TimeRangeSelector } from "../../../components/TimeRangeSelector";
import { EmptyState } from "../../../components/EmptyState";

const charts: ChartItem[] = [
  {
    id: "area-chart",
    title: "Area Chart",
    description: "Showing total visitors for the last 6 months",
    category: "area",
  },
  {
    id: "area-chart-interactive",
    title: "Area Chart - Interactive",
    description: "Showing total visitors for the last 3 months",
    category: "area",
  },
  {
    id: "area-chart-linear",
    title: "Area Chart - Linear",
    description: "Showing total visitors for the last 6 months",
    category: "area",
  },
  {
    id: "area-chart-step",
    title: "Area Chart - Step",
    description: "Showing total visitors for the last 6 months",
    category: "area",
  },
  {
    id: "bar-chart",
    title: "Bar Chart",
    description: "Showing total visitors for the last 6 months",
    category: "bar",
  },
  {
    id: "bar-chart-horizontal",
    title: "Bar Chart - Horizontal",
    description: "Showing total visitors for the last 6 months",
    category: "bar",
  },
  {
    id: "bar-chart-stacked",
    title: "Bar Chart - Stacked",
    description: "Showing total visitors for the last 6 months",
    category: "bar",
  },
  {
    id: "line-chart",
    title: "Line Chart",
    description: "Showing total visitors for the last 6 months",
    category: "line",
  },
  {
    id: "line-chart-multiple",
    title: "Line Chart - Multiple",
    description: "Showing total visitors for the last 6 months",
    category: "line",
  },
  {
    id: "pie-chart",
    title: "Pie Chart",
    description: "Showing visitor distribution",
    category: "pie",
  },
  {
    id: "pie-chart-donut",
    title: "Pie Chart - Donut",
    description: "Showing visitor distribution",
    category: "pie",
  },
  {
    id: "radar-chart",
    title: "Radar Chart",
    description: "Showing performance metrics",
    category: "radar",
  },
  {
    id: "radial-chart",
    title: "Radial Chart",
    description: "Showing progress metrics",
    category: "radial",
  },
  {
    id: "tooltip-advanced",
    title: "Tooltip - Advanced",
    description: "Interactive tooltip with custom content",
    category: "tooltips",
  },
];

const categories = [
  { id: "area", label: "Area Charts" },
  { id: "bar", label: "Bar Charts" },
  { id: "line", label: "Line Charts" },
  { id: "pie", label: "Pie Charts" },
  { id: "radar", label: "Radar Charts" },
  { id: "radial", label: "Radial Charts" },
  { id: "tooltips", label: "Tooltips" },
];

export function ChartsPage() {
  const [activeCategory, setActiveCategory] = useState("area");
  const [theme, setTheme] = useState("green");
  const [timeRange, setTimeRange] = useState("3m");

  const filteredCharts = charts.filter(
    (chart) => chart.category === activeCategory
  );

  const handleViewCode = (chartId: string) => {
    console.log("View code for chart:", chartId);
  };

  const handleCopy = (chartId: string) => {
    console.log("Copy chart:", chartId);
  };

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="scroll-m-20 text-4xl font-bold tracking-tight">
            Charts
          </h1>
          <p className="text-lg text-muted-foreground mt-2">
            Beautiful charts built with Recharts
          </p>
        </div>
        <ThemeSelector theme={theme} onThemeChange={setTheme} />
      </div>

      {/* Tabs */}
      <Tabs
        tabs={categories}
        activeTab={activeCategory}
        onTabChange={setActiveCategory}
      />

      {/* Time Range Selector */}
      {activeCategory === "area" && (
        <div className="flex justify-end">
          <TimeRangeSelector range={timeRange} onRangeChange={setTimeRange} />
        </div>
      )}

      {/* Charts Grid */}
      {filteredCharts.length > 0 ? (
        <div className="grid grid-cols-1 gap-6 lg:grid-cols-2 xl:grid-cols-3">
          {filteredCharts.map((chart) => (
            <ChartCard
              key={chart.id}
              chart={chart}
              onViewCode={() => handleViewCode(chart.id)}
              onCopy={() => handleCopy(chart.id)}
            />
          ))}
        </div>
      ) : (
        <EmptyState
          message="No charts found in this category."
          description="Try selecting a different category."
        />
      )}
    </div>
  );
}
