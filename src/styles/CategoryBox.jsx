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
  width: 70%;
  margin: 10px auto;
  display: grid;
  grid-template-columns: 1fr auto auto;
  gap: 0 12px;
  align-items: center;
  padding: 5px;
  background: var(--bg-card);
  border-bottom: 1px solid var(--border-primary);
  border-radius: 8px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.2);
  transition: border-color 0.2s ease;

  &:hover {
    border-color: var(--border-hover);
    scale: 1.01;
  }

  .content {
    font-size: 18px;
    font-weight: 500;
    color: var(--text-primary);
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  }

  button {
    width: 40px;
    height: 40px;
    padding: 8px 16px;
    border: none;
    border-radius: 8px;
    cursor: pointer;
    font-size: 14px;
    transition: all 0.2s ease;
    display: flex;
    align-items: center;
    justify-content: center;

    &:hover {
      box-shadow: 0 4px 12px rgba(0, 0, 0, 0.3);
      transform: translateY(-2px);
    }

    &:active {
      opacity: 0.8;
      transform: translateY(0);
    }
  }

  .more-btn {
    background: var(--bg-hover);
    color: var(--text-primary);
    border: 1px solid var(--border-primary);
  }

  .delete-btn {
    background: var(--error);
    color: white;
  }

  @media (max-width: 768px) {
    width: 100%;

    .content {
      font-size: 16px;
      margin: 4px 8px 4px 0px;
      padding-left: 10px;
    }

    button {
      width: 30px;
      height: 30px;
    }
  }

  @media (min-width: 768px) {
    .content {
      text-indent: 20px;
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
