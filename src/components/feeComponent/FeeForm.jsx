import styled from "styled-components";
import { useEffect, useState, useContext } from "react";

import { LoadingContext } from "../../contexts/LoadingContext";
import { DataContext } from "../../contexts/DataContext";
import { ToastContext } from "../../contexts/ToastContext";

import { Button } from "../ui/Button";
import { SmallText } from "../ui/Typography";

import { createFee } from "../../services/fee.service";

const FormBox = styled.div`
  .form {
    width: 450px;
    margin: 2rem auto;
    border: 1px solid var(--border-primary);
    border-radius: 16px;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    gap: 0.5rem;
    background-color: var(--bg-card);
    padding-bottom: 1.5rem;
  }

  label {
    margin-top: 1rem;
    font-size: 1.2rem;
    align-self: flex-start;
    margin-left: 2rem;
    color: var(--text-secondary);
    font-weight: bold;
  }

  input,
  textarea,
  select,
  option {
    width: 80%;
    height: 35px;
    font-size: 16px;
    text-indent: 10px;
    letter-spacing: 2px;
    font-weight: bold;
    color: var(--text-primary);
    background: var(--bg-secondary);
    border: 1px solid var(--border-primary);
    border-radius: 16px;
    transition:
      border-color 0.2s ease,
      box-shadow 0.2s ease;
  }

  input::placeholder,
  textarea::placeholder {
    color: var(--text-muted);
  }

  textarea {
    height: 60px;
    resize: none;
  }

  input:hover,
  textarea:hover,
  select:hover {
    border-color: var(--border-hover);
    box-shadow: 0 4px 12px rgba(255, 255, 255, 0.05);
  }

  input:focus,
  textarea:focus,
  select:focus {
    outline: 0;
    border-color: var(--border-hover);
    box-shadow: 0 0 0 2px rgba(255, 255, 255, 0.05);
  }

  @media (max-width: 768px) {
    .form {
      width: 80%;
    }
  }
`;

export default function FeeForm() {
  const { setLoadingData } = useContext(LoadingContext);
  const { categories, setLoadingFees, setLoadingCategories } =
    useContext(DataContext);
  const { toast } = useContext(ToastContext);

  const [feeName, setFeeName] = useState("");
  const [feePrice, setFeePrice] = useState(0);
  const [categoryName, setCategoryName] = useState("");
  const [feeDescription, setfeeDescription] = useState("");
  const today = new Date().toISOString().split("T")[0];
  const [date, setDate] = useState(today);
  const [error, setError] = useState("");

  useEffect(() => {
    if (categories.length === 0) {
      setLoadingCategories(true);
    }

    if (categories.length > 0) {
      setCategoryName(categories[0].categoryName);
    }
  }, [categories, setLoadingCategories]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");

    if (feeName.trim() === "" || feePrice === 0) {
      setError("Không được bỏ trống");
      return;
    }

    try {
      setLoadingData(true);

      await createFee(feeName, feePrice, feeDescription, date, categoryName);

      setFeeName("");
      setFeePrice(0);
      setfeeDescription("");

      toast.success("Thêm thành công");
      setLoadingFees(true);
    } catch (error) {
      console.log("Lỗi: ", error);
    } finally {
      setLoadingData(false);
    }
  };

  return (
    <FormBox>
      <form className="form" onSubmit={handleSubmit}>
        <label htmlFor="feeName">Tên chi phí:</label>
        <input
          type="text"
          id="feeName"
          name="feeName"
          required
          value={feeName}
          onChange={(e) => setFeeName(e.target.value)}
        />

        <label htmlFor="feePrice">Số tiền:</label>
        <input
          type="number"
          id="feePrice"
          name="feePrice"
          required
          value={feePrice}
          onChange={(e) => setFeePrice(e.target.value)}
        />

        <label htmlFor="categoryName">Danh mục:</label>
        <select
          id="categoryName"
          name="categoryName"
          value={categoryName}
          onChange={(e) => setCategoryName(e.target.value)}
        >
          {categories.map((item) => (
            <option key={item.categoryName} value={item.categoryName}>
              {item.categoryName}
            </option>
          ))}
        </select>

        <label htmlFor="feeDescription">Ghi chú:</label>
        <textarea
          id="feeDescription"
          name="feeDescription"
          rows="4"
          value={feeDescription}
          onChange={(e) => setfeeDescription(e.target.value)}
        ></textarea>

        <label htmlFor="date">Ngày:</label>
        <input
          type="date"
          id="date"
          name="date"
          required
          value={date}
          onChange={(e) => setDate(e.target.value)}
        />

        <Button type="submit">Thêm chi phí</Button>

        <SmallText>{error}</SmallText>
      </form>
    </FormBox>
  );
}
