import { useState } from "react";
import { Link } from "react-router-dom";
import { Tabs } from "../../../components/Tabs";
import { ViewModeToggle } from "../../../components/ViewModeToggle";
import { BlockCard, type BlockItem } from "../../../components/BlockCard";
import { EmptyState } from "../../../components/EmptyState";

const blocks: BlockItem[] = [
  {
    id: "dashboard-01",
    title: "Dashboard 01",
    description: "A dashboard with sidebar, charts and data table",
    category: "featured",
  },
  {
    id: "sidebar-01",
    title: "Sidebar 01",
    description: "A sidebar with navigation and collapsible sections",
    category: "sidebar",
  },
  {
    id: "sidebar-02",
    title: "Sidebar 02",
    description: "A minimal sidebar with icons only",
    category: "sidebar",
  },
  {
    id: "login-01",
    title: "Login 01",
    description: "A simple login form with email and password",
    category: "login",
  },
  {
    id: "login-02",
    title: "Login 02",
    description: "Login form with social authentication options",
    category: "login",
  },
  {
    id: "signup-01",
    title: "Signup 01",
    description: "A registration form with validation",
    category: "signup",
  },
  {
    id: "otp-01",
    title: "OTP 01",
    description: "One-time password input component",
    category: "otp",
  },
  {
    id: "calendar-01",
    title: "Calendar 01",
    description: "A full-featured calendar component",
    category: "calendar",
  },
];

const categories = [
  { id: "featured", label: "Featured" },
  { id: "sidebar", label: "Sidebar" },
  { id: "login", label: "Login" },
  { id: "signup", label: "Signup" },
  { id: "otp", label: "OTP" },
  { id: "calendar", label: "Calendar" },
];

export function BlocksPage() {
  const [activeCategory, setActiveCategory] = useState("featured");
  const [viewMode, setViewMode] = useState<"preview" | "code">("preview");

  const filteredBlocks = blocks.filter(
    (block) => activeCategory === "featured" || block.category === activeCategory
  );

  const handleBlockPreview = (blockId: string) => {
    console.log("Preview block:", blockId);
  };

  const handleBlockCode = (blockId: string) => {
    console.log("View code for block:", blockId);
  };

  const handleOpenExternal = (blockId: string) => {
    console.log("Open block in v0:", blockId);
  };

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="scroll-m-20 text-4xl font-bold tracking-tight">
            Blocks
          </h1>
          <p className="text-lg text-muted-foreground mt-2">
            Pre-built components and layouts for your application
          </p>
        </div>
        <Link
          to="/blocks/all"
          className="text-sm font-medium text-foreground/60 hover:text-foreground transition-colors"
        >
          Browse all blocks
        </Link>
      </div>

      {/* Tabs */}
      <Tabs
        tabs={categories}
        activeTab={activeCategory}
        onTabChange={setActiveCategory}
      />

      {/* View Mode Toggle */}
      <ViewModeToggle mode={viewMode} onModeChange={setViewMode} />

      {/* Blocks List */}
      <div className="space-y-4">
        {filteredBlocks.map((block) => (
          <BlockCard
            key={block.id}
            block={block}
            viewMode={viewMode}
            onPreview={() => handleBlockPreview(block.id)}
            onViewCode={() => handleBlockCode(block.id)}
            onOpenExternal={() => handleOpenExternal(block.id)}
          />
        ))}
      </div>

      {/* Empty State */}
      {filteredBlocks.length === 0 && (
        <EmptyState
          message="No blocks found in this category."
          description="Try selecting a different category."
        />
      )}
    </div>
  );
}
