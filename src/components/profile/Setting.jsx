import styled from "styled-components";
import { useContext } from "react";

import { Text } from "../ui/Typography";

import { LoadingContext } from "../../contexts/LoadingContext";
import { ConfirmContext } from "../../contexts/ConfirmContext";
import { ToastContext } from "../../contexts/ToastContext";
import { AuthContext } from "../../contexts/AuthContext";

const SettingBox = styled.div`
  margin: 0 auto;
  border-radius: 16px;
  border: 1px solid var(--border-primary);
  width: calc(100% - 200px);

  .bar {
    display: flex;
    align-items: center;
    justify-content: space-between;
    text-indent: 20px;
  }

  .btn {
    margin-right: 20px;
    padding: 6px 8px;
    border: 0;
    border-radius: 8px;
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
      <div className="bar">
        <Text>Đăng xuất</Text>
        <button className="btn" onClick={handleLogout}>
          ok
        </button>
      </div>
    </SettingBox>
  );
}
