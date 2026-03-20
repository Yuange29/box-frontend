import { useContext, useEffect, useState } from "react";

import { LoadingContext } from "../../contexts/LoadingContext";
import { DataContext } from "../../contexts/DataContext";
import { ToastContext } from "../../contexts/ToastContext";

import { SmallText } from "../ui/Typography";
import { DropDownCategories } from "./DropDownCategories";
import { Button } from "../ui/Button";
import { Form, Input, TextArea, Label } from "../ui/FormIngredients.style";

import { createFee } from "../../services/fee.service";

export default function FeeForm({ categories }) {
  const { setLoadingData } = useContext(LoadingContext);
  const { setLoadingFees, setLoadingCategories } = useContext(DataContext);
  const { toast } = useContext(ToastContext);

  const [feeName, setFeeName] = useState("");
  const [feePrice, setFeePrice] = useState("");
  const [categoryName, setCategoryName] = useState("");
  const [feeDescription, setfeeDescription] = useState("");
  const today = new Date().toISOString().split("T")[0];
  const [date, setDate] = useState(today);
  const [error, setError] = useState("");

  const isDisabled = !categories || categories.length === 0;

  useEffect(() => {
    if (!categories || categories.length === 0) setLoadingCategories(true);
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");

    if (feeName.trim() === "" || feeName.length < 3) {
      toast.error("Tên trống hoặc ít hơn 3 chữ cái!");
      return;
    }
    if (+feePrice < 0) {
      toast.error("Giá ít hơn 0đ!");
      return;
    }
    if (!categoryName || !date) {
      toast.error("Có thông tin bị bỏ trống!");
      return;
    }

    try {
      setLoadingData(true);

      await createFee(feeName, +feePrice, feeDescription, date, categoryName);

      setFeeName("");
      setFeePrice("");
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
    <Form onSubmit={handleSubmit}>
      <Label htmlFor="feeName">Tên chi phí:</Label>
      <Input
        type="text"
        id="feeName"
        name="feeName"
        placeholder="Nhập tên chi phí..."
        value={feeName}
        onChange={(e) => setFeeName(e.target.value)}
      />

      <Label htmlFor="feePrice">Số tiền:</Label>
      <Input
        type="number"
        id="feePrice"
        name="feePrice"
        placeholder="Nhập giá trị..."
        value={feePrice}
        onChange={(e) => setFeePrice(e.target.value)}
      />

      <Label htmlFor="categoryName">Danh mục:</Label>
      <DropDownCategories
        id="categoryName"
        name="categoryName"
        value={categoryName}
        onChange={(e) => setCategoryName(e.target.value)}
        options={categories}
        placeholder="Chọn danh mục..."
      />

      <Label htmlFor="feeDescription">Ghi chú:</Label>
      <TextArea
        id="feeDescription"
        name="feeDescription"
        rows="2"
        value={feeDescription}
        placeholder="Nhập mô tả cho chi phí của bạn..."
        onChange={(e) => setfeeDescription(e.target.value)}
      ></TextArea>

      <Label htmlFor="date">Ngày:</Label>
      <Input
        type="date"
        id="date"
        name="date"
        value={date}
        placeholder="Chọn ngày đi..."
        onChange={(e) => setDate(e.target.value)}
      />

      <Button type="submit" disabled={isDisabled} $center>
        {isDisabled ? "Không thể thêm" : "Thêm"}
      </Button>

      <SmallText>{error}</SmallText>
    </Form>
  );
}
