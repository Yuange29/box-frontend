import { useNavigate, useLocation } from "react-router-dom";
import { useEffect, useState } from "react";

import {
  StyledWrapper,
  MobileWrapper,
} from "../../styles/FeatureCardStyleWrapper";

const FeatureCard = ({ title, desc, direct, icon }) => {
  const navigate = useNavigate();
  const location = useLocation();
  const [isMobile, setIsMobile] = useState(window.innerWidth < 420);

  useEffect(() => {
    const hash = location.hash.replace("#", "");
    if (!hash) return;

    const timer = setTimeout(() => {
      const element = document.getElementById(hash);
      if (!element) return;

      element.scrollIntoView({ behavior: "smooth", block: "start" });
      element.style.transition = "all 0.6s cubic-bezier(0.34, 1.56, 0.64, 1)";
      element.style.boxShadow = "0 0 20px rgba(248, 155, 41, 0.6)";

      setTimeout(() => {
        element.style.boxShadow = "";
      }, 1500);
    }, 300);

    return () => clearTimeout(timer);
  }, [location]);

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 420);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const handleReadMore = () => {
    if (!direct) return;

    const [path, anchor] = direct.split("#");

    if (path && path !== location.pathname) {
      navigate(path + "#" + (anchor || ""));
    } else if (anchor) {
      const element = document.getElementById(anchor);
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    }
  };

  if (isMobile) {
    return (
      <MobileWrapper>
        <div className="card">
          <div className="icon-wrapper">
            <i className={icon || "fa-solid fa-box"} />
            <h3 className="heading">{title || "Feature"}</h3>
            <button className="btn" onClick={handleReadMore}>
              →
            </button>
          </div>
          <div className="content">
            <p className="para">{desc || "Chưa có mô tả"}</p>
          </div>
        </div>
      </MobileWrapper>
    );
  }

  return (
    <StyledWrapper>
      <div className="card">
        <div className="icon-section">
          <div className="icon-wrapper">
            <i className={icon || "fa-solid fa-box"}></i>
          </div>
        </div>
        <div className="content">
          <h3 className="heading">{title || "Feature"}</h3>
          <p className="para">{desc || "Chưa có mô tả"}</p>
          <button className="btn" onClick={handleReadMore}>
            →
          </button>
        </div>
      </div>
    </StyledWrapper>
  );
};

export default FeatureCard;
