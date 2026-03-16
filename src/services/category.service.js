import api from "./api";

const createCategory = (categoryName, categoryDescription) => {
  return api.post("/categories", {
    categoryName,
    categoryDescription,
  });
};

const getCategories = () => {
  return api.get("/categories");
};

const updateCategory = (categoryId, categoryName, categoryDescription) => {
  return api.patch(`/categories/${categoryId}`, {
    categoryName,
    categoryDescription,
  });
};

const deleteCategory = (categoryId) => {
  return api.delete(`/categories/${categoryId}`);
};

export { createCategory, getCategories, deleteCategory, updateCategory };
