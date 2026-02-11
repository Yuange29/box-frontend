import { useState, useContext } from "react";
import Wrapper from "../../styles/FormWrapper";
import { login } from "../../services/auth.service";
import { useNavigate } from "react-router-dom";

import Loading from "../ui/Loading";
import { SmallText, Text } from "../ui/Typography";
import { getInfo } from "../../services/user.service";
import { AuthContext } from "../../Contexts/AuthContext";

const SignInForm = () => {
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const { login: loginContext } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");

    if (!userName || !password) {
      setError("Vui lòng điền tên tài khoản và mật khẩu");
      return;
    }

    try {
      setLoading(true);
      const response = await login(userName, password);

      const token = response.data.result.token;
      localStorage.setItem("authToken", token);

      const userInfo = await getInfo();

      loginContext(userInfo.data.result);

      navigate("/");
    } catch (error) {
      setError(error.response?.data?.message || "Login fail");
    } finally {
      setLoading(false);
    }
  };

  return (
    <Wrapper>
      <div className="form-container">
        <h1 className="title">Chào mừng trở lại</h1>

        <form className="form" onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="User name"
            value={userName}
            onChange={(e) => setUserName(e.target.value)}
          />
          {error && userName.length < 6 && (
            <SmallText className="errText">Tên tài khoản chưa đúng</SmallText>
          )}

          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />

          {error && password.length < 6 && (
            <SmallText className="errText">Mật khẩu chưa đúng</SmallText>
          )}

          <Text className="forgot" onClick={() => navigate("/forgot-password")}>
            Quên mật khẩu?
          </Text>

          <button type="submit" disabled={loading}>
            {loading ? <Loading /> : "Đăng nhập"}
          </button>
        </form>
        <p className="signup">
          Chưa có tài khoản?{" "}
          <span onClick={() => navigate("/signup")}>Đăng kí</span>
        </p>
      </div>
    </Wrapper>
  );
};

export default SignInForm;
