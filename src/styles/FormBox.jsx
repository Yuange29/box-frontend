import styled from "styled-components";

export const FormBox = styled.div`
  .form {
    width: 360px;
    margin: 2rem auto;
    border: 1px solid var(--border-primary);
    border-radius: 16px;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    gap: 0.5rem;
    background-color: var(--bg-card);
    padding: 1.5rem;
    box-sizing: border-box;
  }

  label {
    margin-top: 0.5rem;
    font-size: 1rem;
    align-self: flex-start;
    color: var(--text-secondary);
    font-weight: bold;
    width: 80%;
  }

  input,
  textarea,
  select {
    width: 80%;
    height: 40px;
    font-size: 16px;
    text-indent: 10px;
    color: var(--text-primary);
    background: var(--bg-secondary);
    border: 1.5px solid var(--btn-setting);
    border-radius: 8px;
    box-sizing: border-box;
    transition:
      border-color 0.2s ease,
      box-shadow 0.2s ease;
  }

  input::placeholder,
  textarea::placeholder {
    color: var(--text-muted);
  }

  textarea {
    height: 80px;
    resize: none;
    padding: 10px;
    text-indent: 0;
  }

  input:hover,
  textarea:hover,
  select:hover {
    border-color: var(--border-hover);
    box-shadow: 0 4px 12px rgba(255, 255, 255, 0.05);
  }

  input:focus,
  textarea:focus,
  select:focus {
    outline: 0;
    border-color: var(--border-hover);
    box-shadow: 0 0 0 2px rgba(255, 255, 255, 0.05);
  }

  .btn {
    width: 200px;
    height: 40px;
    color: var(--text-setting);
    font-size: 16px;
    font-weight: 400;
    letter-spacing: 2px;
    margin-top: 16px;
    padding: 6px 10px;
    border: 0;
    border-radius: 8px;
    background-color: var(--btn-setting);
  }

  @media (max-width: 768px) {
    .form {
      padding: 1rem;
      gap: 0.3rem;
      width: 100%;
      border-radius: 8px;
    }

    label {
      font-size: 0.9rem;
      width: 90%;
    }

    input,
    textarea,
    select {
      width: 100%;
      height: 44px;
      font-size: 16px;
    }

    option {
      height: 30px;
      font-size: 16px;
    }

    textarea {
      height: 70px;
    }
  }
`;
