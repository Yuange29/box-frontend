import { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";

import Wrapper from "../../styles/FormWrapper";
import { Button } from "../ui/Button";
import { Form, Input, Label } from "../ui/FormIngredients.style";

import { AuthContext } from "../../contexts/AuthContext";
import { LoadingContext } from "../../contexts/LoadingContext";
import { ToastContext } from "../../contexts/ToastContext";

import { register, getInfo } from "../../services/user.service";
import { login } from "../../services/auth.service";
import api from "../../services/api";

export default function SignUpForm() {
  const { toast } = useContext(ToastContext);
  const { login: loginContext } = useContext(AuthContext);
  const { loadingData, setLoadingData } = useContext(LoadingContext);

  const [userNickName, setUserNickName] = useState("");
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [email, setEmail] = useState("");

  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!userName || userName.length < 6) {
      toast.error("Tên đăng nhập trống hoặc ít hơn 6 chữ");
      return;
    }

    if (!password || password.length < 6) {
      toast.error("Mật khẩu trống hoặc ít hơn 6 chữ");
      return;
    }

    if (password !== confirmPassword) {
      toast.error("Mật khẩu chưa đúng!");
      return;
    }

    if (!email || !email.includes("@")) {
      toast.error("Email chưa đúng!");
      return;
    }

    try {
      setLoadingData(true);

      await register(userNickName, userName, password, email);

      const loginRes = await login(userName, password);
      api.defaults.headers.common["Authorization"] =
        `Bearer ${loginRes.data.data.accessToken}`;

      const userInfo = await getInfo();

      loginContext(userInfo.data.data, loginRes.data.data.accessToken);

      toast.success("Tạo tài khoản thành công!");

      navigate("/");
    } catch (err) {
      err.data?.data?.code === 1003
        ? toast.error("Tài khoản đã tồn tại!")
        : toast.error("Lỗi tạo tài khoản!");
    } finally {
      setLoadingData(false);
    }
  };

  return (
    <Wrapper>
      <div className="form-container">
        <Form onSubmit={handleSubmit} autoComplete="off">
          <h1 className="title">Tạo tài khoản Storage</h1>
          <Label>Tên hiển thị:</Label>
          <Input
            id="nickName"
            type="text"
            placeholder="Nhập tên hiển thị"
            value={userNickName}
            onChange={(e) => setUserNickName(e.target.value)}
          />

          <Label>Tên tài khoản:</Label>
          <Input
            id="account"
            autoComplete="username"
            type="text"
            placeholder="Nhập tên tài khoản"
            value={userName}
            onChange={(e) => setUserName(e.target.value)}
          />

          <Label>Mật khẩu:</Label>
          <Input
            id="password"
            autoComplete="new-password"
            type="password"
            placeholder="Nhập mât khẩu"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />

          <Input
            id="confirmPassword"
            autoComplete="current-password"
            type="password"
            placeholder="Nhập lại mật khẩu"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
          />

          <Label>Email:</Label>
          <Input
            id="email"
            type="email"
            placeholder="Nhập email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />

          <Button
            type="submit"
            disabled={loadingData}
            $center
            style={{ marginTop: "8px" }}
          >
            {loadingData ? "Chờ xí" : "Đăng kí"}
          </Button>
          <p className="signup">
            Đã có tài khoản?
            <span onClick={() => navigate("/signin")}> Đăng nhập</span>
          </p>
        </Form>
      </div>
    </Wrapper>
  );
}
