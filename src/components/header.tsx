import { Link } from "react-router-dom";
import { FiSearch, FiGithub, FiMoon, FiSun } from "react-icons/fi";
import { useState } from "react";
import { AuthModal } from "./AuthModal";

export function Header() {
  const [isDark, setIsDark] = useState(false);
  const [isAuthModalOpen, setIsAuthModalOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full flex justify-center items-center bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 bg-white">
      <div className="container flex h-14 items-center">
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

        {/* Navigation */}
        <nav className="flex items-center space-x-6 text-sm font-medium">
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
          {/* Search */}
          <div className="w-full flex-1 md:w-auto md:flex-none">
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
            onClick={() => setIsDark(!isDark)}
            className="inline-flex items-center justify-center rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 hover:bg-accent hover:text-accent-foreground h-9 py-2 w-9 px-0"
          >
            {isDark ? <FiSun className="h-4 w-4" /> : <FiMoon className="h-4 w-4" />}
            <span className="sr-only">Toggle theme</span>
          </button>

          {/* Login Button */}
          <button
            onClick={() => setIsAuthModalOpen(true)}
            className="inline-flex items-center justify-center rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring bg-primary text-primary-foreground shadow hover:bg-primary/90 h-9 px-4 py-2"
          >
            Login
          </button>
        </div>
      </div>

      {/* Auth Modal */}
      <AuthModal
        isOpen={isAuthModalOpen}
        onClose={() => setIsAuthModalOpen(false)}
      />
    </header>
  );
}
