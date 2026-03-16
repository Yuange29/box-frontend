import api from "./api";

const getInfo = () => {
  return api.get("/users/me");
};

const register = (userNickName, userName, password, email) => {
  return api.post("/auth/signup", { userNickName, userName, password, email });
};

export { getInfo, register };
