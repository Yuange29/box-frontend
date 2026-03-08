import styled from "styled-components";
import { useContext } from "react";

import { Text } from "../ui/Typography";

import { LoadingContext } from "../../contexts/LoadingContext";
import { ConfirmContext } from "../../contexts/ConfirmContext";
import { ToastContext } from "../../contexts/ToastContext";
import { AuthContext } from "../../contexts/AuthContext";

const SettingBox = styled.div`
  margin: 0 auto;

  border-top: 1px solid var(--border-primary);
  padding: 16px;
  width: calc(100% - 200px);

  .logout {
    display: flex;
    align-items: center;
    justify-content: center;
    text-indent: 20px;
  }

  .btn {
    margin-right: 20px;
    padding: 12px 24px;
    font-size: 16px;
    border-radius: 12px;
    border: 1px solid var(--btn-primary);
    background-color: var(--btn-primary);
    font-weight: 600px;
    letter-spacing: 2px;
  }

  .btn:hover {
    background-color: var(--nav-bg);
    color: var(--text-primary);
    box-shadow: 2px 2px 7px 0 var(--btn-primary);
  }

  .btn:active {
    scale: 0.98;
  }

  @media (max-width: 768px) {
    width: 90%;
  }
`;

export default function Setting() {
  const { logoutUser } = useContext(AuthContext);
  const { confirm } = useContext(ConfirmContext);
  const { setLoadingData } = useContext(LoadingContext);
  const { toast } = useContext(ToastContext);

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
      <div className="logout">
        <button className="btn" onClick={handleLogout}>
          Đăng xuất
        </button>
      </div>
    </SettingBox>
  );
}
