import type { ReactNode } from "react";

export interface Framework {
  id: string;
  name: string;
  icon: ReactNode;
  description?: string;
}

interface FrameworkCardProps {
  framework: Framework;
  onClick?: () => void;
}

export function FrameworkCard({ framework, onClick }: FrameworkCardProps) {
  return (
    <button
      onClick={onClick}
      className="flex flex-col items-center justify-center bg-gray-50 p-8 rounded-lg hover:bg-accent hover:shadow-md transition-all group"
    >
      <div className="mb-4 text-4xl group-hover:scale-110 transition-transform">
        {framework.icon}
      </div>
      <p>{framework.name}</p>
      {framework.description && (
        <p className="text-sm text-muted-foreground mt-1">{framework.description}</p>
      )}
    </button>
  );
}
