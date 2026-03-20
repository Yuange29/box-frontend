import styled from "styled-components";
import { useContext } from "react";

import { LoadingContext } from "../../contexts/LoadingContext";
import { ConfirmContext } from "../../contexts/ConfirmContext";
import { ToastContext } from "../../contexts/ToastContext";
import { AuthContext } from "../../contexts/AuthContext";
import { ThemeContext } from "../../contexts/ThemeContext";

import { Text } from "../ui/Typography";
import { Button } from "../ui/Button";

export default function Setting() {
  const { logoutUser } = useContext(AuthContext);
  const { confirm } = useContext(ConfirmContext);
  const { setLoadingData } = useContext(LoadingContext);
  const { toast } = useContext(ToastContext);
  const { isLightTheme, toggleTheme } = useContext(ThemeContext);

  const handleLogout = async () => {
    const ok = await confirm({
      title: "Đăng xuất",
      message: "Bạn chắc chắn muốn đăng xuất chứ?",
      danger: true,
    });

    if (!ok) return;

    try {
      setLoadingData(true);
      await logoutUser();
      toast.success("Đăng xuất thành công");
    } catch (error) {
      toast.error("Không thể đăng xuất!");
      console.log("Lỗi: ", error);
    } finally {
      setLoadingData(false);
    }
  };

  return (
    <SettingBox>
      <div className="box">
        <Text>Giao diện: </Text>
        <Button onClick={toggleTheme}>{isLightTheme ? "Tối" : "Sáng"}</Button>
      </div>
      <div className="box">
        <Text>Đăng xuất: </Text>
        <Button onClick={handleLogout}>Đăng xuất</Button>
      </div>
    </SettingBox>
  );
}

const SettingBox = styled.div`
  margin: 0 auto;
  border-top: 1px solid var(--border-primary);
  padding: 16px;
  width: calc(100% - 200px);

  .box {
    display: flex;
    align-items: center;
    justify-content: space-between;
    text-indent: 20px;
    margin-top: 10px;
    border-top: 1px solid var(--border-primary);
  }

  @media (max-width: 768px) {
    width: 90%;
  }
`;
