import styled from "styled-components";

const Form = styled.form`
  width: 450px;
  margin: 0 auto;
  font-size: 16px;
  display: flex;
  flex-direction: column;
  gap: 0.6rem;
  background-color: var(--bg-card);
  padding: 16px 20px;
  border-radius: 12px;
  border: 1px solid var(--border-primary);

  @media (max-width: 768px) {
    width: calc(100% - 2rem);
    font-size: 13px;
    padding: 14px;
    gap: 0.5rem;
  }
`;

const Label = styled.label`
  display: block;
  margin-bottom: 2px;
  font-weight: 600;
  font-size: 16px;
  color: var(--text-primary);

  @media (max-width: 768px) {
    font-size: 13px;
  }
`;

const SharedInputStyles = `
  width: calc(100% - 3em);
  box-sizing: border-box;
  margin: 0 auto;
  padding: 6px 12px;
  font-size: 16px;
  font-family: inherit;
  background-color: var(--bg-secondary);
  color: var(--text-primary);
  border: 1px solid var(--border-primary);
  border-radius: 6px;
  outline: none;
  transition: all 0.2s ease-in-out;

  &::placeholder {
    color: var(--text-muted);
    font-size: 16px;
  }

  &:focus {
    border-color: var(--btn-primary);
    box-shadow: 0 0 0 2px var(--nav-border);
  }

  &:disabled {
    background-color: var(--bg-section);
    cursor: not-allowed;
    opacity: 0.7;
  }
    @media (max-width: 768px) {
      width: 90%;
    }
`;

const Input = styled.input`
  ${SharedInputStyles}
  height: 38px;
`;

const TextArea = styled.textarea`
  ${SharedInputStyles}
  resize: none;
  min-height: 60px;
  line-height: 1.4;
  padding: 8px 12px;
`;

export { Form, Input, Label, TextArea };
