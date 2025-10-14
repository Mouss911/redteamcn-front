import { Link } from "react-router-dom";

interface ComponentCardProps {
  name: string;
  href: string;
  badge?: "new" | "updated";
  description?: string;
}

export function ComponentCard({ name, href, badge, description }: ComponentCardProps) {
  return (
    <Link
      to={href}
      className="group relative flex items-center space-x-2 rounded-md border border-input bg-background p-4 hover:bg-accent hover:text-accent-foreground transition-colors"
    >
      <div className="flex-1">
        <div className="flex items-center space-x-2">
          <span className="text-sm font-medium">{name}</span>
          {badge && (
            <span className="inline-flex h-2 w-2 rounded-full bg-blue-500" title={badge}></span>
          )}
        </div>
        {description && (
          <p className="text-xs text-muted-foreground mt-1">{description}</p>
        )}
      </div>
    </Link>
  );
}
