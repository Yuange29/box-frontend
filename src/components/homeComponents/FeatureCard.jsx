import styled from "styled-components";
import { useNavigate, useLocation } from "react-router-dom";
import { useEffect } from "react";

const FeatureCard = ({ title, desc, direct, icon }) => {
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash.replace("#", "");
      if (hash) {
        const element = document.getElementById(hash);
        if (element) {
          setTimeout(() => {
            element.scrollIntoView({ behavior: "smooth", block: "start" });

            element.style.transition =
              "all 0.6s cubic-bezier(0.34, 1.56, 0.64, 1)";
            element.style.boxShadow = "0 0 20px rgba(248, 155, 41, 0.6)";
            setTimeout(() => {
              element.style.boxShadow = "";
            }, 1500);
          }, 300);
        }
      }
    };

    window.addEventListener("hashchange", handleHashChange);
    return () => window.removeEventListener("hashchange", handleHashChange);
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

const StyledWrapper = styled.div`
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
    min-height: 280px;
    padding: 32px;
    overflow: hidden;
    border-radius: 12px;
    background: var(--bg-card);
    box-shadow: 0 8px 24px rgba(0, 0, 0, 0.3);
    border: 1px solid var(--border-primary);
    box-sizing: border-box;
    transition: all 0.4s cubic-bezier(0.23, 1, 0.32, 1);
    cursor: pointer;
  }

  .card:hover {
    transform: translateY(-8px);
    box-shadow: 0 16px 32px rgba(255, 255, 255, 0.05);
    border-color: var(--border-hover);
  }

  .icon-section {
    margin-bottom: 16px;
  }

  .icon-wrapper {
    font-size: 40px;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 54px;
    height: 54px;
    background: var(--bg-hover);
    border: 1px solid var(--border-primary);
    border-radius: 10px;
    transition: all 0.4s ease;
  }

  .card:hover .icon-wrapper {
    transform: scale(1.1) rotateZ(10deg);
    box-shadow: 0 8px 16px rgba(0, 0, 0, 0.3);
    border-color: var(--border-hover);
  }

  .content {
    display: flex;
    flex-direction: column;
    gap: 16px;
    width: 100%;
    flex: 1;
  }

  .content .heading {
    font-weight: 700;
    font-size: 24px;
    margin: 0;
    color: var(--text-primary);
    transition: color 0.3s ease;
  }

  .card:hover .heading {
    color: var(--text-secondary);
  }

  .content .para {
    font-size: 18px;
    line-height: 1.6;
    color: var(--text-muted);
    margin: 0;
    flex: 1;
    transition: color 0.3s ease;
  }

  .card:hover .para {
    color: var(--text-secondary);
  }

  .content .btn {
    align-self: flex-start;
    color: var(--btn-primary-text);
    padding: 10px 20px;
    font-weight: 600;
    font-size: 14px;
    border: 1px solid var(--border-primary);
    cursor: pointer;
    background: var(--btn-primary);
    border-radius: 6px;
    transition: all 0.3s ease;
    margin-top: auto;
  }

  .content .btn:hover {
    background: var(--bg-hover);
    border-color: var(--border-hover);
    color: var(--text-primary);
    transform: translateX(6px);
  }

  .content .btn:active {
    transform: translateX(2px);
  }

  .card::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    height: 2px;
    background: linear-gradient(
      90deg,
      transparent,
      var(--border-hover),
      transparent
    );
    opacity: 0;
    transition: opacity 0.3s ease;
  }

  .card:hover::before {
    opacity: 1;
  }

  @media (max-width: 768px) {
    .card {
      min-height: 240px;
      padding: 24px;
    }

    .content .heading {
      font-size: 18px;
    }

    .icon-wrapper {
      width: 48px;
      height: 48px;
      font-size: 32px;
    }

    .content .para {
      font-size: 13px;
    }
  }

  @media (max-width: 480px) {
    .card {
      min-height: 220px;
      padding: 20px;
    }

    .content .heading {
      font-size: 16px;
    }

    .icon-wrapper {
      width: 40px;
      height: 40px;
      font-size: 28px;
    }
  }
`;

export default FeatureCard;
