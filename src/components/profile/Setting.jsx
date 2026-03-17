import styled from "styled-components";
import { useContext } from "react";

import { LoadingContext } from "../../contexts/LoadingContext";
import { ConfirmContext } from "../../contexts/ConfirmContext";
import { ToastContext } from "../../contexts/ToastContext";
import { AuthContext } from "../../contexts/AuthContext";
import { ThemeContext } from "../../contexts/ThemeContext";

import { Text } from "../ui/Typography";

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
        <button className="btn" onClick={toggleTheme}>
          {isLightTheme ? "Giao diện tối" : "Giao diện sáng"}
        </button>
      </div>
      <div className="box">
        <Text>Đăng xuất: </Text>
        <button className="btn" onClick={handleLogout}>
          Đăng xuất
        </button>
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

  .btn {
    width: 150px;
    margin-right: 20px;
    padding: 8px 14px;
    font-size: 16px;
    color: var(--text-setting);
    border-radius: 12px;
    border: 1px solid var(--btn-primary);
    font-weight: 600px;
    letter-spacing: 0.1px;
    background-color: var(--btn-setting);
  }

  .btn:hover {
    background-color: var(--nav-bg);
    color: var(--text-primary);
    // box-shadow: 2px 2px 7px 0 var(--btn-primary);
    scale: 1.02;
  }

  .btn:active {
    scale: 0.98;
  }

  @media (max-width: 768px) {
    width: 90%;
  }
`;
