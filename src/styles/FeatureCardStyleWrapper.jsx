import styled from "styled-components";

export const StyledWrapper = styled.div`
  display: flex;
  align-items: stretch;
  justify-content: center;
  width: 100%;
  height: 100%;
  box-sizing: border-box;

  .card {
    position: relative;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    width: 100%;
    height: 100%;
    min-height: 300px;
    padding: 32px;
    overflow: hidden;
    border-radius: 20px;
    background: var(--bg-card);

    box-shadow:
      0 4px 6px -1px rgba(0, 0, 0, 0.1),
      0 2px 4px -1px rgba(0, 0, 0, 0.06);
    border: 1px solid var(--border-primary);
    box-sizing: border-box;
    transition: all 0.5s cubic-bezier(0.175, 0.885, 0.32, 1.275);
    cursor: pointer;
  }

  .card:hover {
    transform: translateY(-10px);
    border-color: var(--border-hover);
    box-shadow:
      0 20px 25px -5px rgba(0, 0, 0, 0.1),
      0 10px 10px -5px rgba(0, 0, 0, 0.04);
  }

  .card::after {
    content: "";
    position: absolute;
    top: 0;
    left: -100%;
    width: 100%;
    height: 100%;
    background: linear-gradient(
      90deg,
      transparent,
      rgba(255, 255, 255, 0.05),
      transparent
    );
    transition: 0.5s;
  }

  .card:hover::after {
    left: 100%;
  }

  .icon-section {
    margin-bottom: 24px;
  }

  .icon-wrapper {
    font-size: 32px;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 60px;
    height: 60px;
    background: var(--bg-section);
    border: 1px solid var(--border-primary);
    border-radius: 14px;
    transition: all 0.4s ease;
    color: var(--text-primary);
  }

  .card:hover .icon-wrapper {
    transform: scale(1.1) rotate(5deg);
    background: var(--btn-primary);
    color: var(--btn-primary-text);
    border-color: transparent;
  }

  .content {
    display: flex;
    flex-direction: column;
    gap: 12px;
    width: 100%;
    flex: 1;
  }

  .content .heading {
    font-weight: 700;
    font-size: 22px;
    margin: 0;
    color: var(--text-primary);
    letter-spacing: -0.5px;
  }

  .content .para {
    font-size: 15px;
    line-height: 1.6;
    color: var(--text-secondary);
    margin: 0;
    flex: 1;
    opacity: 0.8;
  }

  .content .btn {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    padding: 12px 24px;
    font-weight: 600;
    font-size: 14px;
    background: var(--btn-setting);
    color: var(--text-setting);
    border: 1px solid var(--border-primary);
    border-radius: 10px;
    transition: all 0.3s ease;
    margin-top: 20px;
    cursor: pointer;
  }

  .content .btn:hover {
    filter: brightness(1.2);
    transform: scale(1.05);
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
  }

  .card::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    height: 3px;
    background: var(--btn-primary);
    transform: scaleX(0);
    transform-origin: left;
    transition: transform 0.4s ease;
  }

  .card:hover::before {
    transform: scaleX(1);
  }
`;

export const MobileWrapper = styled.div`
  width: 100%;
  border-radius: 16px;
  border: 1px solid var(--border-primary);
  background: var(--bg-card);
  overflow: hidden;

  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.04);
  transition:
    transform 0.2s ease,
    box-shadow 0.2s ease;

  &:active {
    transform: scale(0.98);
    background: var(--bg-hover);
    border-color: var(--border-hover);
  }

  .card {
    padding: 16px;
    display: flex;
    flex-direction: column;
    gap: 12px;
  }

  .icon-wrapper {
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 100%;

    i {
      font-size: 22px;
      color: var(--text-primary);
      background: var(--bg-section);
      width: 40px;
      height: 40px;
      display: flex;
      align-items: center;
      justify-content: center;
      border-radius: 10px;
    }

    .heading {
      flex: 1;
      font-size: 16px;
      font-weight: 700;
      color: var(--text-primary);
      margin: 0 12px;

      white-space: nowrap;
      overflow: hidden;
      text-overflow: ellipsis;
    }

    .btn {
      background: var(--btn-setting);
      border: 1px solid var(--border-primary);
      border-radius: 8px;
      color: var(--text-setting);
      min-width: 44px;
      height: 36px;
      display: flex;
      align-items: center;
      justify-content: center;
      font-size: 18px;
      font-weight: bold;
      transition: all 0.2s;

      @media (hover: hover) {
        &:hover {
          filter: brightness(1.2);
        }
      }

      &:active {
        opacity: 0.8;
        transform: scale(0.9);
      }
    }
  }

  .content {
    .para {
      margin: 0;
      font-size: 14px;
      color: var(--text-secondary);
      line-height: 1.5;
      padding-top: 12px;
      border-top: 1px solid var(--border-primary);
      opacity: 0.9;
    }
  }
`;
