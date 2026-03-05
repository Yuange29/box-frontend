import { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";

import Wrapper from "../../styles/FormWrapper";
import Loading from "../ui/Loading";
import { SmallText } from "../ui/Typography";
import Dialog from "../ui/Dialog";

import { AuthContext } from "../../contexts/AuthContext";
import { LoadingContext } from "../../contexts/LoadingContext";

import { register, getInfo } from "../../services/user.service";
import { login } from "../../services/auth.service";

export default function SignUpForm() {
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [email, setEmail] = useState("");
  const { loadingData, setLoadingData } = useContext(LoadingContext);
  const [error, setError] = useState("");
  const { login: loginContext } = useContext(AuthContext);
  const [showDialog, setShowDialog] = useState(false);
  const navigate = useNavigate();

  const closeDialog = () => {
    if (redirectTimer.current) {
      clearTimeout(redirectTimer.current);
      redirectTimer.current = null;
    }
    setShowDialog(false);
    navigate("/");
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    setLoadingData(true);

    if (
      userName.length < 6 ||
      password.length < 6 ||
      password !== confirmPassword ||
      email.length < 6
    ) {
      setError("Vui lòng kiểm tra lại các trường nhập");
      setLoadingData(false);
      return;
    }

    try {
      await register(userName, password, email);

      const loginRes = await login(userName, password);
      localStorage.setItem("authToken", loginRes.data.result.token);

      const userInfo = await getInfo();

      loginContext(userInfo.data.result);
      setShowDialog(true);

      navigate("/");
    } catch (err) {
      setError(
        err.response?.data?.code === 1003
          ? "Tài khoản đã tồn tại"
          : "Đăng kí thất bại",
      );
    } finally {
      setLoadingData(false);
    }
  };

  return (
    <Wrapper>
      <div className="form-container">
        <h1 className="title">Storage</h1>

        <form className="form" onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="Nhập tên tài khoản"
            value={userName}
            onChange={(e) => setUserName(e.target.value)}
          />
          {error && userName.length < 6 && (
            <SmallText className="errText">tên tài khoản chưa đúng</SmallText>
          )}

          <input
            type="password"
            placeholder="Nhập mât khẩu"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          {error && password.length < 6 && (
            <SmallText className="errText">Mật khẩu chưa đúng</SmallText>
          )}

          <input
            type="password"
            placeholder="Nhập lại mật khẩu"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
          />
          {error && password !== confirmPassword && (
            <SmallText className="errText">Mật khẩu không khớp</SmallText>
          )}

          <input
            type="email"
            placeholder="Nhập email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          {error && email.length < 6 && (
            <SmallText className="errText">Email chưa đúng</SmallText>
          )}

          <button type="submit" disabled={loadingData}>
            {loadingData ? <Loading /> : "Đăng kí"}
          </button>
        </form>

        {error && typeof error === "string" && (
          <SmallText className="errText">{error}</SmallText>
        )}

        <p className="signup">
          Đã có tài khoản?
          <span onClick={() => navigate("/signin")}> Đăng nhập</span>
        </p>
      </div>

      <Dialog
        isOpen={showDialog}
        onClose={closeDialog}
        title="Đăng kí thành công"
      >
        <p>Tài khoảng đăng nhập của bạn là: {userName}</p>
        <p>Mật khẩu của bạn là: {password}</p>
        <p>Email để khôi phục tài khoản: {email}</p>
        <p>Vui lòng lưu lại thông tin tài khoản để sử dụng sau này.</p>
        <p>Trang sẽ tự chuyển trong 5 giây...</p>
      </Dialog>
    </Wrapper>
  );
}
