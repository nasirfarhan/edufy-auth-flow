
import { createContext, useContext, useState, ReactNode } from "react";

type User = {
  email: string;
  username: string;
} | null;

type AuthContextType = {
  user: User;
  login: (email: string, password: string) => boolean;
  signup: (email: string, username: string, password: string) => boolean;
  logout: () => void;
  users: Array<{ email: string; username: string; password: string }>;
};

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export function AuthProvider({ children }: { children: ReactNode }) {
  const [user, setUser] = useState<User>(null);
  // Store user credentials in memory for demo purposes
  // In a real app, this would be handled by a backend service
  const [users, setUsers] = useState<Array<{ email: string; username: string; password: string }>>([]);

  const signup = (email: string, username: string, password: string) => {
    const userExists = users.some(
      (user) => user.email === email || user.username === username
    );

    if (userExists) {
      return false;
    }

    const newUser = { email, username, password };
    setUsers([...users, newUser]);
    return true;
  };

  const login = (emailOrUsername: string, password: string) => {
    const foundUser = users.find(
      (user) =>
        (user.email === emailOrUsername || user.username === emailOrUsername) &&
        user.password === password
    );

    if (foundUser) {
      setUser({ email: foundUser.email, username: foundUser.username });
      return true;
    }
    return false;
  };

  const logout = () => {
    setUser(null);
  };

  return (
    <AuthContext.Provider value={{ user, login, signup, logout, users }}>
      {children}
    </AuthContext.Provider>
  );
}

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error("useAuth must be used within an AuthProvider");
  }
  return context;
};
