import { useState } from "react";
import styled from "styled-components";

import { Button } from "../ui/Button";
import { createCategory } from "../../services/category.service";
import Loading from "../ui/Loading";

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

export default function AddCategoryForm({ isRefresh }) {
  const [categoryName, setCategoryName] = useState("");
  const [categoryDescription, setCategoryDescription] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);

    if (!categoryName.trim()) {
      setError("Tên danh mục không được để trống");
      setIsLoading(false);
      return;
    }

    if (categoryName.length < 6) {
      setError("Tên danh mục phải có ít nhất 6 ký tự");
      setIsLoading(false);
      return;
    }

    setError("");

    try {
      await createCategory(categoryName, categoryDescription);

      setCategoryName("");
      setCategoryDescription("");
      isRefresh((prev) => !prev);
    } catch (error) {
      const serverMessage = error?.response?.data?.message;
      setError(
        serverMessage
          ? "Danh mục đã được tạo rồi"
          : "Đã xảy ra lỗi khi tạo danh mục",
      );

      console.error("Error creating category:", error);
    } finally {
      setIsLoading(false);
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
      <Button type="submit" disabled={isLoading}>
        {isLoading ? <Loading /> : "Thêm danh mục"}
      </Button>
      {error && <p style={{ color: "red" }}>{error}</p>}
    </Form>
  );
}
