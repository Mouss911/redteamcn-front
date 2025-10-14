import { FiEye, FiCode } from "react-icons/fi";

type ViewMode = "preview" | "code";

interface ViewModeToggleProps {
  mode: ViewMode;
  onModeChange: (mode: ViewMode) => void;
}

export function ViewModeToggle({ mode, onModeChange }: ViewModeToggleProps) {
  return (
    <div className="flex items-center space-x-2 border rounded-lg p-1 w-fit">
      <button
        onClick={() => onModeChange("preview")}
        className={`
          inline-flex items-center justify-center rounded-md px-3 py-1.5 text-sm font-medium transition-colors
          ${
            mode === "preview"
              ? "bg-background shadow-sm"
              : "text-muted-foreground hover:text-foreground"
          }
        `}
      >
        <FiEye className="mr-2 h-4 w-4" />
        Preview
      </button>
      <button
        onClick={() => onModeChange("code")}
        className={`
          inline-flex items-center justify-center rounded-md px-3 py-1.5 text-sm font-medium transition-colors
          ${
            mode === "code"
              ? "bg-background shadow-sm"
              : "text-muted-foreground hover:text-foreground"
          }
        `}
      >
        <FiCode className="mr-2 h-4 w-4" />
        Code
      </button>
    </div>
  );
}
