import { createContext, useEffect } from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

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

  const logout = () => {
    setUser(null);
    localStorage.removeItem("accessToken");
    localStorage.removeItem("refreshToken");
    navigate("/signin");
  };

  return (
    <AuthContext.Provider value={{ user, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
}

export { AuthContext, AuthProvider };
