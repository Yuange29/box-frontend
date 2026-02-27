import { useState, useContext } from "react";
import styled from "styled-components";
import { Navigate } from "react-router-dom";

import { Button } from "../ui/Button";
import Loading from "../ui/Loading";

import { LoadingContext } from "../../contexts/LoadingContext";

import { createCategory } from "../../services/category.service";
import { DataContext } from "../../contexts/DataContext";

const Form = styled.form`
  width: 80%;
  margin: 30px auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const Input = styled.input`
  width: 50%;
  padding: 10px 20px;
  font-size: 16px;
  border: 0;
  margin: 15px;

  &:focus {
    outline: 0;
  }
  @media (max-width: 768px) {
    width: 100%;
  }
`;

export default function AddCategoryForm() {
  const [categoryName, setCategoryName] = useState("");
  const [categoryDescription, setCategoryDescription] = useState("");
  const [error, setError] = useState("");

  const { loadingData, setLoadingData } = useContext(LoadingContext);
  const { setLoadingCategories } = useContext(DataContext);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoadingData(true);

    if (!categoryName.trim()) {
      setError("Tên danh mục không được để trống");
      setLoadingData(false);
      return;
    }

    if (categoryName.length < 6) {
      setError("Tên danh mục phải có ít nhất 6 ký tự");
      setLoadingData(false);
      return;
    }

    setError("");

    try {
      await createCategory(categoryName, categoryDescription);

      setCategoryName("");
      setCategoryDescription("");

      setLoadingCategories(true);
    } catch (error) {
      const serverMessage =
        error?.response?.data?.message ||
        error?.message ||
        "Đã xảy ra lỗi khi tạo danh mục";
      setError(serverMessage);

      console.error("Error creating category:", error);
    } finally {
      setLoadingData(false);
    }
  };

  return (
    <Form onSubmit={handleSubmit}>
      <Input
        type="text"
        value={categoryName}
        placeholder="Nhập tên danh mục mới"
        onChange={(e) => setCategoryName(e.target.value)}
      />
      <Input
        type="text"
        value={categoryDescription}
        placeholder="Nhập mô tả danh mục"
        onChange={(e) => setCategoryDescription(e.target.value)}
      />
      <Button type="submit" disabled={loadingData}>
        {loadingData ? <Loading /> : "Thêm danh mục"}
      </Button>
      {error && <p style={{ color: "red" }}>{error}</p>}
    </Form>
  );
}
