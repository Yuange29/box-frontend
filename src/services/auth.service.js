import { api } from "./api";

export const login = (userName, password) => {
  return api.post("/auth/signin", {
    userName,
    password,
  });
};

export const logout = () => {
  return api.post("auth/logout", {});
};

export const refresh = () => {
  return api.post("auth/refresh", {});
};
