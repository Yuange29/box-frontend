import { createContext, useState } from "react";
import styled, { keyframes } from "styled-components";

const ConfirmContext = createContext();

const fadeIn = keyframes`
  from { opacity: 0; }
  to   { opacity: 1; }
`;

const scaleIn = keyframes`
  from { transform: scale(0.8); opacity: 0; }
  to   { transform: scale(1);   opacity: 1; }
`;

const Overlay = styled.div`
  position: fixed;
  inset: 0;
  background: rgba(0, 0, 0, 0.5);
  z-index: 9998;
  display: flex;
  align-items: center;
  justify-content: center;
  animation: ${fadeIn} 0.2s ease;
`;

const Dialog = styled.div`
  background: #1a1a2e;
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 16px;
  padding: 32px;
  min-width: 320px;
  max-width: 420px;
  display: flex;
  flex-direction: column;
  gap: 16px;
  box-shadow: 0 8px 32px rgba(0, 0, 0, 0.4);
  animation: ${scaleIn} 0.2s ease;
`;

const Title = styled.h3`
  font-size: 20px;
  font-weight: 700;
  color: #ffffff;
  margin: 0;
`;

const Message = styled.p`
  font-size: 16px;
  color: #b0b0b0;
  margin: 0;
  line-height: 1.6;
`;

const ButtonGroup = styled.div`
  display: flex;
  justify-content: flex-end;
  gap: 12px;
  margin-top: 8px;
`;

const CancelBtn = styled.button`
  padding: 10px 20px;
  border-radius: 8px;
  border: 1px solid rgba(255, 255, 255, 0.2);
  background: transparent;
  color: #ffffff;
  font-size: 14px;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.2s ease;

  &:hover {
    background: rgba(255, 255, 255, 0.1);
  }
`;

const ConfirmBtn = styled.button`
  padding: 10px 20px;
  border-radius: 8px;
  border: none;
  background: ${(p) => (p.$danger ? "#c62828" : "#2e7d32")};
  color: white;
  font-size: 14px;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.2s ease;

  &:hover {
    opacity: 0.85;
    transform: translateY(-2px);
  }
`;

function ConfirmProvider({ children }) {
  const [options, setOptions] = useState(null);

  const confirm = ({ title, message, danger = false }) => {
    return new Promise((resolve) => {
      setOptions({ title, message, danger, resolve });
    });
  };

  const handleConfirm = () => {
    options?.resolve(true);
    setOptions(null);
  };

  const handleCancel = () => {
    options?.resolve(false);
    setOptions(null);
  };

  return (
    <ConfirmContext.Provider value={{ confirm }}>
      {children}
      {options && (
        <Overlay onClick={handleCancel}>
          <Dialog onClick={(e) => e.stopPropagation()}>
            <Title>{options.title}</Title>
            <Message>{options.message}</Message>
            <ButtonGroup>
              <CancelBtn onClick={handleCancel}>Hủy</CancelBtn>
              <ConfirmBtn $danger={options.danger} onClick={handleConfirm}>
                Xác nhận
              </ConfirmBtn>
            </ButtonGroup>
          </Dialog>
        </Overlay>
      )}
    </ConfirmContext.Provider>
  );
}

export { ConfirmContext, ConfirmProvider };
