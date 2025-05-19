
import { createContext, useContext, useState, ReactNode } from "react";

export type User = {
  id: string;
  name: string;
  email: string;
  role: "buyer" | "seller";
};

type AuthContextType = {
  isAuthenticated: boolean;
  user: User | null;
  login: (email: string, password: string) => Promise<void>;
  register: (name: string, email: string, password: string, role: "buyer" | "seller") => Promise<void>;
  logout: () => void;
};

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export function AuthProvider({ children }: { children: ReactNode }) {
  const [user, setUser] = useState<User | null>(null);

  // For demo purposes, we'll use a mock implementation
  const login = async (email: string, password: string) => {
    // In a real app, this would make an API call to validate credentials
    // For demo, we'll just mock a successful login
    console.log("Login attempt:", email, password);
    
    // Mock user based on email to simulate different roles
    const mockUser: User = {
      id: Math.random().toString(36).substring(2, 11),
      name: email.split("@")[0],
      email,
      role: email.includes("seller") ? "seller" : "buyer",
    };
    
    setUser(mockUser);
    localStorage.setItem("user", JSON.stringify(mockUser));
  };

  const register = async (name: string, email: string, password: string, role: "buyer" | "seller") => {
    // In a real app, this would make an API call to register the user
    // For demo, we'll just mock a successful registration
    console.log("Register attempt:", name, email, password, role);
    
    const mockUser: User = {
      id: Math.random().toString(36).substring(2, 11),
      name,
      email,
      role,
    };
    
    setUser(mockUser);
    localStorage.setItem("user", JSON.stringify(mockUser));
  };

  const logout = () => {
    setUser(null);
    localStorage.removeItem("user");
  };

  return (
    <AuthContext.Provider value={{ isAuthenticated: !!user, user, login, register, logout }}>
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
