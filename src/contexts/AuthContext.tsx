import { createContext, useContext, useState, useEffect, ReactNode } from "react";
import type { User, UserRole, AuthState } from "../types/auth";

const AuthContext = createContext<AuthState | undefined>(undefined);

// Données de démonstration pour les tests
const DEMO_USERS = [
  {
    id: "1",
    email: "developer@example.com",
    password: "password",
    name: "John Developer",
    role: "developer" as UserRole,
    avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face"
  },
  {
    id: "2",
    email: "coach@example.com",
    password: "password",
    name: "Jane Coach",
    role: "coach" as UserRole,
    avatar: "https://images.unsplash.com/photo-1494790108755-2616b612b5bc?w=150&h=150&fit=crop&crop=face"
  }
];

export function AuthProvider({ children }: { children: ReactNode }) {
  const [user, setUser] = useState<User | null>(null);

  // Vérifier si l'utilisateur est connecté au démarrage
  useEffect(() => {
    const savedUser = localStorage.getItem("currentUser");
    if (savedUser) {
      setUser(JSON.parse(savedUser));
    }
  }, []);

  // Sauvegarder l'utilisateur dans le localStorage
  useEffect(() => {
    if (user) {
      localStorage.setItem("currentUser", JSON.stringify(user));
    } else {
      localStorage.removeItem("currentUser");
    }
  }, [user]);

  const login = async (email: string, password: string): Promise<boolean> => {
    // Simulation d'une connexion (remplacer par une vraie API)
    const foundUser = DEMO_USERS.find(u => u.email === email && u.password === password);

    if (foundUser) {
      const { password: _, ...userWithoutPassword } = foundUser;
      setUser(userWithoutPassword);
      return true;
    }

    return false;
  };

  const logout = () => {
    setUser(null);
  };

  const hasRole = (role: UserRole): boolean => {
    return user?.role === role;
  };

  const value: AuthState = {
    user,
    isAuthenticated: !!user,
    login,
    logout,
    hasRole,
  };

  return (
    <AuthContext.Provider value={value}>
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error("useAuth must be used within an AuthProvider");
  }
  return context;
}
