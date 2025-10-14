import { FiEye, FiCode, FiExternalLink } from "react-icons/fi";

export interface BlockItem {
  id: string;
  title: string;
  description: string;
  category: string;
  image?: string;
  previewUrl?: string;
  codeUrl?: string;
}

interface BlockCardProps {
  block: BlockItem;
  viewMode: "preview" | "code";
  onPreview?: () => void;
  onViewCode?: () => void;
  onOpenExternal?: () => void;
}

export function BlockCard({
  block,
  viewMode,
  onPreview,
  onViewCode,
  onOpenExternal,
}: BlockCardProps) {
  return (
    <div className="group relative rounded-lg border bg-card p-6 hover:shadow-md transition-shadow">
      <div className="flex items-start justify-between">
        <div className="flex-1">
          <h3 className="text-lg font-semibold">{block.title}</h3>
          <p className="text-sm text-muted-foreground mt-1">
            {block.description}
          </p>
        </div>
        <div className="flex items-center space-x-2">
          <button
            onClick={onPreview}
            className="inline-flex items-center justify-center rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 border border-input bg-background shadow-sm hover:bg-accent hover:text-accent-foreground h-9 w-9 px-0"
          >
            <FiEye className="h-4 w-4" />
          </button>
          <button
            onClick={onViewCode}
            className="inline-flex items-center justify-center rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 border border-input bg-background shadow-sm hover:bg-accent hover:text-accent-foreground h-9 w-9 px-0"
          >
            <FiCode className="h-4 w-4" />
          </button>
          <button
            onClick={onOpenExternal}
            className="inline-flex items-center justify-center rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 bg-primary text-primary-foreground shadow hover:bg-primary/90 h-9 px-4 py-2"
          >
            <FiExternalLink className="mr-2 h-4 w-4" />
            Open in v0
          </button>
        </div>
      </div>

      {/* Preview Area */}
      {viewMode === "preview" && (
        <div className="mt-4 rounded-md border bg-muted/50 p-8 min-h-[300px] flex items-center justify-center">
          <p className="text-muted-foreground">Preview: {block.title}</p>
        </div>
      )}

      {/* Code Area */}
      {viewMode === "code" && (
        <div className="mt-4 rounded-md border bg-muted/50 p-4">
          <pre className="text-sm">
            <code className="text-muted-foreground">
              {`// ${block.title} code\n// Coming soon...`}
            </code>
          </pre>
        </div>
      )}
    </div>
  );
}
