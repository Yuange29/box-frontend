import styled from "styled-components";

const BoxWrapper = styled.div`
  width: 90%;
  margin: 0 auto;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  gap: 12px;

  @media (max-width: 768px) {
    width: 100%;
  }
`;

const FeeItem = styled.div`
  width: 100%;
  position: relative;
  display: grid;
  grid-template-columns: 1fr 1fr auto auto;
  align-items: center;
  gap: 12px;
  padding: 8px 16px;
  border-radius: 8px;
  background: var(--bg-card);
  border-bottom: 1px solid var(--border-primary);
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.2);
  box-sizing: border-box;
  transition: border-color 0.2s ease;

  &:hover {
    border-color: var(--border-hover);
    transform: scale(1.01);
  }

  .title {
    font-size: 16px;
    font-weight: 500;
    color: var(--text-primary);
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  }

  .price {
    font-size: 16px;
    font-weight: bold;
    color: var(--text-secondary);
    white-space: nowrap;
  }

  button {
    width: 40px;
    height: 40px;
    border: none;
    border-radius: 8px;
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;
    transition: all 0.2s ease;

    &:hover {
      transform: translateY(-2px);
      box-shadow: 0 4px 12px rgba(0, 0, 0, 0.3);
    }

    &:active {
      opacity: 0.8;
      transform: translateY(0);
    }
  }

  .more {
    background: var(--bg-hover);
    color: var(--text-primary);
    border: 1px solid var(--border-primary);
  }

  .delete {
    background: var(--error);
    color: white;
  }

  @media (max-width: 768px) {
    gap: 8px;
    padding: 4px 8px 4px 12px;

    .title,
    .price {
      font-size: 16px;
      margin: 4px 8px;
    }

    button {
      width: 30px;
      height: 30px;
    }
  }
`;

const InfoWrapper = styled.div`
  width: 420px;
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 1000;
  background: var(--bg-card);
  border: 1px solid var(--border-primary);
  border-radius: 16px;
  padding: 28px 24px;
  display: flex;
  flex-direction: column;
  box-shadow: 0 24px 64px rgba(0, 0, 0, 0.3);

  .info-header {
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-bottom: 16px;

    .info-title {
      margin: 0;
      font-size: 28px;
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

  .price-tag {
    font-size: 20px;
    font-weight: 600;
    text-align: center;
    color: var(--text-primary);
  }

  .divider {
    height: 1px;
    background: var(--border-primary);
    margin-bottom: 16px;
  }

  .info-row {
    display: flex;
    justify-content: space-between;
    align-items: flex-start;
    padding: 10px 0;
    border-bottom: 1px solid var(--border-primary);

    &:last-child {
      border-bottom: none;
    }

    .info-label {
      font-size: 13px;
      color: var(--text-muted);
      display: flex;
      align-items: center;
      gap: 6px;

      i {
        font-size: 12px;
      }
    }

    .info-value {
      font-size: 14px;
      font-weight: 500;
      color: var(--text-secondary);
      text-align: right;
      max-width: 60%;
    }
  }

  @media (max-width: 420px) {
    width: calc(100% - 4em);
    padding: 8px 16px;
  }
`;

const Overlay = styled.div`
  position: fixed;
  inset: 0;
  background: rgba(0, 0, 0, 0.5);
  backdrop-filter: blur(4px);
  z-index: 999;
`;
export { BoxWrapper, FeeItem, InfoWrapper, Overlay };
