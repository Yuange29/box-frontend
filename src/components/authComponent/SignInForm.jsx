import { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";

import { AuthContext } from "../../contexts/AuthContext.jsx";
import { LoadingContext } from "../../contexts/LoadingContext.jsx";
import { ToastContext } from "../../contexts/ToastContext.jsx";

import Wrapper from "../../styles/FormWrapper";
import { Button } from "../ui/Button.jsx";
import { Form, Input, Label } from "../ui/FormIngredients.style.jsx";

import api from "../../services/api.js";
import { login } from "../../services/auth.service";
import { getInfo } from "../../services/user.service";

const SignInForm = () => {
  const { login: loginContext } = useContext(AuthContext);
  const { loadingData, setLoadingData } = useContext(LoadingContext);
  const { toast } = useContext(ToastContext);

  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!userName || userName.length < 6 || !password) {
      toast.error("Tên đăng nhập hoặc mật khẩu sai!");
      return;
    }

    try {
      setLoadingData(true);

      const response = await login(userName, password);
      const { accessToken } = response.data.data;
      api.defaults.headers.common["Authorization"] = `Bearer ${accessToken}`;

      const userInfo = await getInfo();

      loginContext(userInfo.data.data, accessToken);

      toast.success("Đăng nhập thành công!");
      navigate("/");
    } catch (error) {
      toast.error("Đăng nhập thất bại!");
      console.error("Login failed:", error);
    } finally {
      setLoadingData(false);
    }
  };

  return (
    <Wrapper>
      <div className="form-container">
        <Form onSubmit={handleSubmit} autoComplete="off">
          <h1 className="title">Đăng nhập</h1>

          <Label>Tên đăng nhập:</Label>
          <Input
            type="text"
            autoComplete="username"
            placeholder="Nhập tên đăng nhập của bạn"
            value={userName}
            onChange={(e) => setUserName(e.target.value)}
          />

          <Label>Mật khẩu:</Label>
          <Input
            type="password"
            autoComplete="current-password"
            placeholder="Nhập mật khẩu"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />

          <p
            className="forgot" /*onClick={() => navigate("/forgot-password")}*/
          >
            Quên mật khẩu?
          </p>

          <Button type="submit" disabled={loadingData} $center>
            {loadingData ? "Chờ xí" : "Đăng nhập"}
          </Button>
          <p className="signup">
            Chưa có tài khoản?
            <span onClick={() => navigate("/signup")}>Đăng kí</span>
          </p>
        </Form>
      </div>
    </Wrapper>
  );
};

export default SignInForm;
