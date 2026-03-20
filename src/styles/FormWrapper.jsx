import styled from "styled-components";

const Wrapper = styled.div`
  height: calc(100vh - 74px);
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: var(--bg-primary);
  padding: 20px;
  box-sizing: border-box;

  .form-container {
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
  }

  .title {
    font-size: 32px;
    font-weight: 800;
    color: var(--text-primary);
    margin-bottom: 24px;
    letter-spacing: -1px;
    text-align: center;
  }

  .forgot {
    cursor: pointer;
    align-self: flex-end;
    margin: 12px 8px 0 0;
    margin-bottom: 12px;
    font-size: 14px;
    font-weight: 500;
    color: var(--text-muted);
    text-decoration: none;
    transition: color 0.2s ease;
  }

  .forgot:hover {
    color: var(--text-primary);
    text-decoration: underline;
  }

  .signup {
    margin-top: 24px;
    font-size: 14px;
    text-align: center;
    color: var(--text-muted);
    line-height: 1.5;
  }

  .signup span {
    color: var(--btn-primary);
    font-weight: 700;
    cursor: pointer;
    margin-left: 4px;
    transition: all 0.2s ease;

    &:hover {
      text-decoration: underline;
      filter: brightness(1.2);
    }
  }

  @media (max-width: 768px) {
    height: auto;
    min-height: calc(100vh - 74px);
    padding: 40px 20px;

    .title {
      font-size: 20px;
      margin-bottom: 20px;
    }

    .form-container {
      max-width: 350px;
    }

    .signup {
      font-size: 13px;
      margin-top: 0px;
    }
  }
`;

export default Wrapper;
