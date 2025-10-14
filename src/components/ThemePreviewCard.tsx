import type { ReactNode } from "react";

export interface ThemePreview {
  id: string;
  title: string;
  description?: string;
  preview: ReactNode;
}

interface ThemePreviewCardProps {
  preview: ThemePreview;
}

export function ThemePreviewCard({ preview }: ThemePreviewCardProps) {
  return (
    <div className="rounded-lg border bg-card overflow-hidden">
      <div className="p-6">
        {preview.preview}
      </div>
    </div>
  );
}
