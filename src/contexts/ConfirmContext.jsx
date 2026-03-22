import { createContext, useState } from "react";
import styled, { keyframes } from "styled-components";

const ConfirmContext = createContext();

const fadeIn = keyframes`
  from { opacity: 0; }
  to   { opacity: 1; }
`;

const scaleIn = keyframes`
  from { transform: scale(0.95) translateY(10px); opacity: 0; }
  to   { transform: scale(1) translateY(0); opacity: 1; }
`;

const Overlay = styled.div`
  position: fixed;
  inset: 0;
  background: rgba(0, 0, 0, 0.4);
  backdrop-filter: blur(4px); /* Làm mờ hậu cảnh tạo chiều sâu */
  z-index: 9998;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 20px;
  animation: ${fadeIn} 0.25s ease-out;
`;

const Dialog = styled.div`
  background: var(--bg-card);
  border: 1px solid var(--border-primary);
  border-radius: 20px;
  padding: 28px;
  width: 100%;
  max-width: 400px;
  display: flex;
  flex-direction: column;
  gap: 16px;
  box-shadow: 0 20px 40px rgba(0, 0, 0, 0.2);
  animation: ${scaleIn} 0.3s cubic-bezier(0.34, 1.56, 0.64, 1);
  box-sizing: border-box;

  @media (max-width: 480px) {
    padding: 20px;
    border-radius: 16px;
  }
`;

const Title = styled.h3`
  font-size: 20px;
  font-weight: 700;
  color: var(--text-primary);
  margin: 0;
  letter-spacing: -0.5px;
`;

const Message = styled.p`
  font-size: 15px;
  color: var(--text-secondary);
  margin: 0;
  line-height: 1.5;
`;

const ButtonGroup = styled.div`
  display: flex;
  justify-content: flex-end;
  gap: 12px;
  margin-top: 12px;

  @media (max-width: 480px) {
    flex-direction: column-reverse; /* Đảo ngược để nút chính ở trên cùng khi dùng ngón cái */
    gap: 8px;

    button {
      width: 100%;
    }
  }
`;

const CancelBtn = styled.button`
  padding: 12px 20px;
  border-radius: 12px;
  border: 1px solid var(--border-primary);
  background: var(--bg-secondary);
  color: var(--text-primary);
  font-size: 14px;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.2s ease;
  -webkit-tap-highlight-color: transparent;

  @media (hover: hover) and (pointer: fine) {
    &:hover {
      background: var(--bg-hover);
      border-color: var(--border-hover);
    }
  }

  &:active {
    scale: 0.96;
  }
`;

const ConfirmBtn = styled.button`
  padding: 12px 24px;
  border-radius: 12px;
  border: none;
  background: ${(p) => (p.$danger ? "var(--error)" : "var(--btn-primary)")};
  color: ${(p) => (p.$danger ? "#ffffff" : "var(--btn-primary-text)")};
  font-size: 14px;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.2s ease;
  -webkit-tap-highlight-color: transparent;

  @media (hover: hover) and (pointer: fine) {
    &:hover {
      filter: brightness(1.1);
      transform: translateY(-2px);
      box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
    }
  }

  &:active {
    scale: 0.96;
    transform: translateY(0);
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
