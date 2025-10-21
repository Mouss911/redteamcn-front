import { Navbar } from "../components/Navbar"
import { Sidebar } from "../components/Sidebar"

export default function Home() {
  return (
    <div className="min-h-screen">
      <Navbar />
      <Sidebar />

      {/* Main Content Area */}
      <main className="ml-64 pt-14">
        <div className="container py-8">
          <div className="mb-8">
            <h1 className="mb-2 text-4xl font-bold">Components</h1>
            <p className="text-muted-foreground">
              A collection of beautiful and interactive components built with React and Tailwind CSS
            </p>
          </div>

          {/* Placeholder for component grid */}
          <div className="grid gap-6 sm:grid-cols-2">
            {[1, 2, 3, 4].map((i) => (
              <div
                key={i}
                className="group relative overflow-hidden rounded-lg border border-border bg-card p-6 transition-colors hover:border-foreground/20"
              >
                <div className="mb-4 aspect-video rounded-md bg-muted" />
                <h3 className="mb-2 text-lg font-semibold">Component {i}</h3>
                <p className="text-sm text-muted-foreground">
                  A beautiful component with smooth animations and interactions
                </p>
              </div>
            ))}
          </div>
        </div>
      </main>
    </div>
  )
}
