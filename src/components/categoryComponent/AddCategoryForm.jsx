import { useState, useContext } from "react";

import { LoadingContext } from "../../contexts/LoadingContext";
import { DataContext } from "../../contexts/DataContext";
import { ToastContext } from "../../contexts/ToastContext";

import { createCategory } from "../../services/category.service";

import { Button } from "../ui/Button";
import Loading from "../ui/Loading";
import { Form, Input, Label } from "../../components/ui/FormIngredients.style";

export default function AddCategoryForm() {
  const [categoryName, setCategoryName] = useState("");
  const [categoryDescription, setCategoryDescription] = useState("");

  const { loadingData, setLoadingData } = useContext(LoadingContext);
  const { setLoadingCategories } = useContext(DataContext);
  const { toast } = useContext(ToastContext);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoadingData(true);

    if (!categoryName.trim()) {
      toast.error("Tên danh mục không được để trống");
      setLoadingData(false);
      return;
    }

    if (categoryName.length < 6) {
      toast.error("Tên danh mục phải có ít nhất 6 ký tự");
      setLoadingData(false);
      return;
    }

    try {
      await createCategory(categoryName, categoryDescription);
      setCategoryName("");
      setCategoryDescription("");
      toast.success("Thêm danh mục thành công!");
      setLoadingCategories(true);
    } catch (error) {
      const serverMessage =
        error?.response?.data?.message ||
        error?.message ||
        "Đã xảy ra lỗi khi tạo danh mục";
      toast.error(serverMessage);
    } finally {
      setLoadingData(false);
    }
  };

  return (
    <Form onSubmit={handleSubmit}>
      <Label>Tên danh mục</Label>
      <Input
        type="text"
        value={categoryName}
        placeholder="Nhập tên danh mục mới"
        onChange={(e) => setCategoryName(e.target.value)}
      />

      <Label>Mô tả</Label>
      <Input
        type="text"
        value={categoryDescription}
        placeholder="Nhập mô tả danh mục"
        onChange={(e) => setCategoryDescription(e.target.value)}
      />

      <Button
        type="submit"
        disabled={loadingData}
        style={{ marginTop: "8px" }}
        $center
      >
        {loadingData ? <Loading /> : "Thêm danh mục"}
      </Button>
    </Form>
  );
}
