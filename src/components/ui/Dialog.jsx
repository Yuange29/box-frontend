import styled, { keyframes } from "styled-components";
import { Heading } from "./Typography";
import { Button } from "./Button";

const fadeIn = keyframes`
  from {
    opacity: 0;
    transform: scale(0.95);
  }
  to {
    opacity: 1;
    transform: scale(1);
  }
`;

const Overlay = styled.div`
  position: fixed;
  inset: 0;
  background: rgba(0, 0, 0, 0.4);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 1000;
`;

const DialogBox = styled.div`
  background: #fff;
  width: 400px;
  max-width: 90%;
  border-radius: 8px;
  animation: ${fadeIn} 0.2s ease;
`;

const Header = styled.div`
  padding: 12px 16px;
  border-bottom: 1px solid #eee;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const CloseButton = styled.button`
  background: #fff;
  border: none;
  font-size: 16px;
  cursor: pointer;
`;

const Content = styled.div`
  padding: 16px;
`;

const Footer = styled.div`
  padding: 12px 16px;
  border-top: 1px solid #eee;
  display: flex;
  justify-content: flex-end;
  gap: 8px;
`;

const Dialog = ({ isOpen, onClose, title, children }) => {
  if (!isOpen) return null;

  return (
    <Overlay onClick={onClose}>
      <DialogBox onClick={(e) => e.stopPropagation()}>
        <Header>
          <Heading>{title}</Heading>
          <CloseButton onClick={onClose}>✕</CloseButton>
        </Header>

        <Content>{children}</Content>

        <Footer>
          <Button $variant="secondary" onClick={onClose}>
            Đóng
          </Button>
        </Footer>
      </DialogBox>
    </Overlay>
  );
};

export default Dialog;
