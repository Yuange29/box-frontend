import { useContext } from "react";
import styled from "styled-components";
import Loading from "./Loading";
import { AuthContext } from "../../Contexts/AuthContext";

const Overlay = styled.div`
  position: fixed;
  inset: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  background: rgba(0, 0, 0, 0.45);
  z-index: 3000;
`;

const Panel = styled.div`
  background: rgba(0, 0, 0, 0.7);
  padding: 18px 24px;
  border-radius: 10px;
  display: flex;
  align-items: center;
  gap: 12px;
  color: #fff;
  font-weight: 600;
`;

export default function LoadingScreen() {
  const { loadData } = useContext(AuthContext) || {};

  if (!loadData) return null;

  return (
    <Overlay>
      <Panel>
        <Loading />
        <span>Đang tải...</span>
      </Panel>
    </Overlay>
  );
}
