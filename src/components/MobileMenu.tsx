import { Link, useLocation } from "react-router-dom";
import { FiSearch, FiMoon, FiSun, FiPlus, FiX } from "react-icons/fi";
import { useState } from "react";
import { useAuth } from "../contexts/AuthContext";
import { useTheme } from "../contexts/ThemeContext";
import { Button } from "./ui/button";
import { AuthModal } from "./AuthModal";

interface MobileMenuProps {
  isOpen: boolean;
  onClose: () => void;
}

const navigationItems = [
  { title: "Docs", href: "/docs" },
  { title: "Components", href: "/components" },
  { title: "Blocks", href: "/blocks" },
  { title: "Charts", href: "/charts" },
  { title: "Themes", href: "/themes" },
  { title: "Colors", href: "/colors" },
];

const componentItems = [
  "Accordion", "Alert", "Alert Dialog", "Aspect Ratio", "Avatar",
  "Badge", "Breadcrumb", "Button", "Button Group", "Calendar",
  "Card", "Carousel", "Chart", "Checkbox", "Collapsible",
  "Combobox", "Command", "Context Menu", "Data Table", "Date Picker",
  "Dialog", "Drawer", "Dropdown Menu", "Empty", "Field", "Form",
  "Hover Card", "Input", "Label", "Layout", "List", "Modal",
  "Navbar", "Notification", "Popover", "Progress", "Radio Group",
  "Scroll Area", "Select", "Skeleton", "Slider", "Switch",
  "Table", "Tabs", "Textarea", "Toast", "Tooltip", "Typography"
];

