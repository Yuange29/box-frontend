import { createContext, useEffect, useState, useContext } from "react";
import { useNavigate } from "react-router-dom";

import { LoadingContext } from "./LoadingContext";

import { logout, refresh } from "../services/auth.service";
import api from "../services/api";
import { getInfo } from "../services/user.service";

const AuthContext = createContext();

function AuthProvider({ children }) {
  const [user, setUser] = useState(null);
  const [accessToken, setAccessToken] = useState(null);
  const [isInitialized, setIsInitialized] = useState(false);
  const { setLoadingData, loadingData } = useContext(LoadingContext);

  const navigate = useNavigate();

  useEffect(() => {
    const initAuth = async () => {
      setLoadingData(true);
      try {
        const response = await refresh();
        const newToken = response.data.data.accessToken;

        setAccessToken(newToken);
        api.defaults.headers.common["Authorization"] = `Bearer ${newToken}`;

        const userInfo = await getInfo();
        setUser(userInfo.data.data);
      } catch {
        setAccessToken(null);
        setUser(null);
      } finally {
        setLoadingData(false);
        setIsInitialized(true);
      }
    };

    initAuth();
  }, []);

  useEffect(() => {
    if (!isInitialized) return;
    if (loadingData) return;

    if (
      window.location.pathname !== "/loading" &&
      window.location.pathname !== "/signin" &&
      window.location.pathname !== "/signup" &&
      !user
    ) {
      navigate("/loading");
    }
  }, [navigate, user, loadingData]);

  const login = async (user, token) => {
    setUser(user);
    setAccessToken(token);
    api.defaults.headers.common["Authorization"] = `Bearer ${token}`;
    navigate("/");
  };

  const logoutUser = async () => {
    try {
      await logout();
    } catch {
      //
    } finally {
      setUser(null);
      setAccessToken(null);
      delete api.defaults.headers.common["Authorization"];
      navigate("/signin");
    }
  };

  return (
    <AuthContext.Provider value={{ user, accessToken, login, logoutUser }}>
      {children}
    </AuthContext.Provider>
  );
}

export { AuthContext, AuthProvider };
