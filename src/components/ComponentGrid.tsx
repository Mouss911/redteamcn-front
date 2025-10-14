import type { ReactNode } from "react";

interface ComponentGridProps {
  children: ReactNode;
  columns?: 1 | 2 | 3 | 4;
}

export function ComponentGrid({ children, columns = 3 }: ComponentGridProps) {
  const gridColsClass = {
    1: "lg:grid-cols-1",
    2: "lg:grid-cols-2",
    3: "lg:grid-cols-3",
    4: "lg:grid-cols-4",
  }[columns];

  return (
    <div className={`grid grid-cols-1 gap-4 sm:grid-cols-2 ${gridColsClass} pt-4`}>
      {children}
    </div>
  );
}
