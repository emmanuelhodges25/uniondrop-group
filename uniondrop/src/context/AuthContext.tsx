import { createContext, useContext, useState } from "react";

type User = {
  email: string;
};

type AuthContextType = {
  user: User | null;
  login: (email: string, password: string) => void;
  signup: (email: string, password: string) => void;
  logout: () => void;
};

const AuthContext = createContext<AuthContextType | null>(null);

// Lazy load user ON FIRST RENDER (best practice fix)
const getInitialUser = (): User | null => {
  const stored = localStorage.getItem("ud_user");
  return stored ? JSON.parse(stored) : null;
};

export function AuthProvider({ children }: { children: React.ReactNode }) {
  const [user, setUser] = useState<User | null>(getInitialUser);

  const login = (email: string) => {
    const fakeUser = { email };
    setUser(fakeUser);
    localStorage.setItem("ud_user", JSON.stringify(fakeUser));
  };

  const signup = (email: string) => {
    const fakeUser = { email };
    setUser(fakeUser);
    localStorage.setItem("ud_user", JSON.stringify(fakeUser));
  };

  const logout = () => {
    setUser(null);
    localStorage.removeItem("ud_user");
  };

  return (
    <AuthContext.Provider value={{ user, login, signup, logout }}>
      {children}
    </AuthContext.Provider>
  );
}

// eslint-disable-next-line react-refresh/only-export-components
export function useAuth() {
  const ctx = useContext(AuthContext);
  if (!ctx) throw new Error("useAuth must be used inside AuthProvider");
  return ctx;
}