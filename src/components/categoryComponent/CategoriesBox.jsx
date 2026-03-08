import styled from "styled-components";
import { useContext } from "react";

import { LoadingContext } from "../../contexts/LoadingContext";
import { DataContext } from "../../contexts/DataContext";
import { ConfirmContext } from "../../contexts/ConfirmContext";
import { ToastContext } from "../../contexts/ToastContext";

import { deleteCategory } from "../../services/category.service";

const BoxContainer = styled.div`
  width: 100%;
  box-sizing: border-box;

  .inf {
    color: var(--text-muted);
    font-size: 16px;
    text-align: center;
    margin-top: 40px;
  }

  @media (max-width: 768px) {
    padding: 4px 8px;
  }
`;

const Child = styled.div`
  box-sizing: border-box;
  width: 70%;
  margin: 10px auto;
  display: grid;
  grid-template-columns: 1fr auto auto;
  gap: 0 12px;
  align-items: center;
  padding: 5px;
  background: var(--bg-card);
  border-bottom: 1px solid var(--border-primary);
  border-radius: 8px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.2);
  transition: border-color 0.2s ease;

  &:hover {
    border-color: var(--border-hover);
    scale: 1.01;
  }

  .content {
    font-size: 18px;
    font-weight: 500;
    color: var(--text-primary);
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
      box-shadow: 0 4px 12px rgba(0, 0, 0, 0.3);
      transform: translateY(-2px);
    }

    &:active {
      opacity: 0.8;
      transform: translateY(0);
    }
  }

  .more-btn {
    background: var(--bg-hover);
    color: var(--text-primary);
    border: 1px solid var(--border-primary);
  }

  .delete-btn {
    background: var(--error);
    color: white;
  }

  @media (max-width: 768px) {
    width: 100%;

    .content {
      font-size: 16px;
      margin: 4px 8px 4px 0px;
      padding-left: 10px;
    }

    button {
      width: 30px;
      height: 30px;
    }
  }

  @media (min-width: 768px) {
    .content {
      text-indent: 20px;
    }
  }
`;

export default function CategoriesBox({ categories }) {
  const { setLoadingData } = useContext(LoadingContext);
  const { setLoadingCategories } = useContext(DataContext);
  const { confirm } = useContext(ConfirmContext);
  const { toast } = useContext(ToastContext);

  const handleDelete = async (categoryId) => {
    if (!categoryId) return;

    const category = categories.find((c) => c.categoryId === categoryId);
    const name = category?.categoryName;

    const ok = await confirm({
      title: "Xóa danh mục",
      message: `Bạn có chắc muốn xóa danh mục "${name}" không?`,
      danger: true,
    });

    if (!ok) return;

    try {
      setLoadingData(true);
      await deleteCategory(categoryId);
      toast.success(`Xóa danh mục "${name}" thành công!`);
      setLoadingCategories(true);
    } catch (err) {
      const msg =
        err?.response?.data?.message || err?.message || "Xóa thất bại";
      toast.error(msg);
    } finally {
      setLoadingData(false);
    }
  };

  return (
    <BoxContainer>
      {categories && categories.length > 0 ? (
        categories.map((category) => (
          <Child key={category.categoryId}>
            <p className="content">{category.categoryName}</p>
            <button className="more-btn">
              <i className="fa-solid fa-plus"></i>
            </button>
            <button
              className="delete-btn"
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
