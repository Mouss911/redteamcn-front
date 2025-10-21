import { Link } from "react-router-dom"
import { useState } from "react"
import { FaChevronRight } from "react-icons/fa";
import { cn } from "../lib/utils"

interface SidebarItem {
  title: string
  href?: string
  badge?: "new"
}

interface SidebarSection {
  title: string
  items: SidebarItem[]
}

const sidebarData: SidebarSection[] = [
  {
    title: "Follow for updates",
    items: [{ title: "Twitter @mannupaaji", href: "https://twitter.com/mannupaaji" }],
  },
  {
    title: "Installation",
    items: [
      { title: "Install Next.js", href: "/docs/install-nextjs" },
      { title: "Install Tailwind CSS", href: "/docs/install-tailwind" },
      { title: "Add Utilities", href: "/docs/add-utilities" },
      { title: "CLI", href: "/docs/cli" },
      { title: "3.0", href: "/docs/3.0" },
    ],
  },
  {
    title: "Backgrounds & Effects",
    items: [
      { title: "Aurora Background", href: "/components/aurora-background" },
      { title: "Background Gradient", href: "/components/background-gradient" },
      { title: "Gradient Animation", href: "/components/gradient-animation" },
      { title: "Background Boxes", href: "/components/background-boxes" },
      { title: "Background Beams", href: "/components/background-beams" },
      { title: "Background Beams", href: "/components/background-beams-2" },
      { title: "Background Beams With Collision", href: "/components/background-beams-collision" },
      { title: "Background Lines", href: "/components/background-lines" },
      { title: "Beams Background", href: "/components/beams-background" },
      { title: "Growing Stars", href: "/components/growing-stars" },
      { title: "Shooting Stars", href: "/components/shooting-stars" },
      { title: "Vortex", href: "/components/vortex" },
      { title: "Sparkles", href: "/components/sparkles" },
      { title: "Meteor Rain", href: "/components/meteor-rain" },
      { title: "Canvas Reveal Effect", href: "/components/canvas-reveal" },
      { title: "SVG Mask Effect", href: "/components/svg-mask" },
      { title: "Tracing Beam", href: "/components/tracing-beam" },
      { title: "Lamp effect", href: "/components/lamp-effect" },
      { title: "Background Ripple Effect", href: "/components/background-ripple", badge: "new" },
      { title: "Grid and Dot Backgrounds", href: "/components/grid-dot-backgrounds" },
      { title: "Glowing Effect", href: "/components/glowing-effect" },
      { title: "Pixelated Canvas", href: "/components/pixelated-canvas" },
    ],
  },
  {
    title: "Card Components",
    items: [
      { title: "Parallax Cards", href: "/components/parallax-cards", badge: "new" },
      { title: "Evervault Card", href: "/components/evervault-card" },
      { title: "Evervault Card", href: "/components/evervault-card-2" },
      { title: "Card Hover Effect", href: "/components/card-hover" },
      { title: "Wobble Card", href: "/components/wobble-card" },
      { title: "3D Card Effect", href: "/components/3d-card" },
      { title: "Expandable Card", href: "/components/expandable-card" },
      { title: "Focus Cards", href: "/components/focus-cards" },
      { title: "Infinite Moving Cards", href: "/components/infinite-moving-cards" },
      { title: "Glare Card", href: "/components/glare-card" },
      { title: "Comet Card", href: "/components/comet-card", badge: "new" },
      { title: "Glass Card", href: "/components/glass-card" },
      { title: "Parallax Scroll", href: "/components/parallax-scroll" },
      { title: "Sticky Scroll Reveal", href: "/components/sticky-scroll" },
      { title: "Card Spotlight", href: "/components/card-spotlight" },
    ],
  },
  {
    title: "Scroll & Parallax",
    items: [
      { title: "Container Scroll Animation", href: "/components/container-scroll" },
      { title: "Hero Parallax", href: "/components/hero-parallax" },
    ],
  },
  {
    title: "Text Components",
    items: [
      { title: "Layout Text flip", href: "/components/layout-text-flip", badge: "new" },
      { title: "Colourful Text", href: "/components/colourful-text" },
      { title: "Text Generate", href: "/components/text-generate" },
      { title: "Typewriter Effect", href: "/components/typewriter" },
      { title: "Flip Words", href: "/components/flip-words" },
      { title: "Wavy Background", href: "/components/wavy-background" },
      { title: "Container Text Flip", href: "/components/container-text-flip" },
      { title: "Text Hover Effect", href: "/components/text-hover" },
      { title: "Text Reveal Card", href: "/components/text-reveal-card" },
      { title: "Pointer Highlight", href: "/components/pointer-highlight" },
    ],
  },
  {
    title: "Buttons",
    items: [
      { title: "Tailwind CSS buttons", href: "/components/tailwind-buttons" },
      { title: "Hover Border Gradient", href: "/components/hover-border-gradient" },
      { title: "Moving Border", href: "/components/moving-border" },
      { title: "Stateful Button", href: "/components/stateful-button" },
    ],
  },
  {
    title: "Loaders",
    items: [
      { title: "Multi Step Loader", href: "/components/multi-step-loader" },
      { title: "Loader", href: "/components/loader" },
    ],
  },
  {
    title: "Navigation",
    items: [
      { title: "Floating Navbar", href: "/components/floating-navbar" },
      { title: "Sidebar", href: "/components/sidebar" },
      { title: "Floating Dock", href: "/components/floating-dock" },
      { title: "Resizable Navbar", href: "/components/resizable-navbar" },
      { title: "Sticky Banner", href: "/components/sticky-banner" },
    ],
  },
  {
    title: "Inputs & Forms",
    items: [
      { title: "Signup Form", href: "/components/signup-form" },
      { title: "Placeholders and Vanish Input", href: "/components/placeholders-vanish" },
    ],
  },
  {
    title: "Overlays & Popovers",
    items: [
      { title: "Animated Modal", href: "/components/animated-modal" },
      { title: "Link Preview", href: "/components/link-preview" },
      { title: "Animated Tooltip", href: "/components/animated-tooltip" },
    ],
  },
  {
    title: "Carousels & Sliders",
    items: [
      { title: "Carousel", href: "/components/carousel" },
      { title: "Apple Cards Carousel", href: "/components/apple-cards-carousel" },
      { title: "Testimonials", href: "/components/testimonials" },
    ],
  },
  {
    title: "Layout & Grid",
    items: [
      { title: "Layout Grid", href: "/components/layout-grid" },
      { title: "Bento Grid", href: "/components/bento-grid" },
      { title: "Geometric Cover", href: "/components/geometric-cover" },
    ],
  },
  {
    title: "Data & Visualization",
    items: [
      { title: "Github Globe", href: "/components/github-globe" },
      { title: "World Map", href: "/components/world-map" },
      { title: "Timeline", href: "/components/timeline" },
      { title: "Compare", href: "/components/compare" },
    ],
  },
  {
    title: "Cursor & Pointer",
    items: [
      { title: "Following Pointer", href: "/components/following-pointer" },
      { title: "Pointer Highlight", href: "/components/pointer-highlight-2" },
    ],
  },
  {
    title: "3D",
    items: [
      { title: "3D Pin", href: "/components/3d-pin" },
      { title: "3D Marquee", href: "/components/3d-marquee" },
    ],
  },
  {
    title: "Sections and Blocks",
    items: [
      { title: "Feature Section", href: "/components/feature-section" },
      { title: "Hero Section", href: "/components/hero-section" },
      { title: "Hero Sections", href: "/components/hero-sections" },
    ],
  },
]

