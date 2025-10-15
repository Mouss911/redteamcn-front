import type { ReactNode } from "react";
import { Navigate, useLocation } from "react-router-dom";
import { useAuth } from "../../contexts/AuthContext";
import type { UserRole } from "../../types/auth";

interface ProtectedRouteProps {
  children: ReactNode;
  requiredRole?: UserRole;
}

export function ProtectedRoute({ children, requiredRole }: ProtectedRouteProps) {
  const { isAuthenticated, hasRole, user } = useAuth();
  const location = useLocation();

  // Si l'utilisateur n'est pas connecté, rediriger vers la page d'accueil
  if (!isAuthenticated) {
    return <Navigate to="/" state={{ from: location }} replace />;
  }

  // Si un rôle spécifique est requis et que l'utilisateur ne l'a pas
  if (requiredRole && !hasRole(requiredRole)) {
    // Rediriger vers un dashboard approprié selon le rôle de l'utilisateur
    if (user?.role === "developer") {
      return <Navigate to="/developer-dashboard" replace />;
    } else if (user?.role === "coach") {
      return <Navigate to="/coach-dashboard" replace />;
    } else {
      return <Navigate to="/" replace />;
    }
  }

  return <>{children}</>;
}
