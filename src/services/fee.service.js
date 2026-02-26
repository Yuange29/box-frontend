import api from "./api";

const getFees = () => {
  return api.get("/fee/userFees");
};

const createFee = (feeName, feePrice, feeDescription, date, categoryName) => {
  return api.post("/fee", {
    feeName,
    feePrice,
    feeDescription,
    date,
    categoryName,
  });
};

const updateFee = (feeId, feeName, feePrice, feeDescription, categoryName) => {
  return api.put(`/fee/${feeId}`, {
    feeName,
    feePrice,
    feeDescription,
    categoryName,
  });
};

const deleteFee = (feeId) => {
  return api.delete(`/fee/${feeId}`);
};

export { getFees, createFee, updateFee, deleteFee };
