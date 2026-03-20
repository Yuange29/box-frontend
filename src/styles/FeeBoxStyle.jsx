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
  display: grid;
  grid-template-columns: 1fr 1fr auto auto;
  align-items: center;
  gap: 0.5em;
  padding: 8px 12px;
  border-radius: 12px;
  background: var(--bg-card);
  border: 1px solid var(--border-primary);
  box-sizing: border-box;
  transition: all 0.2s ease-in-out;
  user-select: none;

  @media (hover: hover) and (pointer: fine) {
    &:hover {
      border-color: var(--border-hover);
      background-color: #ebebebf9;
      transform: translateY(-2px);
    }
  }

  &:active {
    scale: 0.98;
    background: var(--bg-section);
  }

  .title {
    font-size: 15px;
    font-weight: 600;
    text-indent: 10px;
    color: var(--text-primary);
    margin: 0;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  }

  .price {
    font-size: 14px;
    font-weight: 700;
    color: var(--success);
    padding: 4px 10px;
    border-radius: 8px;
    white-space: nowrap;
  }

  button {
    width: 38px;
    height: 38px;
    border: none;
    border-radius: 10px;
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 14px;
    transition: all 0.2s ease;
    outline: none;
    -webkit-tap-highlight-color: transparent;

    @media (hover: hover) and (pointer: fine) {
      &:hover {
        transform: translateY(-3px);
        box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
      }
    }

    &:active {
      transform: scale(0.9);
      opacity: 0.7;
    }
  }

  .more {
    background: var(--bg-section);
    color: var(--text-secondary);
    border: 1px solid var(--border-primary);

    @media (hover: hover) and (pointer: fine) {
      &:hover {
        background: var(--btn-primary);
        color: var(--btn-primary-text);
      }
    }
  }

  .delete {
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
    gap: 4px;
    padding: 4px 8px;

    .price {
      font-size: 13px;
      padding: 2px 8px;
    }

    button {
      width: 34px;
      height: 34px;
    }

    &:active {
      transform: scale(0.97);
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
