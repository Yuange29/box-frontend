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
        console.log("Token:", token);
        if (!token) {
          setUser(null);
          setLoading(false);
          return;
        }

        const response = await getInfo();

        setUser(response.data.result);
      } catch (error) {
        console.error("Error fetching user info:", error);
        setUser(null);
      } finally {
        setLoading(false);
      }
    };
    fetchUserInfo();
  }, []);

  const login = (user) => setUser(user);
  const logout = () => setUser(null);

  return (
    <AuthContext.Provider value={{ user, login, logout, loading }}>
      {children}
    </AuthContext.Provider>
  );
}

export { AuthContext, AuthProvider };
