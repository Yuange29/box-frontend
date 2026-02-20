import { createContext, useEffect } from "react";
import { useState } from "react";
import { getInfo } from "../services/user.service";

const AuthContext = createContext();

function AuthProvider({ children }) {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchUserInfo = async () => {
      try {
        const token = localStorage.getItem("accessToken");
        if (!token) {
          setUser(null);
          setLoading(false);
          return;
        }

        const response = await getInfo();
        setUser(response.data.result);
      } catch (error) {
        setUser(null);
        console.error("Failed to fetch user info:", error);
      } finally {
        setLoading(false);
      }
    };
    fetchUserInfo();
  }, []);

  const login = (user) => setUser(user);
  const logout = () => setUser(null);

  return (
    <AuthContext.Provider value={{ user, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
}

export { AuthContext, AuthProvider };
