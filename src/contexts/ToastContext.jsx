import { createContext, useState } from "react";
import styled, { keyframes } from "styled-components";

const ToastContext = createContext();

const slideIn = keyframes`
  from { transform: translateX(100%); opacity: 0; }
  to   { transform: translateX(0);    opacity: 1; }
`;

const slideOut = keyframes`
  from { transform: translateX(0);    opacity: 1; }
  to   { transform: translateX(100%); opacity: 0; }
`;

const ToastWrapper = styled.div`
  position: fixed;
  bottom: 20px;
  right: 20px;
  z-index: 9999;
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

const ToastItem = styled.div`
  min-width: 280px;
  max-width: 380px;
  padding: 14px 20px;
  border-radius: 10px;
  color: white;
  font-size: 15px;
  font-weight: 500;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
  animation: ${(p) => (p.$leaving ? slideOut : slideIn)} 0.3s ease forwards;

  background-color: ${(p) =>
    p.$type === "success"
      ? "#2e7d32"
      : p.$type === "error"
        ? "#c62828"
        : p.$type === "warning"
          ? "#f57c00"
          : "#176782"}; /* info */
`;

function ToastProvider({ children }) {
  const [toasts, setToasts] = useState([]);

  const showToast = (message, type = "info", duration = 5000) => {
    const id = Date.now();

    setToasts((prev) => [...prev, { id, message, type, leaving: false }]);

    setTimeout(() => {
      setToasts((prev) =>
        prev.map((t) => (t.id === id ? { ...t, leaving: true } : t)),
      );
    }, duration - 300);

    setTimeout(() => {
      setToasts((prev) => prev.filter((t) => t.id !== id));
    }, duration);
  };

  const toast = {
    success: (message) => showToast(message, "success"),
    error: (message) => showToast(message, "error"),
    warning: (message) => showToast(message, "warning"),
    info: (message) => showToast(message, "info"),
  };

  return (
    <ToastContext.Provider value={{ toast }}>
      {children}
      <ToastWrapper>
        {toasts.map((t) => (
          <ToastItem key={t.id} $type={t.type} $leaving={t.leaving}>
            {t.message}
          </ToastItem>
        ))}
      </ToastWrapper>
    </ToastContext.Provider>
  );
}

export { ToastContext, ToastProvider };

// cách sử dụng
// toast.success("Thêm danh mục thành công!");
// toast.error("Đã xảy ra lỗi!");
// toast.warning("Cảnh báo!");
// toast.info("Thông tin!");
