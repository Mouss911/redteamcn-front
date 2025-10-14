import { Link, useLocation } from "react-router-dom";
import { useState } from "react";

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
      { title: "Accordion", href: "/components/accordion" },
      { title: "Alert", href: "/components/alert" },
      { title: "Alert Dialog", href: "/components/alert-dialog" },
      { title: "Aspect Ratio", href: "/components/aspect-ratio" },
      { title: "Avatar", href: "/components/avatar" },
      { title: "Badge", href: "/components/badge" },
      { title: "Breadcrumb", href: "/components/breadcrumb" },
      { title: "Button", href: "/components/button" },
      { title: "Button Group", href: "/components/button-group", },
      { title: "Calendar", href: "/components/calendar" },
      { title: "Card", href: "/components/card" },
      { title: "Carousel", href: "/components/carousel" },
      { title: "Chart", href: "/components/chart" },
      { title: "Checkbox", href: "/components/checkbox" },
      { title: "Collapsible", href: "/components/collapsible" },
      { title: "Combobox", href: "/components/combobox" },
      { title: "Command", href: "/components/command" },
      { title: "Context Menu", href: "/components/context-menu" },
      { title: "Data Table", href: "/components/data-table" },
      { title: "Date Picker", href: "/components/date-picker" },
      { title: "Dialog", href: "/components/dialog" },
      { title: "Drawer", href: "/components/drawer" },
      { title: "Dropdown Menu", href: "/components/dropdown-menu" },
      { title: "Empty", href: "/components/empty", },
      { title: "Field", href: "/components/field",  },
      { title: "Form", href: "/components/form" },
      { title: "Hover Card", href: "/components/hover-card" },
      { title: "Input", href: "/components/input" },
      { title: "Label", href: "/components/label" },
      { title: "Layout", href: "/components/layout" },
      { title: "List", href: "/components/list" },
      { title: "Modal", href: "/components/modal" },
      { title: "Navbar", href: "/components/navbar" },
      { title: "Notification", href: "/components/notification" },
      { title: "Popover", href: "/components/popover" },
      { title: "Progress", href: "/components/progress" },
      { title: "Radio Group", href: "/components/radio-group" },
      { title: "Scroll Area", href: "/components/scroll-area" },
      { title: "Select", href: "/components/select" },
      { title: "Skeleton", href: "/components/skeleton" },
      { title: "Slider", href: "/components/slider" },
      { title: "Switch", href: "/components/switch" },
      { title: "Table", href: "/components/table" },
      { title: "Tabs", href: "/components/tabs" },
      { title: "Textarea", href: "/components/textarea" },
      { title: "Toast", href: "/components/toast" },
      { title: "Tooltip", href: "/components/tooltip" },
      { title: "Typography", href: "/components/typography" },
     
    ],
  },
];

export function Sidebar() {
  const location = useLocation();
  const [expandedSections] = useState<string[]>(["Components"]);

  return (
    <aside className="fixed top-14 z-30 -ml-2 hidden h-[calc(100vh-3.5rem)] w-full shrink-0 md:sticky md:block">
      <div className="relative h-full overflow-y-auto py-6 pr-6 lg:py-8 scrollbar-hide">
        <div className="w-full">
          {sidebarData.map((section) => {
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
                          key={item.href}
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
