import { PageHeader } from "../../../components/PageHeader";
import { ComponentCard } from "../../../components/ComponentCard";
import { ComponentGrid } from "../../../components/ComponentGrid";

interface Component {
  name: string;
  href: string;
  badge?: "new" | "updated";
  description?: string;
}

const components: Component[] = [
  { name: "Accordion", href: "/components/accordion" },
  { name: "Alert", href: "/components/alert" },
  { name: "Alert Dialog", href: "/components/alert-dialog" },
  { name: "Aspect Ratio", href: "/components/aspect-ratio" },
  { name: "Avatar", href: "/components/avatar" },
  { name: "Badge", href: "/components/badge" },
  { name: "Breadcrumb", href: "/components/breadcrumb" },
  { name: "Button", href: "/components/button" },
  { name: "Button Group", href: "/components/button-group", badge: "new" },
  { name: "Calendar", href: "/components/calendar" },
  { name: "Card", href: "/components/card" },
  { name: "Carousel", href: "/components/carousel" },
  { name: "Chart", href: "/components/chart" },
  { name: "Checkbox", href: "/components/checkbox" },
  { name: "Collapsible", href: "/components/collapsible" },
  { name: "Combobox", href: "/components/combobox" },
  { name: "Command", href: "/components/command" },
  { name: "Context Menu", href: "/components/context-menu" },
  { name: "Data Table", href: "/components/data-table" },
  { name: "Date Picker", href: "/components/date-picker" },
  { name: "Dialog", href: "/components/dialog" },
  { name: "Drawer", href: "/components/drawer" },
  { name: "Dropdown Menu", href: "/components/dropdown-menu" },
  { name: "Empty", href: "/components/empty", badge: "new" },
  { name: "Field", href: "/components/field", badge: "new" },
  { name: "Form", href: "/components/form" },
  { name: "Hover Card", href: "/components/hover-card" },
  { name: "Input", href: "/components/input" },
  { name: "Input Group", href: "/components/input-group", badge: "new" },
  { name: "Input OTP", href: "/components/input-otp" },
  { name: "Item", href: "/components/item", badge: "new" },
  { name: "Kbd", href: "/components/kbd", badge: "new" },
  { name: "Label", href: "/components/label" },
  { name: "Menubar", href: "/components/menubar" },
  { name: "Navigation Menu", href: "/components/navigation-menu" },
  { name: "Pagination", href: "/components/pagination" },
  { name: "Popover", href: "/components/popover" },
  { name: "Progress", href: "/components/progress" },
  { name: "Radio Group", href: "/components/radio-group" },
  { name: "Resizable", href: "/components/resizable" },
  { name: "Scroll Area", href: "/components/scroll-area" },
  { name: "Select", href: "/components/select" },
  { name: "Separator", href: "/components/separator" },
  { name: "Sheet", href: "/components/sheet" },
  { name: "Sidebar", href: "/components/sidebar" },
  { name: "Skeleton", href: "/components/skeleton" },
  { name: "Slider", href: "/components/slider" },
  { name: "Sonner", href: "/components/sonner" },
  { name: "Switch", href: "/components/switch" },
  { name: "Table", href: "/components/table" },
  { name: "Tabs", href: "/components/tabs" },
  { name: "Textarea", href: "/components/textarea" },
  { name: "Toast", href: "/components/toast" },
  { name: "Toggle", href: "/components/toggle" },
  { name: "Toggle Group", href: "/components/toggle-group" },
  { name: "Tooltip", href: "/components/tooltip" },
];

export function ComponentsPage() {
  const handleCopy = () => {
    console.log("Copy page");
  };

  const handlePrevious = () => {
    console.log("Previous page");
  };

  const handleNext = () => {
    console.log("Next page");
  };

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-start justify-between gap-4">
        <div className="flex-1">
          <PageHeader
            title="Components"
            description="Here you can find all the components available in the library. We are working on adding more components."
            showCopyButton={true}
            showNavigation={true}
            onCopy={handleCopy}
            onPrevious={handlePrevious}
            onNext={handleNext}
          />
        </div>
      </div>

      <ComponentGrid columns={3}>
        {components.map((component) => (
          <ComponentCard
            key={component.href}
            name={component.name}
            href={component.href}
            badge={component.badge}
            description={component.description}
          />
        ))}
      </ComponentGrid>
    </div>
  );
}
