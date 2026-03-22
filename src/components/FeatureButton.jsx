import styled from "styled-components";
import { useState, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";

import {
  FeatureButton as ClickButton,
  FeatureBar,
} from "../styles/FeatureButton.style";
import { Overlay } from "../styles/FeeBoxStyle";
import { SmallText } from "./ui/Typography";

const Wrapper = styled.div`
  position: fixed;
  bottom: 5px;
  right: 5px;
  z-index: 999;
  display: flex;
  flex-direction: column;
  align-items: flex-end;
`;

const ButtonWrapper = styled.div`
  box-sizing: border-box;
  width: 50px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  padding: 4px;
  overflow: hidden;
`;
const ContentButton = styled.button`
  width: 40px;
  height: 40px;
  font-size: 16px;
  border-radius: 99px;
  margin: 4px;
  border: 0;
  transition:
    transform 0.1s ease,
    box-shadow 0.1s ease;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.25);

  &:active {
    transform: translateY(2px) scale(0.95);
    box-shadow: 0 1px 3px rgba(0, 0, 0, 0.2);
  }
`;

const Desc = styled(SmallText)`
  width: 100%;
  white-space: nowrap;

  text-overflow: hidden;
  display: block;
  display: inline-block;
  animation: marquee 4s linear infinite;

  @keyframes marquee {
    0% {
      transform: translateX(100%);
    }
    100% {
      transform: translateX(-100%);
    }
  }
`;

function ContentChild({ icon, title, direct, hide }) {
  const navigate = useNavigate();
  const location = useLocation();

  const handleReadMore = () => {
    if (!direct) return;

    const [path, anchor] = direct.split("#");

    hide();

    if (path && path !== location.pathname) {
      navigate(path + "#" + (anchor || ""));
    } else if (anchor) {
      const element = document.getElementById(anchor);
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    }
  };

  return (
    <ButtonWrapper>
      <ContentButton onClick={handleReadMore}>
        <i className={icon}></i>
      </ContentButton>
      <Desc>{title}</Desc>
    </ButtonWrapper>
  );
}

export default function FeatureButton({ content }) {
  const [isHide, setIsHide] = useState(true);
  const [screenWidth, setScreenWidth] = useState(window.innerWidth);
  const location = useLocation();

  const HIDDEN_PATHS = ["/signin", "/signup", "/loading"];

  useEffect(() => {
    const handleResize = () => setScreenWidth(window.innerWidth);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  var isHidden = screenWidth > 768 || HIDDEN_PATHS.includes(location.pathname);

  useEffect(() => {
    setIsHide(true);
  }, [location.pathname]);

  if (isHidden) return null;

  return (
    <>
      {!isHide && <Overlay onClick={() => setIsHide(true)} />}
      <Wrapper>
        <FeatureBar $isHide={isHide}>
          {content.map((child) => (
            <ContentChild
              key={child.title}
              {...child}
              hide={() => setIsHide((p) => !p)}
            />
          ))}
        </FeatureBar>
        <ClickButton>
          <input type="checkbox" id="checkbox" readOnly checked={!isHide} />
          <label
            htmlFor="checkbox"
            className="toggle"
            onClick={() => setIsHide((prev) => !prev)}
          >
            <div className="bars" id="bar1"></div>
            <div className="bars" id="bar2"></div>
            <div className="bars" id="bar3"></div>
          </label>
        </ClickButton>
      </Wrapper>
    </>
  );
}
