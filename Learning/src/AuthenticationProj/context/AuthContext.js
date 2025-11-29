import React, {
  createContext,
  useState,
  useEffect,
  useCallback
} from "react";
import { saveToken, getToken, removeToken } from "../utils/token";

export const AuthContext = createContext();

export default function AuthProvider({ children }) {
  const [user, setUser] = useState(null);

  // Load auth state on boot
  useEffect(() => {
    const savedUser = localStorage.getItem("user");
    if (savedUser) setUser(JSON.parse(savedUser));
  }, []);

  // Login with API
  const login = async (email, password) => {
    const res = await fetch("https://api.example.com/login", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ email, password })
    });

    if (!res.ok) return false;

    const data = await res.json();

    setUser(data.user);
    localStorage.setItem("user", JSON.stringify(data.user));
    saveToken(data.accessToken, data.refreshToken);

    return true;
  };

  // Logout
  const logout = () => {
    setUser(null);
    localStorage.removeItem("user");
    removeToken();
  };

  // Refresh token example
  const refreshToken = useCallback(async () => {
    const refresh = getToken().refreshToken;

    const res = await fetch("https://api.example.com/refresh", {
      method: "POST",
      headers: { Authorization: `Bearer ${refresh}` }
    });

    if (!res.ok) return logout();

    const data = await res.json();
    saveToken(data.accessToken, refresh);

  }, []);

  return (
    <AuthContext.Provider value={{ user, login, logout, refreshToken }}>
      {children}
    </AuthContext.Provider>
  );
}
