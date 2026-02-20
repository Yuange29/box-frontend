import styled from "styled-components";

const Wrapper = styled.div`
  --primary: #0f766e;
  --primary-hover: #115e59;
  --primary-soft: #ccfbf1;

  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background: #f0fdfa;
  font-family: system-ui, sans-serif;

  .form-container {
    width: 360px;
    background: #fff;
    padding: 32px;
    border-radius: 12px;
    box-shadow: 0 10px 30px rgba(0, 0, 0, 0.08);
  }

  .title {
    text-align: center;
    font-size: 24px;
    font-weight: 700;
    margin-bottom: 24px;
    color: var(--text-main);
  }

  .form {
    display: flex;
    flex-direction: column;
    gap: 16px;
  }

  input {
    padding: 12px 14px;
    border-radius: 8px;
    border: 1px solid #d1d5db;
    font-size: 14px;
  }

  input:focus {
    outline: none;
    border-color: var(--primary);
    box-shadow: 0 0 0 2px var(--primary-soft);
  }

  .forgot {
    cursor: pointer;
    align-self: flex-end;
    font-size: 12px;
    color: #6b7280;
    text-decoration: none;
  }

  .forgot:hover {
    color: var(--primary);
  }

  button {
    margin-top: 8px;
    padding: 12px;
    border: none;
    border-radius: 8px;
    background: var(--primary);
    color: #fff;
    font-weight: 600;
    cursor: pointer;
  }

  button:hover {
    background: var(--primary-hover);
  }

  .signup {
    margin-top: 20px;
    font-size: 13px;
    text-align: center;
    color: #6b7280;
  }

  .signup span {
    color: var(--primary);
    font-weight: 600;
    cursor: pointer;
  }

  .errText {
    color: red;
    font-size: 10px;
    font-weight: 600;
    margin: 0;
  }
`;

export default Wrapper;
