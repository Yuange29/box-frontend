import { useContext } from "react";
import styled, { keyframes } from "styled-components";
import { LoadingContext } from "../../contexts/LoadingContext";

const fadeIn = keyframes`
  from { opacity: 0; }
  to   { opacity: 1; }
`;

const float = keyframes`
  0%, 100% { transform: translateY(0px); }
  50%       { transform: translateY(-6px); }
`;

const pulse = keyframes`
  0%, 100% { opacity: 1; transform: scale(1); }
  50%       { opacity: 0.4; transform: scale(0.85); }
`;

const Overlay = styled.div`
  position: fixed;
  inset: 0;
  z-index: 3000;
  display: flex;
  align-items: center;
  justify-content: center;
  background: rgba(0, 0, 0, 0.55);
  backdrop-filter: blur(6px);
  -webkit-backdrop-filter: blur(6px);
  animation: ${fadeIn} 0.2s ease;
`;

const Panel = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;
  padding: 36px 48px;
  background: rgba(20, 23, 32, 0.85);
  // border: 1px solid rgba(255, 255, 255, 0.08);
  border-radius: 16px;
  box-shadow: 0 24px 64px rgba(0, 0, 0, 0.5);
  animation: ${float} 3s ease-in-out infinite;
`;

const DotsWrapper = styled.div`
  display: flex;
  gap: 10px;
  align-items: center;
`;

const Dot = styled.span`
  width: 10px;
  height: 10px;
  border-radius: 50%;
  background: #ffffff;
  animation: ${pulse} 1.2s ease-in-out infinite;
  animation-delay: ${({ $delay }) => $delay}s;
`;

const Label = styled.p`
  margin: 0;
  font-size: 14px;
  font-weight: 500;
  letter-spacing: 0.1em;
  text-transform: uppercase;
  color: rgba(255, 255, 255, 0.5);
`;

export default function LoadingScreen() {
  const { loadingData } = useContext(LoadingContext) || {};

  if (!loadingData) return null;

  return (
    <Overlay>
      <Panel>
        <DotsWrapper>
          <Dot $delay={0} />
          <Dot $delay={0.2} />
          <Dot $delay={0.4} />
        </DotsWrapper>
        <Label>Đang tải...</Label>
      </Panel>
    </Overlay>
  );
}
