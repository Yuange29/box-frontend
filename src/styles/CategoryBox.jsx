import styled from "styled-components";

const BoxContainer = styled.div`
  width: 100%;
  box-sizing: border-box;

  .inf {
    color: var(--text-muted);
    font-size: 16px;
    text-align: center;
    margin-top: 40px;
  }

  @media (max-width: 768px) {
    padding: 4px 8px;
  }
`;

const Child = styled.div`
  box-sizing: border-box;
  width: 75%;
  margin: 8px auto;
  display: grid;
  grid-template-columns: 1fr auto auto;
  gap: 12px;
  align-items: center;
  padding: 10px 16px;
  background: var(--bg-card);
  border: 1px solid var(--border-primary);
  border-radius: 12px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.05);
  transition: all 0.2s cubic-bezier(0.4, 0, 0.2, 1);
  user-select: none;
  -webkit-tap-highlight-color: transparent;

  @media (hover: hover) and (pointer: fine) {
    &:hover {
      border-color: var(--border-hover);
      transform: translateY(-2px);
      box-shadow: 0 4px 12px rgba(0, 0, 0, 0.08);
    }
  }

  &:active {
    scale: 0.98;
    background: var(--bg-hover);
  }

  .content {
    font-size: 16px;
    font-weight: 600;
    color: var(--text-primary);
    margin: 0;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;

    padding-left: 12px;
  }

  button {
    width: 36px;
    height: 36px;
    border: none;
    border-radius: 10px;
    cursor: pointer;
    font-size: 14px;
    transition: all 0.2s ease;
    display: flex;
    align-items: center;
    justify-content: center;
    outline: none;

    @media (hover: hover) and (pointer: fine) {
      &:hover {
        transform: scale(1.1);
      }
    }

    &:active {
      scale: 0.9;
    }
  }

  .more-btn {
    background: var(--bg-section);
    color: var(--text-secondary);
    border: 1px solid var(--border-primary);

    @media (hover: hover) and (pointer: fine) {
      &:hover {
        background: var(--btn-primary);
        color: var(--btn-primary-text);
        border-color: transparent;
      }
    }
  }

  .delete-btn {
    background: transparent;
    color: var(--error);
    border: 1px solid var(--border-primary);

    @media (hover: hover) and (pointer: fine) {
      &:hover {
        background: rgba(239, 83, 80, 0.1);
        border-color: var(--error);
      }
    }
  }

  @media (max-width: 768px) {
    width: 100%;
    margin: 6px 0;
    padding: 8px 12px;
    gap: 8px;

    .content {
      font-size: 15px;
      padding-left: 4px;
    }

    button {
      width: 32px;
      height: 32px;
    }
  }
`;

const CateInfoWrapper = styled.div`
  width: 380px;
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 1000;
  background: var(--bg-card);
  border: 1px solid var(--border-primary);
  border-radius: 16px;
  padding: 24px;
  display: flex;
  flex-direction: column;
  box-shadow: 0 24px 64px rgba(0, 0, 0, 0.3);

  .header {
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-bottom: 16px;

    .title {
      margin: 0;
      font-size: 18px;
      font-weight: 600;
      color: var(--text-primary);
    }

    .close-btn {
      width: 32px;
      height: 32px;
      border-radius: 8px;
      border: 1px solid var(--border-primary);
      background: var(--bg-hover);
      color: var(--text-muted);
      cursor: pointer;
      display: flex;
      align-items: center;
      justify-content: center;
      transition: all 0.2s;

      &:hover {
        border-color: var(--border-hover);
        color: var(--text-primary);
      }
    }
  }

  .divider {
    height: 1px;
    background: var(--border-primary);
    margin-bottom: 16px;
  }

  .row {
    display: flex;
    justify-content: space-between;
    align-items: flex-start;
    padding: 10px 0;
    border-bottom: 1px solid var(--border-primary);

    &:last-child {
      border-bottom: none;
    }

    .label {
      font-size: 13px;
      color: var(--text-muted);
      display: flex;
      align-items: center;
      gap: 6px;

      i {
        font-size: 12px;
      }
    }

    .value {
      font-size: 14px;
      font-weight: 500;
      color: var(--text-secondary);
      text-align: right;
      max-width: 60%;
    }
  }

  @media (max-width: 420px) {
    width: calc(100% - 3em);
    padding: 8px 16px;
  }
`;

const Form = styled.form`
  width: 450px;
  box-sizing: border-box;
  margin: 30px auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 12px;
  padding: 32px;
  background: var(--bg-hover);
  border: 1px solid var(--border-primary);
  border-radius: 16px;

  @media (max-width: 420px) {
    width: calc(100% - 3em);
    padding: 20px;
  }
`;

const InputWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 6px;
`;

const Label = styled.label`
  font-size: 18px;
  font-weight: 600;
  color: var(--text-secondary);
  @media (max-width: 768px) {
    font-size: 16px;
  }
`;

const Input = styled.input`
  width: 100%;
  padding: 12px 16px;
  font-size: 16px;
  border: 1px solid var(--border-primary);
  border-radius: 8px;
  background: var(--bg-secondary);
  color: var(--text-primary);
  box-sizing: border-box;
  transition:
    border-color 0.2s ease,
    box-shadow 0.2s ease;

  &::placeholder {
    color: var(--text-muted);
  }

  &:focus {
    outline: 0;
    border-color: var(--border-hover);
    box-shadow: 0 0 0 2px rgba(255, 255, 255, 0.05);
  }
`;

export {
  BoxContainer,
  CateInfoWrapper,
  Child,
  Form,
  Input,
  InputWrapper,
  Label,
};
