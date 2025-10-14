interface ColorTab {
  id: string;
  label: string;
  color: string;
}

interface ColorTabsProps {
  tabs: ColorTab[];
  activeTab: string;
  onTabChange: (tabId: string) => void;
}

export function ColorTabs({ tabs, activeTab, onTabChange }: ColorTabsProps) {
  return (
    <div className="border-b">
      <nav className="flex space-x-2" aria-label="Color Tabs">
        {tabs.map((tab) => (
          <button
            key={tab.id}
            onClick={() => onTabChange(tab.id)}
            className={`
              px-4 py-2 text-sm font-medium rounded-t-md transition-colors
              ${
                activeTab === tab.id
                  ? "bg-background border-b-2 border-foreground"
                  : "text-muted-foreground hover:text-foreground hover:bg-muted/50"
              }
            `}
          >
            {tab.label}
          </button>
        ))}
      </nav>
    </div>
  );
}
