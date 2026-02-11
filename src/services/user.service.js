import api from "./api";

const getInfo = () => {
  return api.get("/users/getInfo");
};

const register = (userName, password, email) => {
  return api.post("/users", { userName, password, email });
};

export { getInfo, register };
