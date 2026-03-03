import styled, { css } from "styled-components";

const baseStyle = css`
  display: inline-flex;
  align-items: center;
  justify-content: center;

  padding: 10px 20px;
  border-radius: 8px;
  font-size: 16px;
  font-weight: 600;

  cursor: pointer;
  border: none;
  transition: all 0.25s ease;

  &:disabled {
    opacity: 0.6;
    cursor: not-allowed;
  }
`;

export const Button = styled.button`
  ${baseStyle};

  background-color: ${(p) =>
    p.$buttonType === "secondary"
      ? "var(--btn-secondary)"
      : "var(--btn-primary)"};

  color: ${(p) =>
    p.$buttonType === "secondary"
      ? "var(--text-muted)"
      : "var(--btn-primary-text)"};

  border: ${(p) =>
    p.$buttonType === "secondary"
      ? "2px solid var(--btn-secondary-border)"
      : "none"};

  &:hover {
    transform: translateY(-2px);
  }

  &:active {
    transform: scale(0.96);
  }
`;
