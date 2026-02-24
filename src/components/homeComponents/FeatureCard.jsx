import styled from "styled-components";

const FeatureCard = ({ title, desc, direct, icon }) => {
  const handleReadMore = () => {
    if (direct) {
      const elementId = direct.replace("#", "");
      const element = document.getElementById(elementId);
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
          <p className="para">
            {desc || "Enhance your experience with our amazing features"}
          </p>
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
    background: linear-gradient(135deg, #1a1a2e 0%, #16213e 100%);
    box-shadow: 0 8px 24px rgba(0, 0, 0, 0.3);
    border: 1px solid rgba(255, 255, 255, 0.1);
    box-sizing: border-box;
    transition: all 0.4s cubic-bezier(0.23, 1, 0.32, 1);
    cursor: pointer;
  }

  .card:hover {
    transform: translateY(-8px);
    box-shadow: 0 16px 32px rgba(248, 155, 41, 0.2);
    border-color: rgba(255, 15, 123, 0.3);
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
    background: linear-gradient(-45deg, #f89b29 0%, #ff0f7b 100%);
    border-radius: 10px;
    transition: all 0.4s ease;
  }

  .card:hover .icon-wrapper {
    transform: scale(1.1) rotateZ(10deg);
    box-shadow: 0 8px 16px rgba(248, 155, 41, 0.3);
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
    color: #ffffff;
    margin: 0;
    transition: color 0.3s ease;
    background: linear-gradient(135deg, #f89b29 0%, #ff0f7b 100%);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
  }

  .card:hover .heading {
    -webkit-text-fill-color: unset;
    color: #f89b29;
  }

  .content .para {
    font-size: 18px;
    line-height: 1.6;
    color: #b0b0b0;
    margin: 0;
    flex: 1;
    transition: color 0.3s ease;
  }

  .card:hover .para {
    color: #e8e8e8;
  }

  .content .btn {
    align-self: flex-start;
    color: #e8e8e8;
    padding: 10px 20px;
    font-weight: 600;
    font-size: 14px;
    border: 2px solid transparent;
    cursor: pointer;
    background: linear-gradient(-45deg, #f89b29 0%, #ff0f7b 100%);
    border-radius: 6px;
    box-shadow: 0 4px 12px rgba(248, 155, 41, 0.3);
    transition: all 0.3s ease;
    margin-top: auto;
  }

  .content .btn:hover {
    background: transparent;
    border-color: #f89b29;
    color: #f89b29;
    box-shadow: inset 0 0 0 1px rgba(248, 155, 41, 0.5);
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
    background: linear-gradient(90deg, transparent, #f89b29, transparent);
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
