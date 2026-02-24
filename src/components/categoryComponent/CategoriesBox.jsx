import styled from "styled-components";
import { useContext } from "react";

import { AuthContext } from "../../Contexts/AuthContext";
import { Text } from "../ui/Typography";

import { deleteCategory } from "../../services/category.service";

const BoxContainer = styled.div`
  width: 100%;
  padding: 20px;
  box-sizing: border-box;

  .inf {
    color: var(--cotton-color);
    font-size: 18px;
    text-align: center;
    margin-top: 40px;
  }
`;

const Child = styled.div`
  box-sizing: border-box;
  text-indent: 20px;
  width: 70%;
  margin: 10px auto;
  display: grid;
  grid-template-columns: 1fr auto auto;
  gap: 0 12px;
  align-items: center;
  padding: 5px;
  background: #f5f5f5;
  border-radius: 8px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);

  .content {
    font-size: 18px;
    font-weight: 500;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  }

  button {
    width: 40px;
    height: 40px;
    padding: 8px 16px;
    border: none;
    border-radius: 8px;
    cursor: pointer;
    font-size: 14px;
    transition: all 0.2s ease;
    display: flex;
    align-items: center;
    justify-content: center;

    &:hover {
      box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
      transform: translateY(-2px);
    }
    &:active {
      opacity: 0.8;
      box-shadow: 0 3px 6px rgba(0, 0, 0, 0.1);
      transform: translateY(0);
    }
  }

  .more-btn {
    background: #176782;
    color: white;
  }

  .delete-btn {
    background: #dc3545;
    color: white;
  }
`;

export default function CategoriesBox({ categories, onRefresh }) {
  const { setLoadData } = useContext(AuthContext);

  const handleDelete = async (categoryId) => {
    if (!categoryId) return;

    const category = categories.find((c) => c.categoryId === categoryId);

    const name = category?.categoryName;

    const confirm = window.confirm(`Xóa danh mục "${name}" ?`);
    if (!confirm) return;

    try {
      setLoadData(true);

      await deleteCategory(categoryId);

      if (typeof onRefresh === "function") onRefresh((prev) => !prev);
      else {
        window.location.reload();
      }
    } catch (err) {
      console.error("Error deleting category:", err);
      const msg =
        err?.response?.data?.message || err?.message || "Xóa thất bại";
      alert(msg);
    } finally {
      setLoadData(false);
    }
  };

  return (
    <BoxContainer>
      {categories && categories.length > 0 ? (
        categories.map((category) => (
          <Child key={category.id || category.categoryId || category._id}>
            <p className="content">{category.categoryName || category.name}</p>
            <button className=" more-btn">
              <i className="fa-solid fa-plus"></i>
            </button>
            <button
              className=" delete-btn"
              onClick={() => handleDelete(category.categoryId)}
            >
              <i className="fa-solid fa-trash"></i>
            </button>
          </Child>
        ))
      ) : (
        <p className="inf">
          Bạn chưa có danh mục nào. Hãy thêm một danh mục mới!
        </p>
      )}
    </BoxContainer>
  );
}
