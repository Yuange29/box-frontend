import { useEffect, useState, useContext } from "react";

import { LoadingContext } from "../../contexts/LoadingContext";
import { DataContext } from "../../contexts/DataContext";
import { ToastContext } from "../../contexts/ToastContext";

import { Button } from "../ui/Button";
import { SmallText } from "../ui/Typography";
import { DropDownCategories } from "./DropDownCategories";

import { createFee } from "../../services/fee.service";

import { FormBox } from "../../styles/FormBox";

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
        <DropDownCategories
          id="categoryName"
          name="categoryName"
          value={categoryName}
          onChange={(e) => setCategoryName(e.target.value)}
          options={categories}
          placeholder="Chọn danh mục..."
        />

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
