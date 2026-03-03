import { createContext, useEffect } from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

import { logout } from "../services/auth.service";

const AuthContext = createContext();

function AuthProvider({ children }) {
  const [user, setUser] = useState(null);

  const navigate = useNavigate();

  useEffect(() => {
    if (
      window.location.pathname !== "/loading" &&
      window.location.pathname !== "/signin" &&
      window.location.pathname !== "/signup" &&
      !user
    ) {
      navigate("/loading");
    }
  }, [navigate, user]);

  const login = (user) => {
    setUser(user);
    navigate("/");
  };

  const logoutUser = () => {
    const token = localStorage.getItem("accessToken");

    logout(token);

    setTimeout(() => {
      localStorage.removeItem("accessToken");
      localStorage.removeItem("refreshToken");
      setUser(null);
      navigate("/signin");
    }, 3000);
  };

  return (
    <AuthContext.Provider value={{ user, login, logoutUser }}>
      {children}
    </AuthContext.Provider>
  );
}

export { AuthContext, AuthProvider };
