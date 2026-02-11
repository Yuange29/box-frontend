import Wrapper from "../../styles/FormWrapper";
import { useState } from "react";
import { SmallText } from "../ui/Typography";
import Dialog from "../ui/Dialog";
import Loading from "../ui/Loading";

export default function FogotPasswordForm() {
  const [userName, setUserName] = useState("");
  const [identifier, setIdentifier] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [isOpenDialog, setIsOpenDialog] = useState(false);
  const [error, setError] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);

    if (userName.length < 6 || identifier.length < 6) {
      setError(true);
      setIsLoading(false);
      return;
    }
    try {
      // chưa xác nhận logic
      setIsOpenDialog(true);
    } catch (err) {
      setError("Không tìm thấy tài khoảng", err);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <Wrapper>
      <div className="form-container">
        <h1 className="title">Quên mật khẩu</h1>

        <form className="form" onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="Nhập tên tài khoản"
            value={userName}
            onChange={(e) => setUserName(e.target.value)}
          />
          {error && userName.length < 6 && (
            <SmallText className="errText">
              Tên tài khoản phải có ít nhất 6 ký tự
            </SmallText>
          )}
          <input
            type="text"
            placeholder="Nhập email đã đăng ký"
            value={identifier}
            onChange={(e) => setIdentifier(e.target.value)}
          />
          {error && identifier.length < 6 && (
            <SmallText className="errText">
              Email phải có ít nhất 6 ký tự
            </SmallText>
          )}

          <button type="submit" className="btn" disabled={isLoading}>
            {isLoading ? <Loading /> : "Gửi yêu cầu"}
          </button>
        </form>

        <Dialog
          isOpen={isOpenDialog}
          onClose={() => setIsOpenDialog(false)}
          title={"Vui lòng check mail"}
        >
          Vui lòng kiểm tra email để lấy mật khẩu
        </Dialog>
      </div>
    </Wrapper>
  );
}
