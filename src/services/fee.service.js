import api from "./api";

const getFees = () => {
  return api.get("/fees");
};

const createFee = (feeName, feePrice, feeDescription, date, categoryName) => {
  return api.post("/fees", {
    feeName,
    feePrice,
    feeDescription,
    date,
    categoryName,
  });
};

const updateFee = (
  feeId,
  feeName,
  feePrice,
  feeDescription,
  categoryName,
  date,
) => {
  return api.put(`/fees/${feeId}`, {
    feeName,
    feePrice,
    feeDescription,
    categoryName,
    date,
  });
};

const deleteFee = (feeId) => {
  return api.delete(`/fees/${feeId}`);
};

export { getFees, createFee, updateFee, deleteFee };
