import type { ReactNode } from "react";
import { FiCopy, FiChevronLeft, FiChevronRight } from "react-icons/fi";

interface PageHeaderProps {
  title: string;
  description?: string;
  showCopyButton?: boolean;
  showNavigation?: boolean;
  onCopy?: () => void;
  onPrevious?: () => void;
  onNext?: () => void;
  actions?: ReactNode;
}

export function PageHeader({
  title,
  description,
  showCopyButton = true,
  showNavigation = true,
  onCopy,
  onPrevious,
  onNext,
  actions,
}: PageHeaderProps) {
  return (
    <div className="space-y-4">
      {/* Header with actions */}
      <div className="flex items-center justify-between">
        <div className="space-y-1">
          <h1 className="scroll-m-20 text-4xl font-bold tracking-tight">
            {title}
          </h1>
        </div>
        
        {(showCopyButton || showNavigation || actions) && (
          <div className="flex items-center space-x-2">
            {showCopyButton && (
              <button
                onClick={onCopy}
                className="inline-flex items-center justify-center rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 border border-input bg-background shadow-sm hover:bg-accent hover:text-accent-foreground h-9 px-4 py-2"
              >
                <FiCopy className="mr-2 h-4 w-4" />
                Copy Page
              </button>
            )}
            
            {showNavigation && (
              <>
                <button
                  onClick={onPrevious}
                  className="inline-flex items-center justify-center rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 border border-input bg-background shadow-sm hover:bg-accent hover:text-accent-foreground h-9 w-9 px-0"
                >
                  <FiChevronLeft className="h-4 w-4" />
                </button>
                <button
                  onClick={onNext}
                  className="inline-flex items-center justify-center rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 border border-input bg-background shadow-sm hover:bg-accent hover:text-accent-foreground h-9 w-9 px-0"
                >
                  <FiChevronRight className="h-4 w-4" />
                </button>
              </>
            )}
            
            {actions}
          </div>
        )}
      </div>

      {/* Description */}
      {description && (
        <p className="text-lg text-muted-foreground">
          {description}
        </p>
      )}
    </div>
  );
}
