import { Link, useLocation } from "react-router-dom";
import { cn } from "../lib/utils";

const navigationItems = [
  { name: "Docs", href: "/docs" },
  { name: "Components", href: "/components" },
  { name: "Blocks", href: "/blocks" },
  { name: "Charts", href: "/charts" },
  { name: "Themes", href: "/themes" },
  { name: "Colors", href: "/colors" },
];

export function Sidebar() {
  const location = useLocation();

  return (
    <aside className="hidden md:block">
      <div className="h-full py-6 pl-8 pr-6 lg:pl-2">
        <div className="space-y-1">
          {navigationItems.map((item) => (
            <Link
              key={item.name}
              to={item.href}
              className={cn(
                "block rounded-md px-3 py-2 text-sm font-medium transition-colors hover:bg-accent hover:text-accent-foreground",
                location.pathname === item.href
                  ? "bg-accent text-accent-foreground"
                  : "text-muted-foreground"
              )}
            >
              {item.name}
            </Link>
          ))}
        </div>
      </div>
    </aside>
  );
}