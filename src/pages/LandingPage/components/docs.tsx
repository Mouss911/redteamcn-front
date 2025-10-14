import { PageHeader } from "../../../components/PageHeader";
import { FrameworkCard, type Framework } from "../../../components/FrameworkCard";

const frameworks: Framework[] = [
  {
    id: "nextjs",
    name: "Next.js",
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="w-12 h-12">
        <circle cx="12" cy="12" r="12" fill="black" />
        <text x="12" y="16" textAnchor="middle" fill="white" fontSize="14" fontWeight="bold">
          N
        </text>
      </svg>
    ),
  },
  {
    id: "vite",
    name: "Vite",
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="w-12 h-12">
        <path d="M12 2L2 19.5h20L12 2z" fill="#646CFF" />
        <path d="M12 8L7 19.5h10L12 8z" fill="#FFD028" />
      </svg>
    ),
  },
  {
    id: "laravel",
    name: "Laravel",
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="w-12 h-12">
        <path
          d="M8 3L4 6v12l4 3 8-4.5V4.5L8 3zm0 2l6 3v9l-6 3.5V5z"
          fill="#FF2D20"
        />
      </svg>
    ),
  },
  {
    id: "react-router",
    name: "React Router",
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="w-12 h-12">
        <circle cx="8" cy="12" r="2" fill="#CA4245" />
        <circle cx="16" cy="12" r="2" fill="#CA4245" />
        <circle cx="12" cy="8" r="2" fill="#CA4245" />
        <path
          d="M8 12c0-2 1.5-4 4-4s4 2 4 4"
          fill="none"
          stroke="#CA4245"
          strokeWidth="1.5"
        />
      </svg>
    ),
  },
  {
    id: "astro",
    name: "Astro",
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="w-12 h-12">
        <path d="M12 2l3 8h8l-6.5 5 2.5 8L12 18l-7 5 2.5-8L1 10h8z" fill="#FF5D01" />
      </svg>
    ),
  },
  {
    id: "tanstack",
    name: "TanStack Start",
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="w-12 h-12">
        <circle cx="12" cy="7" r="2" fill="#00C7B7" />
        <circle cx="7" cy="17" r="2" fill="#00C7B7" />
        <circle cx="17" cy="17" r="2" fill="#00C7B7" />
        <path
          d="M12 9v4M10 13l-3 2M14 13l3 2"
          stroke="#00C7B7"
          strokeWidth="2"
          fill="none"
        />
      </svg>
    ),
  },
  {
    id: "remix",
    name: "Remix",
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="w-12 h-12">
        <rect x="4" y="4" width="16" height="16" rx="2" fill="#121212" />
        <text x="12" y="16" textAnchor="middle" fill="white" fontSize="12" fontWeight="bold">
          R
        </text>
      </svg>
    ),
  },
  {
    id: "gatsby",
    name: "Gatsby",
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="w-12 h-12">
        <circle cx="12" cy="12" r="10" fill="#663399" />
        <text x="12" y="16" textAnchor="middle" fill="white" fontSize="12" fontWeight="bold">
          G
        </text>
      </svg>
    ),
  },
];

export function DocsPage() {
  const handleFrameworkClick = (frameworkId: string) => {
    console.log("Selected framework:", frameworkId);
  };

  const handleCreateComponent = () => {
    console.log("Create new component");
    // Logique pour créer un composant
  };

  return (
    <div className="space-y-8">
      {/* Header with Create Button */}
      <div className="flex items-start justify-between gap-4">
        <div className="flex-1">
          <PageHeader
            title="Installation"
            description="How to install dependencies and structure your app."
            showCopyButton={true}
            showNavigation={true}
          />
        </div>
        <button
          onClick={handleCreateComponent}
          className="inline-flex items-center justify-center rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring bg-primary text-primary-foreground shadow hover:bg-primary/90 h-10 px-6 py-2 whitespace-nowrap"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="mr-2"
          >
            <path d="M5 12h14" />
            <path d="M12 5v14" />
          </svg>
          Create Component
        </button>
      </div>

      {/* Pick Your Framework Section */}
      <div className="space-y-4">
        <h2 className="text-2xl font-bold tracking-tight">Pick Your Framework</h2>
        <p className="text-muted-foreground">
          Start by selecting your framework of choice. Then follow the instructions to install the
          dependencies and structure your app. shadcn/ui is built to work with all React frameworks.
        </p>
      </div>

      {/* Frameworks Grid */}
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2">
        {frameworks.map((framework) => (
          <FrameworkCard
            key={framework.id}
            framework={framework}
            onClick={() => handleFrameworkClick(framework.id)}
          />
        ))}
      </div>
    </div>
  );
}
