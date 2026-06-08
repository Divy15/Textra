import React, { createContext, useContext, useState, type ReactNode } from "react";
import { useNavigate } from "react-router-dom";

// 1. Define strict TypeScript interfaces for your data structure
interface UserProfile {
  name: string;
  email: string;
  avatarUrl?: string;
}

interface AuthContextType {
  isLoggedIn: boolean;
  user: UserProfile | null;
  login: (userData: UserProfile) => void;
  logout: () => void;
}

// 2. Initialize context with an undefined default value for safety checks
const AuthContext = createContext<AuthContextType | undefined>(undefined);

interface AuthProviderProps {
  children: ReactNode;
}

export const AuthProvider: React.FC<AuthProviderProps> = ({ children }) => {
  const [user, setUser] = useState<UserProfile | null>(null);
  const navigate = useNavigate(); // Hook used for dynamic redirection

  // Dynamic Login Handler
  const login = (userData: UserProfile) => {
    setUser(userData);
    // Optional: navigate("/dashboard") if you want to push them forward automatically
  };

  // Dynamic Logout Handler with root path navigation
  const logout = () => {
    setUser(null);
    navigate("/"); // Instantly bounces user back to root route "/"
  };

  const isLoggedIn = !!user; // Derived boolean state

  return (
    <AuthContext.Provider value={{ isLoggedIn, user, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

// 3. Custom Hook for clean consumption across your codebase
export const useAuth = (): AuthContextType => {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error("useAuth must be wrapped within an AuthProvider configuration wrapper.");
  }
  return context;
};