export function MobileMenu({ isOpen, onClose }: MobileMenuProps) {
  const location = useLocation();
  const { isAuthenticated, hasRole, logout, user } = useAuth();
  const { theme, toggleTheme } = useTheme();
  const [isAuthModalOpen, setIsAuthModalOpen] = useState(false);
  const [expandedSections, setExpandedSections] = useState<string[]>(["Navigation", "Components"]);

  const handleCreateComponent = () => {
    if (hasRole("coach")) {
      window.location.href = "/coach-dashboard";
    } else if (hasRole("developer")) {
      window.location.href = "/developer-dashboard";
    } else {
      window.location.href = "/";
    }
    onClose();
  };

  const toggleSection = (sectionTitle: string) => {
    setExpandedSections(prev =>
      prev.includes(sectionTitle)
        ? prev.filter(title => title !== sectionTitle)
        : [...prev, sectionTitle]
    );
  };

  if (!isOpen) return null;

  return (
    <>
      <div className="fixed inset-0 z-50 lg:hidden">
        {/* Backdrop */}
        <div
          className="absolute inset-0 bg-black/50 backdrop-blur-sm"
          onClick={onClose}
        />

        {/* Menu */}
        <div className="absolute top-0 left-0 h-full w-80 bg-background border-r border-border shadow-lg transform transition-transform duration-300 ease-in-out">
          {/* Header du menu */}
          <div className="flex items-center justify-between p-4 border-b border-border">
            <h2 className="text-lg font-semibold">Menu</h2>
            <Button
              variant="ghost"
              size="sm"
              onClick={onClose}
              className="h-8 w-8 p-0"
            >
              <FiX className="h-4 w-4" />
            </Button>
          </div>

          {/* Contenu du menu */}
          <div className="flex-1 overflow-y-auto p-4 space-y-6">
            {/* Navigation Section */}
            <div>
              <button
                onClick={() => toggleSection("Navigation")}
                className="flex items-center justify-between w-full text-left py-2 text-sm font-semibold"
              >
                Navigation
                <span className="transform transition-transform duration-200">
                  {expandedSections.includes("Navigation") ? "−" : "+"}
                </span>
              </button>
              {expandedSections.includes("Navigation") && (
                <div className="space-y-1 ml-4">
                  {navigationItems.map((item) => {
                    const isActive = location.pathname === item.href;
                    return (
                      <Link
                        key={item.href}
                        to={item.href}
                        onClick={onClose}
                        className={`block py-2 px-3 text-sm rounded-md transition-colors ${
                          isActive
                            ? "bg-primary text-primary-foreground"
                            : "text-muted-foreground hover:bg-muted hover:text-foreground"
                        }`}
                      >
                        {item.title}
                      </Link>
                    );
                  })}
                </div>
              )}
            </div>

            {/* Components Section */}
            <div>
              <button
                onClick={() => toggleSection("Components")}
                className="flex items-center justify-between w-full text-left py-2 text-sm font-semibold"
              >
                Components
                <span className="transform transition-transform duration-200">
                  {expandedSections.includes("Components") ? "−" : "+"}
                </span>
              </button>
              {expandedSections.includes("Components") && (
                <div className="space-y-1 ml-4 max-h-60 overflow-y-auto">
                  {componentItems.map((component) => {
                    const isActive = location.pathname === "/components";
                    return (
                      <Link
                        key={component}
                        to="/components"
                        onClick={onClose}
                        className={`block py-1 px-3 text-xs rounded-md transition-colors ${
                          isActive
                            ? "bg-primary text-primary-foreground"
                            : "text-muted-foreground hover:bg-muted hover:text-foreground"
                        }`}
                      >
                        {component}
                      </Link>
                    );
                  })}
                </div>
              )}
            </div>

            {/* Dashboard Section pour utilisateurs connectés */}
            {isAuthenticated && user && (
              <div>
                <button
                  onClick={() => toggleSection("Dashboard")}
                  className="flex items-center justify-between w-full text-left py-2 text-sm font-semibold"
                >
                  Dashboard
                  <span className="transform transition-transform duration-200">
                    {expandedSections.includes("Dashboard") ? "−" : "+"}
                  </span>
                </button>
                {expandedSections.includes("Dashboard") && (
                  <div className="space-y-1 ml-4">
                    {user.role === "developer" ? (
                      <>
                        <Link
                          to="/developer-dashboard"
                          onClick={onClose}
                          className="block py-2 px-3 text-sm rounded-md text-muted-foreground hover:bg-muted hover:text-foreground transition-colors"
                        >
                          Mon Dashboard
                        </Link>
                        <Link
                          to="/create-component"
                          onClick={onClose}
                          className="block py-2 px-3 text-sm rounded-md text-muted-foreground hover:bg-muted hover:text-foreground transition-colors"
                        >
                          Créer un composant
                        </Link>
                      </>
                    ) : (
                      <Link
                        to="/coach-dashboard"
                        onClick={onClose}
                        className="block py-2 px-3 text-sm rounded-md text-muted-foreground hover:bg-muted hover:text-foreground transition-colors"
                      >
                        Mon Dashboard
                      </Link>
                    )}
                  </div>
                )}
              </div>
            )}

            {/* Actions Section */}
            <div className="border-t border-border pt-4 space-y-3">
              {/* Search */}
              <div className="relative">
                <button className="w-full flex items-center rounded-md border border-input bg-background px-3 py-2 text-sm text-muted-foreground hover:bg-accent hover:text-accent-foreground transition-colors">
                  <FiSearch className="mr-2 h-4 w-4" />
                  <span>Search documentation...</span>
                  <kbd className="ml-auto text-xs">⌘K</kbd>
                </button>
              </div>

              {/* Theme toggle */}
              <Button
                variant="outline"
                onClick={toggleTheme}
                className="w-full justify-start"
              >
                {theme === "dark" ? <FiSun className="mr-2 h-4 w-4" /> : <FiMoon className="mr-2 h-4 w-4" />}
                {theme === "dark" ? "Light mode" : "Dark mode"}
              </Button>

              {/* Create Component Button - Only for authenticated users */}
              {isAuthenticated && (
                <Button
                  onClick={handleCreateComponent}
                  className="w-full"
                >
                  <FiPlus className="mr-2 h-4 w-4" />
                  Créer composant
                </Button>
              )}

              {/* Login/Logout Button */}
              {isAuthenticated ? (
                <Button
                  onClick={() => {
                    logout();
                    onClose();
                  }}
                  variant="outline"
                  className="w-full"
                >
                  Déconnexion
                </Button>
              ) : (
                <Button
                  onClick={() => {
                    setIsAuthModalOpen(true);
                    onClose();
                  }}
                  className="w-full"
                >
                  Login
                </Button>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* Auth Modal */}
      <AuthModal
        isOpen={isAuthModalOpen}
        onClose={() => setIsAuthModalOpen(false)}
      />
    </>
  );
}
