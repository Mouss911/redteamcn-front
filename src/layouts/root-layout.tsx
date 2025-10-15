import { Outlet, useLocation } from "react-router-dom";
import { Header } from "../components/header";
import { Sidebar } from "../components/Sidebar";

export function RootLayout() {
  const location = useLocation();
  
  // Pages where sidebar should be hidden
  const hideSidebarRoutes = ["/blocks", "/charts", "/themes", "/colors"];
  const shouldHideSidebar = hideSidebarRoutes.some(route => 
    location.pathname.startsWith(route)
  );

  return (
    <div className="relative flex min-h-screen flex-col">
      <Header />
      <div className="flex-1">
        {shouldHideSidebar ? (
          // Layout without sidebar
          <div className="container flex-1 py-6 lg:py-8">
            <main className="mx-auto w-full">
              <Outlet />
            </main>
          </div>
        ) : (
          // Layout with sidebar
          <div className="container flex-1 items-start md:grid md:grid-cols-[220px_minmax(0,1fr)] md:gap-6 lg:grid-cols-[240px_minmax(0,1fr)] lg:gap-10">
            <Sidebar />
            <main className="relative py-6 lg:gap-10 lg:py-8 xl:grid xl:grid-cols-[1fr_300px]">
              <div className="mx-auto w-full min-w-0">
                <Outlet />
              </div>
            </main>
          </div>
        )}
      </div>
    </div>
  );
}
