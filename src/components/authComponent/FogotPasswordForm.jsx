import { useState, useContext } from "react";

import { LoadingContext } from "../../contexts/LoadingContext";
import { ToastContext } from "../../contexts/ToastContext";

import Wrapper from "../../styles/FormWrapper";
import { Button } from "../ui/Button";
import { Form, Input, Label } from "../ui/FormIngredients.style";

export default function FogotPasswordForm() {
  const { loadingData, setLoadingData } = useContext(LoadingContext);
  const { toast } = useContext(ToastContext);

  const [userName, setUserName] = useState("");
  const [identifier, setIdentifier] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (userName.length < 6 || identifier.length < 6) {
      toast.error("Sai dữ liệu!");
      return;
    }
    try {
      setLoadingData(true);
    } catch (err) {
      console.log("Lấy lại mật khẩu thất bại: ", err);
      toast.error("Lấy lại mật khẩu thất bại!");
    } finally {
      setLoadingData(false);
    }
  };

  return (
    <Wrapper>
      <div className="form-container">
        <Form onSubmit={handleSubmit}>
          <h1 className="title">Quên mật khẩu</h1>
          <Label>Nhập tên tài khoảng:</Label>
          <Input
            type="text"
            placeholder="Nhập tên tài khoản"
            value={userName}
            onChange={(e) => setUserName(e.target.value)}
          />

          <Label>Nhập email đã đăng kí:</Label>
          <Input
            type="text"
            placeholder="Nhập email đã đăng ký"
            value={identifier}
            onChange={(e) => setIdentifier(e.target.value)}
          />

          <Button type="submit" $center disabled={loadingData}>
            {loadingData ? "Đang xử lí" : "Gửi yêu cầu"}
          </Button>
        </Form>
      </div>
    </Wrapper>
  );
}
