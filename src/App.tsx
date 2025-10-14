import { createBrowserRouter, RouterProvider } from "react-router-dom"
import { RootLayout } from "./layouts/root-layout"
import { HomePage } from "./pages/LandingPage/components/home"
import { ComponentsPage } from "./pages/LandingPage/components/components"
import { BlocksPage } from "./pages/LandingPage/components/Block"
import { ChartsPage } from "./pages/LandingPage/components/Charts"
import { ThemesPage } from "./pages/LandingPage/components/Themes"
import { DocsPage } from "./pages/LandingPage/components/docs"


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
    ],
  }
])

export default function App() {
  return <RouterProvider router={router} />
}
