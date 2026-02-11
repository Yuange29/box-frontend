import styled from "styled-components";
import { useNavigate } from "react-router-dom";

const FeatureCard = ({ title, desc, direct }) => {
  const navigate = useNavigate();
  return (
    <StyledWrapper>
      <div className="card">
        <div className="title-1">{title}</div>
        <div className="content">{desc}</div>
        <button className="btn" onClick={() => navigate(direct)}>
          Learn more
        </button>
        <div class="bar">
          <div class="emptybar"></div>
          <div class="filledbar"></div>
        </div>
      </div>
    </StyledWrapper>
  );
};

const StyledWrapper = styled.div`
  .card {
    display: flex;
    height: 280px;
    width: 200px;
    background: linear-gradient(145deg, #163d1f, #1f5a2c);
    border-radius: 14px;
    box-shadow: -1rem 0 2rem rgba(0, 0, 0, 0.35);
    margin-left: -50px;
    transition: 0.4s ease;
    position: relative;
    left: 0px;
  }

  .card:not(:first-child) {
    margin-left: -50px;
  }

  .card:hover {
    transform: translateY(-20px);
    box-shadow:
      -1rem 0 3rem rgba(0, 0, 0, 0.45),
      0 10px 30px rgba(46, 204, 113, 0.35);
  }

  .card:hover ~ .card {
    position: relative;
    left: 50px;
    transform: rotateX(-10deg) rotateY(8deg);
    transition: 0.4s ease;
  }

  .title-1 {
    color: #d4f8d4;
    font-size: 24px;
    font-weight: 700;
    position: absolute;
    left: 20px;
    top: 15px;
  }

  /* ==== BUTTON MỚI ==== */
  .btn {
    position: absolute;
    top: 195px;
    margin: 0 20px;
    width: 120px;
    height: 36px;
    border-radius: 10px;
    border: none;
    cursor: pointer;
    font-weight: 600;
    letter-spacing: 0.5px;
    color: #fff;

    background: linear-gradient(135deg, #27ae60, #2ecc71);
    box-shadow: 0 4px 15px rgba(46, 204, 113, 0.4);

    transition: all 0.3s ease;
  }

  .btn:hover {
    transform: translateY(-3px);
    background: linear-gradient(135deg, #2ecc71, #58d68d);
    box-shadow: 0 6px 20px rgba(46, 204, 113, 0.6);
  }

  .btn:active {
    transform: scale(0.96);
    box-shadow: 0 3px 10px rgba(46, 204, 113, 0.4);
  }

  .bar {
    position: relative;
    top: 250px;
    height: 5px;
    width: 100%;
  }

  .emptybar {
    background-color: #0f2d17;
    width: 100%;
    height: 100%;
    border-radius: 10px;
  }

  .filledbar {
    position: absolute;
    top: 0px;
    z-index: 3;
    width: 0px;
    height: 100%;
    border-radius: 10px;
    background: linear-gradient(90deg, #27ae60, #6fffb0);
    transition: 0.6s ease;
  }

  .card:hover .filledbar {
    width: 100%;
  }

  .content {
    position: absolute;
    padding: 20px;
    top: 60px;
    color: #e8ffe8;
    font-size: 1rem;
  }

  .stroke {
    stroke: #6fffb0;
    stroke-dasharray: 360;
    stroke-dashoffset: 360;
    transition: 0.6s ease;
  }

  .card:hover .stroke {
    stroke-dashoffset: 100;
  }
`;

export default FeatureCard;
