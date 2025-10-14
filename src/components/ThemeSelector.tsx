interface ThemeSelectorProps {
  theme: string;
  onThemeChange: (theme: string) => void;
  themes?: string[];
}

export function ThemeSelector({ 
  theme, 
  onThemeChange, 
  themes = ["Green", "Blue", "Purple", "Orange"] 
}: ThemeSelectorProps) {
  return (
    <div className="flex items-center space-x-2">
      <span className="text-sm font-medium text-muted-foreground">Theme:</span>
      <select
        value={theme}
        onChange={(e) => onThemeChange(e.target.value)}
        className="inline-flex items-center justify-center rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring border border-input bg-background shadow-sm hover:bg-accent hover:text-accent-foreground h-9 px-3 py-1"
      >
        {themes.map((t) => (
          <option key={t} value={t.toLowerCase()}>
            {t}
          </option>
        ))}
      </select>
    </div>
  );
}
