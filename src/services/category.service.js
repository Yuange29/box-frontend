import api from "./api";

const createCategory = (categoryName, categoryDescription) => {
  return api.post("/category", {
    categoryName,
    categoryDescription,
  });
};

const getCategories = () => {
  return api.get("/category");
};

const deleteCategory = (categoryId) => {
  return api.delete(`/category/${categoryId}`);
};

export { createCategory, getCategories, deleteCategory };
