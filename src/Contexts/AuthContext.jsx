import { createContext, useContext, useEffect } from "react";
import { useState } from "react";

import { getInfo } from "../services/user.service";
import { LoadingContext } from "./LoadingContext";

const AuthContext = createContext();

function AuthProvider({ children }) {
  const [user, setUser] = useState(null);
  const { setLoadingPage } = useContext(LoadingContext);

  useEffect(() => {
    const fetchUserInfo = async () => {
      try {
        const token = localStorage.getItem("accessToken");
        if (!token) {
          setUser(null);
          setLoadingPage(false);
          return;
        }

        const response = await getInfo();

        setUser(response.data.result);
      } catch (error) {
        console.error("Error fetching user info:", error);
        setUser(null);
      } finally {
        setLoadingPage(false);
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
