import styled from "styled-components";

const FeatureButton = styled.div`
  background-color: var(--btn-setting);
  border-radius: 999px;
  padding: 4px 4px;
  width: 40px;
  z-index: 999;

  #checkbox {
    display: none;
  }

  .toggle {
    position: relative;
    width: 40px;
    height: 40px;
    cursor: pointer;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 10px;
    transition-duration: 0.5s;
  }

  .bars {
    width: 80%;
    height: 4px;
    background-color: var(--text-setting);
    border-radius: 4px;
  }

  #bar2 {
    transition-duration: 0.8s;
  }

  #bar1,
  #bar3 {
    width: 60%;
  }

  #checkbox:checked + .toggle .bars {
    position: absolute;
    transition-duration: 0.5s;
  }

  #checkbox:checked + .toggle #bar2 {
    transform: scaleX(0);
    transition-duration: 0.5s;
  }

  #checkbox:checked + .toggle #bar1 {
    width: 80%;
    transform: rotate(45deg);
    transition-duration: 0.5s;
  }

  #checkbox:checked + .toggle #bar3 {
    width: 80%;
    transform: rotate(-45deg);
    transition-duration: 0.5s;
  }

  #checkbox:checked + .toggle {
    transition-duration: 0.5s;
    transform: rotate(180deg);
  }
`;

const FeatureBar = styled.div`
  position: fixed;
  bottom: 5px;
  left: 0;
  width: calc(100% - 92px);
  background: var(--bg-card);
  border: 1px solid var(--border-primary);
  border-top: 1px solid var(--border-primary);
  border-top-right-radius: 16px;
  border-bottom-right-radius: 16px;
  padding: 4px 6px;
  z-index: 999;
  box-shadow: 0 -8px 32px rgba(0, 0, 0, 0.3);
  overflow-y: auto;

  display: ${({ $isHide }) => ($isHide ? "none" : "flex")};
  justify-content: space-around;
  flex-wrap: wrap;
  gap: 5px;
  visibility: ${({ $isHide }) => ($isHide ? "hidden" : "visible")};
  animation: ${({ $isHide }) => ($isHide ? "slideOut 0.5s" : "slideIn 0.5s")};

  @keyframes slideIn {
    0% {
      opacity: 0;
      transform: translateX(-20px);
    }
    50% {
      opacity: 0.5;
      transform: translateX(-10px);
    }
    100% {
      opacity: 1;
      transform: translateX(0);
    }
  }

  @keyframes slideOut {
    0% {
      opacity: 1;
      transform: translateX(0px);
    }
    50% {
      transform: translateX(-50px);
    }
    100% {
      opacity: 0.5;
      transform: translateX(calc(-100% + 92px));
    }
  }
`;
export { FeatureButton, FeatureBar };
