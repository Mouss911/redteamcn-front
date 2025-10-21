import { Link, useLocation } from "react-router-dom";
import { useState } from "react";
import { useAuth } from "../contexts/AuthContext";

interface SidebarItem {
  title: string;
  href: string;
  badge?: string;
}

interface SidebarSection {
  title: string;
  items: SidebarItem[];
}

const sidebarData: SidebarSection[] = [
  {
    title: "Components",
    items: [
      { title: "Accordion", href: "/components" },
      { title: "Alert", href: "/components" },
      { title: "Alert Dialog", href: "/components" },
      { title: "Aspect Ratio", href: "/components" },
      { title: "Avatar", href: "/components" },
      { title: "Badge", href: "/components" },
      { title: "Breadcrumb", href: "/components" },
      { title: "Button", href: "/components" },
      { title: "Button Group", href: "/components" },
      { title: "Calendar", href: "/components" },
      { title: "Card", href: "/components" },
      { title: "Carousel", href: "/components" },
      { title: "Chart", href: "/components" },
      { title: "Checkbox", href: "/components" },
      { title: "Collapsible", href: "/components" },
      { title: "Combobox", href: "/components" },
      { title: "Command", href: "/components" },
      { title: "Context Menu", href: "/components" },
      { title: "Data Table", href: "/components" },
      { title: "Date Picker", href: "/components" },
      { title: "Dialog", href: "/components" },
      { title: "Drawer", href: "/components" },
      { title: "Dropdown Menu", href: "/components" },
      { title: "Empty", href: "/components" },
      { title: "Field", href: "/components" },
      { title: "Form", href: "/components" },
      { title: "Hover Card", href: "/components" },
      { title: "Input", href: "/components" },
      { title: "Label", href: "/components" },
      { title: "Layout", href: "/components" },
      { title: "List", href: "/components" },
      { title: "Modal", href: "/components" },
      { title: "Navbar", href: "/components" },
      { title: "Notification", href: "/components" },
      { title: "Popover", href: "/components" },
      { title: "Progress", href: "/components" },
      { title: "Radio Group", href: "/components" },
      { title: "Scroll Area", href: "/components" },
      { title: "Select", href: "/components" },
      { title: "Skeleton", href: "/components" },
      { title: "Slider", href: "/components" },
      { title: "Switch", href: "/components" },
      { title: "Table", href: "/components" },
      { title: "Tabs", href: "/components" },
      { title: "Textarea", href: "/components" },
      { title: "Toast", href: "/components" },
      { title: "Tooltip", href: "/components" },
      { title: "Typography", href: "/components" },
    ],
  },
];

export function Sidebar() {
  const location = useLocation();
  const [expandedSections] = useState<string[]>(["Components"]);
  const { isAuthenticated, user } = useAuth();

  // Données conditionnelles pour les utilisateurs connectés
  const getSidebarData = () => {
    const baseData = [...sidebarData];

    if (isAuthenticated && user) {
      // Ajouter la section Dashboard selon le rôle
      if (user.role === "developer") {
        baseData.unshift({
          title: "Dashboard",
          items: [
            { title: "Mon Dashboard", href: "/developer-dashboard" },
            { title: "Créer un composant", href: "/create-component" },
          ],
        });
      } else if (user.role === "coach") {
        baseData.unshift({
          title: "Dashboard",
          items: [
            { title: "Mon Dashboard", href: "/coach-dashboard" },
          ],
        });
      }
    }

    return baseData;
  };

  const currentSidebarData = getSidebarData();

  return (
    <aside className="fixed top-14 z-30 -ml-2 hidden h-[calc(100vh-3.5rem)] w-full shrink-0 lg:sticky lg:block">
      <div className="relative h-full overflow-y-auto py-6 pr-6 lg:py-8 scrollbar-hide">
        <div className="w-full">
          {currentSidebarData.map((section) => {
            const isExpanded = expandedSections.includes(section.title);
            
            return (
              <div key={section.title} className="pb-4">
                <h4 className="mb-1 rounded-md px-2 py-1 text-sm font-semibold">
                  {section.title}
                </h4>
                {isExpanded && (
                  <div className="grid grid-flow-row auto-rows-max text-sm">
                    {section.items.map((item) => {
                      const isActive = location.pathname === item.href;
                      
                      return (
                        <Link
                          key={`${item.href}-${item.title}`}
                          to={item.href}
                          className={`group flex w-full items-center rounded-md px-2 py-1 hover:underline ${
                            isActive
                              ? "font-medium text-foreground"
                              : "text-muted-foreground"
                          }`}
                        >
                          {item.title}
                          {item.badge && (
                            <span className="ml-2 rounded-md bg-blue-100 px-1.5 py-0.5 text-xs leading-none text-blue-700 no-underline group-hover:no-underline dark:bg-blue-900 dark:text-blue-300">
                              {item.badge}
                            </span>
                          )}
                        </Link>
                      );
                    })}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </aside>
  );
}
