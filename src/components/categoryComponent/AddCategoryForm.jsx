import { useState, useContext } from "react";
import styled from "styled-components";

import { Button } from "../ui/Button";
import Loading from "../ui/Loading";

import { LoadingContext } from "../../contexts/LoadingContext";
import { DataContext } from "../../contexts/DataContext";
import { ToastContext } from "../../contexts/ToastContext";

import { createCategory } from "../../services/category.service";

const Form = styled.form`
  width: 60%;
  box-sizing: border-box;
  margin: 30px auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 12px;
  padding: 32px;
  background: var(--bg-card);
  border: 1px solid var(--border-primary);
  border-radius: 16px;

  @media (max-width: 1024px) {
    width: 80%;
  }

  @media (max-width: 768px) {
    width: 100%;
    padding: 20px;
  }
`;

const InputWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 6px;
`;

const Label = styled.label`
  font-size: 18px;
  font-weight: 600;
  color: var(--text-secondary);
  @media (max-width: 768px) {
    font-size: 16px;
  }
`;

const Input = styled.input`
  width: 100%;
  padding: 12px 16px;
  font-size: 16px;
  border: 1px solid var(--border-primary);
  border-radius: 8px;
  background: var(--bg-secondary);
  color: var(--text-primary);
  box-sizing: border-box;
  transition:
    border-color 0.2s ease,
    box-shadow 0.2s ease;

  &::placeholder {
    color: var(--text-muted);
  }

  &:focus {
    outline: 0;
    border-color: var(--border-hover);
    box-shadow: 0 0 0 2px rgba(255, 255, 255, 0.05);
  }
`;

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
      <InputWrapper>
        <Label>Tên danh mục</Label>
        <Input
          type="text"
          value={categoryName}
          placeholder="Nhập tên danh mục mới"
          onChange={(e) => setCategoryName(e.target.value)}
        />
      </InputWrapper>

      <InputWrapper>
        <Label>Mô tả</Label>
        <Input
          type="text"
          value={categoryDescription}
          placeholder="Nhập mô tả danh mục"
          onChange={(e) => setCategoryDescription(e.target.value)}
        />
      </InputWrapper>

      <Button type="submit" disabled={loadingData} style={{ marginTop: "8px" }}>
        {loadingData ? <Loading /> : "Thêm danh mục"}
      </Button>
    </Form>
  );
}
