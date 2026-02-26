import styled from "styled-components";
import { useEffect, useState } from "react";
import { useContext } from "react";
import { AuthContext } from "../../contexts/AuthContext";

import { Button } from "../ui/Button";

import { getCategories } from "../../services/category.service";
import { createFee } from "../../services/fee.service";
import { SmallText } from "../ui/Typography";

const FormBox = styled.div`
  .form {
    width: 450px;
    margin: 2rem auto;
    border: 1px solid var(--green-bean);
    border-radius: 16px;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    gap: 0.5rem;
    background-color: #265c001b;
  }

  label {
    margin-top: 1rem;
    color: var(--text-color);
    font-size: 1.2rem;
    align-self: flex-start;
    margin-left: 2rem;
    color: var(--text-color);
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
    color: var(--text-color);
    border: 1px solid #15503c;
    border-radius: 16px;
  }

  textarea {
    height: 60px;
    resize: none;
  }

  input:hover,
  textarea:hover,
  select:hover {
    box-shadow: 2px 5px 20px 2px #15503c;
  }

  input:focus,
  textarea:focus,
  select:focus {
    outline: 0;
    box-shadow: 2px 5px 5px 2px #15503c;
  }

  @media (max-width: 768px) {
    .form {
      width: 80%;
    }
  }
`;

export default function FeeForm() {
  const { setLoadData } = useContext(AuthContext);

  const [feeName, setFeeName] = useState("");
  const [feePrice, setFeePrice] = useState(0);
  const [category, setCategory] = useState([]);
  const [categoryName, setCategoryName] = useState("");
  const [feeDescription, setfeeDescription] = useState("");
  const today = new Date().toISOString().split("T")[0];
  const [date, setDate] = useState(today);
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchCategoryData = async () => {
      try {
        setLoadData(true);

        const response = await getCategories();
        if (response) setCategory(response.data.result);
        setCategoryName(response.data.result[0].categoryName);
      } catch (error) {
        console.log("Lỗi: ", error);
      } finally {
        setLoadData(false);
      }
    };
    fetchCategoryData();
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");

    if (feeName.trim() === "" || feePrice === 0) {
      setError("Không được bỏ trống");
      return;
    }

    try {
      setLoadData(true);

      await createFee(feeName, feePrice, feeDescription, date, categoryName);

      setFeeName("");
      setFeePrice(0);
      setfeeDescription("");
    } catch (error) {
      console.log("Lỗi: ", error);
    } finally {
      setLoadData(false);
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
          {category.map((item) => (
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
          defaultValue={today}
        />

        <Button type="submit">Thêm chi phí</Button>

        <SmallText>{error}</SmallText>
      </form>
    </FormBox>
  );
}
