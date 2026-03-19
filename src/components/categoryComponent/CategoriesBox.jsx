import { useContext, useState } from "react";

import { LoadingContext } from "../../contexts/LoadingContext";
import { DataContext } from "../../contexts/DataContext";
import { ConfirmContext } from "../../contexts/ConfirmContext";
import { ToastContext } from "../../contexts/ToastContext";

import { deleteCategory } from "../../services/category.service";
import { Overlay } from "../../styles/FeeBoxStyle";
import { CateInfoWrapper, BoxContainer, Child } from "../../styles/CategoryBox";

function CategoryInfo({ category, onClose }) {
  if (!category) return null;
  return (
    <>
      <Overlay onClick={onClose} />
      <CateInfoWrapper>
        <div className="header">
          <h3 className="title">{category.categoryName}</h3>
          <button className="close-btn" onClick={onClose}>
            <i className="fa-solid fa-xmark" />
          </button>
        </div>

        <div className="divider" />

        <div className="row">
          <span className="label">
            <i className="fa-solid fa-tag" /> Tên danh mục
          </span>
          <span className="value">{category.categoryName || "—"}</span>
        </div>
        <div className="row">
          <span className="label">
            <i className="fa-solid fa-note-sticky" /> Mô tả
          </span>
          <span className="value">
            {category.categoryDescription || "Không có mô tả"}
          </span>
        </div>
      </CateInfoWrapper>
    </>
  );
}

export default function CategoriesBox({ categories }) {
  const { setLoadingData } = useContext(LoadingContext);
  const { setLoadingCategories } = useContext(DataContext);
  const { confirm } = useContext(ConfirmContext);
  const { toast } = useContext(ToastContext);
  const [showInfo, setShowInfo] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState(null);

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

  const handleInfo = (category) => {
    setShowInfo(true);
    setSelectedCategory(category);
  };

  return (
    <BoxContainer>
      {categories && categories.length > 0 ? (
        categories.map((category) => (
          <Child key={category.categoryId}>
            <p className="content">{category.categoryName}</p>
            <button className="more-btn" onClick={() => handleInfo(category)}>
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

      {showInfo && (
        <CategoryInfo
          category={selectedCategory}
          onClose={() => setSelectedCategory(null)}
        />
      )}
    </BoxContainer>
  );
}
