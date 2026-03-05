import styled from "styled-components";

const Wrapper = styled.div`
  height: calc(100vh - 74px);
  display: flex;
  justify-content: center;
  align-items: center;
  background: var(--bg-primary);
  font-family: system-ui, sans-serif;

  .form-container {
    background: var(--bg-card);
    padding: 32px;
    border-radius: 12px;
    box-shadow: 0 10px 30px rgba(0, 0, 0, 0.3);
    border: 1px solid var(--border-primary);
  }

  .title {
    text-align: center;
    font-size: 24px;
    font-weight: 700;
    margin-bottom: 24px;
    color: var(--text-primary);
  }

  .form {
    display: flex;
    flex-direction: column;
    gap: 16px;
  }

  input {
    padding: 12px 14px;
    border-radius: 8px;
    border: 1px solid var(--border-primary);
    font-size: 14px;
    background: var(--bg-secondary);
    color: var(--text-primary);
  }

  input::placeholder {
    color: var(--text-muted);
  }

  input:focus {
    outline: none;
    border-color: var(--border-hover);
    box-shadow: 0 0 0 2px rgba(255, 255, 255, 0.05);
  }

  .forgot {
    cursor: pointer;
    align-self: flex-end;
    font-size: 12px;
    color: var(--text-muted);
    text-decoration: none;
  }

  .forgot:hover {
    color: var(--text-secondary);
  }

  button {
    margin-top: 8px;
    padding: 12px;
    border: 1px solid var(--border-primary);
    border-radius: 8px;
    background: var(--btn-primary);
    color: var(--btn-primary-text);
    font-weight: 600;
    cursor: pointer;
    transition: all 0.2s ease;
  }

  button:hover {
    background: var(--bg-hover);
    color: var(--text-primary);
    border-color: var(--border-hover);
  }

  .signup {
    margin-top: 20px;
    font-size: 13px;
    text-align: center;
    color: var(--text-muted);
  }

  .signup span {
    color: var(--text-secondary);
    font-weight: 600;
    cursor: pointer;

    &:hover {
      color: var(--text-primary);
    }
  }

  .errText {
    color: var(--error);
    font-size: 10px;
    font-weight: 600;
    margin: 0;
  }

  @media (max-width: 768px) {
    .form-container {
      padding: 16px 24px;
    }
    .title {
      margin: 10px auto;
    }

    .form {
      gap: 8px;
    }

    input,
    button {
      padding: 6px 8px;
      border-radius: 8px;
    }
    .forgot {
      margin: 0;
    }

    button {
      width: 150px;
      align-self: center;
    }

    .signup {
      font-size: 12px;
    }
  }

  @media (min-width: 768px) {
    .form-container {
      width: 360px;
    }
  }
`;

export default Wrapper;
