import { Link } from "react-router-dom";
import { FiSearch, FiMoon, FiSun, FiPlus, FiMenu } from "react-icons/fi";
import { useState } from "react";
import { AuthModal } from "./AuthModal";
import { MobileMenu } from "./MobileMenu";
import { useTheme } from "../contexts/ThemeContext";
import { useAuth } from "../contexts/AuthContext";
import { Button } from "./ui/button";

export function Header() {
  const { theme, toggleTheme } = useTheme();
  const { isAuthenticated, hasRole, logout } = useAuth();
  const [isAuthModalOpen, setIsAuthModalOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const handleCreateComponent = () => {
    if (hasRole("coach")) {
      window.location.href = "/coach-dashboard";
    } else if (hasRole("developer")) {
      window.location.href = "/developer-dashboard";
    } else {
      window.location.href = "/";
    }
  };

  return (
    <>
      <header className="sticky top-0 z-50 w-full flex justify-center items-center bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 border-b border-border">
        <div className="container flex h-14 items-center">
          {/* Mobile menu button - visible only on lg screens and below */}
          <Button
            variant="ghost"
            size="sm"
            className="mr-2 lg:hidden h-9 w-9 p-0"
            onClick={() => setIsMobileMenuOpen(true)}
          >
            <FiMenu className="h-4 w-4" />
            <span className="sr-only">Toggle menu</span>
          </Button>

          {/* Logo */}
          <div className="mr-4 flex">
            <Link to="/" className="mr-6 flex items-center space-x-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="h-6 w-6"
              >
                <path d="M15 6v12a3 3 0 1 0 3-3H6a3 3 0 1 0 3 3V6a3 3 0 1 0-3 3h12a3 3 0 1 0-3-3" />
              </svg>
            </Link>
          </div>

          {/* Navigation - hidden on lg screens and below */}
          <nav className="hidden lg:flex items-center space-x-6 text-sm font-medium">
            <Link
              to="/docs"
              className="transition-colors hover:text-foreground/80 text-foreground/60"
            >
              Docs
            </Link>
            <Link
              to="/components"
              className="transition-colors hover:text-foreground/80 text-foreground/60"
            >
              Components
            </Link>
            <Link
              to="/blocks"
              className="transition-colors hover:text-foreground/80 text-foreground/60"
            >
              Blocks
            </Link>
            <Link
              to="/charts"
              className="transition-colors hover:text-foreground/80 text-foreground/60"
            >
              Charts
            </Link>
            <Link
              to="/themes"
              className="transition-colors hover:text-foreground/80 text-foreground/60"
            >
              Themes
            </Link>
            <Link
              to="/colors"
              className="transition-colors hover:text-foreground/80 text-foreground/60"
            >
              Colors
            </Link>
          </nav>

          {/* Right side */}
          <div className="flex flex-1 items-center justify-end space-x-2">
            {/* Search - hidden on small screens */}
            <div className="w-full flex-1 md:w-auto md:flex-none hidden lg:block">
              <button className="inline-flex items-center rounded-md font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 border border-input bg-transparent shadow-sm hover:bg-accent hover:text-accent-foreground h-9 px-4 py-2 relative w-full justify-start text-sm text-muted-foreground sm:pr-12 md:w-40 lg:w-64">
                <FiSearch className="mr-2 h-4 w-4" />
                <span className="hidden lg:inline-flex">Search documentation...</span>
                <span className="inline-flex lg:hidden">Search...</span>
                <kbd className="pointer-events-none absolute right-1.5 top-1.5 hidden h-5 select-none items-center gap-1 rounded border bg-muted px-1.5 font-mono text-[10px] font-medium opacity-100 sm:flex">
                  <span className="text-xs">⌘</span>K
                </kbd>
              </button>
            </div>

            {/* Theme toggle */}
            <button
              onClick={toggleTheme}
              className="inline-flex items-center justify-center rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 hover:bg-accent hover:text-accent-foreground h-9 py-2 w-9 px-0"
            >
              {theme === "dark" ? <FiSun className="h-4 w-4" /> : <FiMoon className="h-4 w-4" />}
              <span className="sr-only">Toggle theme</span>
            </button>

            {/* Create Component Button - Only for authenticated users */}
            {isAuthenticated && (
              <Button
                onClick={handleCreateComponent}
                className="hidden lg:inline-flex items-center justify-center rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring bg-primary text-primary-foreground shadow hover:bg-primary/90 h-9 px-4 py-2"
              >
                <FiPlus className="mr-2 h-4 w-4" />
                Créer composant
              </Button>
            )}

            {/* Login/Logout Button */}
            {isAuthenticated ? (
              <Button
                onClick={logout}
                variant="outline"
                className="hidden lg:inline-flex items-center justify-center rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring h-9 px-4 py-2"
              >
                Déconnexion
              </Button>
            ) : (
              <button
                onClick={() => setIsAuthModalOpen(true)}
                className="hidden lg:inline-flex items-center justify-center rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring bg-primary text-primary-foreground shadow hover:bg-primary/90 h-9 px-4 py-2"
              >
                Login
              </button>
            )}
          </div>
        </div>
      </header>

      {/* Mobile Menu */}
      <MobileMenu
        isOpen={isMobileMenuOpen}
        onClose={() => setIsMobileMenuOpen(false)}
      />

      {/* Auth Modal */}
      <AuthModal
        isOpen={isAuthModalOpen}
        onClose={() => setIsAuthModalOpen(false)}
      />
    </>
  );
}
