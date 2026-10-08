import React, {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useState,
} from "react";

import {
  getSession,
  login as loginService,
  loginAsGuest as loginAsGuestService,
  logout as logoutService,
  type AuthSession,
} from "../services/authService";

type AuthContextValue = {
  session: AuthSession | null;
  isAuthenticated: boolean;
  isLoading: boolean;
  login: (email: string, password: string) => Promise<void>;
  loginAsGuest: () => Promise<void>;
  logout: () => void;
};

const AuthContext = createContext<AuthContextValue | undefined>(undefined);

export const AuthProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [session, setSession] = useState<AuthSession | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const storedSession = getSession();

    setSession(storedSession);
    setIsLoading(false);
  }, []);

  const login = useCallback(async (email: string, password: string) => {
    const newSession = await loginService(email, password);
    setSession(newSession);
  }, []);

  const loginAsGuest = useCallback(async () => {
    const newSession = await loginAsGuestService();
    setSession(newSession);
  }, []);

  const logout = useCallback(() => {
    logoutService();
    setSession(null);
  }, []);

  const value: AuthContextValue = {
    session,
    isAuthenticated: session !== null,
    isLoading,
    login,
    loginAsGuest,
    logout,
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};

export const useAuth = (): AuthContextValue => {
  const context = useContext(AuthContext);

  if (!context) {
    throw new Error("useAuth must be used inside an AuthProvider");
  }

  return context;
};
