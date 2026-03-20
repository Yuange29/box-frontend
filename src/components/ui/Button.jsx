import styled from "styled-components";

export const Button = styled.button`
  max-width: 200px;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  box-sizing: border-box;
  min-width: 140px;
  padding: 10px 24px;
  cursor: pointer;
  user-select: none;
  touch-action: manipulation;

  ${(center) =>
    center.$center &&
    `
      margin: 0 auto;`}

  font-size: 15px;
  font-weight: 600;
  letter-spacing: 0.3px;
  color: var(--text-setting);
  text-align: center;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  display: block;

  background-color: var(--btn-setting);
  border: 1px solid var(--btn-primary);
  border-radius: 10px;

  box-shadow:
    0 4px 6px -1px rgba(0, 0, 0, 0.1),
    0 2px 4px -1px rgba(0, 0, 0, 0.06);

  transition: all 0.2s cubic-bezier(0.4, 0, 0.2, 1);
  outline: none;

  @media (hover: hover) and (pointer: fine) {
    &:hover:not(:disabled) {
      opacity: 0.8;
      transform: translateY(-2px);
      box-shadow:
        0 10px 15px -3px rgba(0, 0, 0, 0.1),
        0 4px 6px -2px rgba(0, 0, 0, 0.05);
      border-color: var(--btn-primary-hover, var(--btn-primary));
      filter: brightness(1.1);
    }
  }

  &:active {
    scale: 0.95;
    box-shadow: none;
  }

  &:disabled {
    cursor: not-allowed;
    opacity: 0.5;
    filter: grayscale(1);
    pointer-events: none;
    box-shadow: none;
    transform: none;
    scale: 1;
  }

  &:active:not(:disabled) {
    scale: 0.95;
    box-shadow: inset 0 2px 4px rgba(0, 0, 0, 0.1);
  }
`;
