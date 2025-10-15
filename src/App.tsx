import { createBrowserRouter, RouterProvider } from "react-router-dom"
import { RootLayout } from "./layouts/root-layout"
import { HomePage } from "./pages/LandingPage/components/home"
import { ComponentsPage } from "./pages/LandingPage/components/components"
import { BlocksPage } from "./pages/LandingPage/components/Block"
import { ChartsPage } from "./pages/LandingPage/components/Charts"
import { ThemesPage } from "./pages/LandingPage/components/Themes"
import { DocsPage } from "./pages/LandingPage/components/docs"
import { ThemeProvider } from "./contexts/ThemeContext"
import { AuthProvider } from "./contexts/AuthContext"
import { ComponentProvider } from "./contexts/ComponentContext"
import { ProtectedRoute } from "./components/Roles/ProtectedRoute"
import { CreateComponentPage } from "./pages/CreateComponentPage"
import { DeveloperDashboard } from "./pages/DeveloperDashboard"
import { CoachDashboard } from "./pages/CoachDashboard"


const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    children: [
      {
        index: true,
        element: <HomePage />,
      },
      {
        path: "docs",
        element: <DocsPage />,
      },
      {
        path: "components",
        element: <ComponentsPage />,
      },
      {
        path: "blocks",
        element: <BlocksPage />,
      },
      {
        path: "charts",
        element: <ChartsPage />,
      },
      {
        path: "themes",
        element: <ThemesPage />,
      },
      // Routes protégées pour utilisateurs connectés
      {
        path: "create-component",
        element: (
          // <ProtectedRoute>
            <CreateComponentPage />
          // </ProtectedRoute>
        ),
      },
      {
        path: "developer-dashboard",
        element: (
          // <ProtectedRoute requiredRole="developer">
            <DeveloperDashboard />
          // </ProtectedRoute>
        ),
      },
      {
        path: "coach-dashboard",
        element: (
          // <ProtectedRoute requiredRole="coach">
            <CoachDashboard />
          // </ProtectedRoute>
        ),
      },
    ],
  }
])

export default function App() {
  return (
    <ThemeProvider>
      <AuthProvider>
        <ComponentProvider>
          <RouterProvider router={router} />
        </ComponentProvider>
      </AuthProvider>
    </ThemeProvider>
  )
}