export function Sidebar() {
  const [openSections, setOpenSections] = useState<string[]>(["Backgrounds & Effects", "Card Components"])

  const toggleSection = (title: string) => {
    setOpenSections((prev) => (prev.includes(title) ? prev.filter((t) => t !== title) : [...prev, title]))
  }

  return (
    <aside className="fixed left-0 top-14 z-30 h-[calc(100vh-3.5rem)] w-64 overflow-y-auto border-r border-border bg-background pb-10">
      <div className="space-y-4 py-4">
        {sidebarData.map((section) => (
          <div key={section.title} className="px-3">
            <button
              onClick={() => toggleSection(section.title)}
              className="mb-2 flex w-full items-center justify-between text-xs font-semibold uppercase tracking-wider text-muted-foreground hover:text-foreground"
            >
              {section.title}
              <FaChevronRight
                className={cn("h-3 w-3 transition-transform", openSections.includes(section.title) && "rotate-90")}
              />
            </button>
            {openSections.includes(section.title) && (
              <div className="space-y-1">
                {section.items.map((item, index) => (
                  <Link
                    key={`${item.title}-${index}`}
                    to={item.href || "#"}
                    className="flex items-center justify-between rounded-md px-2 py-1.5 text-sm text-muted-foreground transition-colors hover:bg-accent hover:text-accent-foreground"
                  >
                    <span>{item.title}</span>
                    {item.badge === "new" && (
                      <span className="rounded bg-emerald-500 px-1.5 py-0.5 text-[10px] font-medium text-white">
                        New
                      </span>
                    )}
                  </Link>
                ))}
              </div>
            )}
          </div>
        ))}
      </div>
    </aside>
  )
}
