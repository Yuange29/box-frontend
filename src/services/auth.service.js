import { api } from "./api";

export const login = (userName, password) => {
  return api.post("/auth/login", {
    userName,
    password,
  });
};

export const logout = (token) => {
  return api.post("auth/logout", { token });
};
