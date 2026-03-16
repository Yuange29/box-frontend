import styled from "styled-components";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const LoadingPage = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const fetchUserInfo = async () => {
      try {
        navigate("/");
      } catch {
        navigate("/signin");
      }
    };
    fetchUserInfo();
  }, []);

  return (
    <StyledContainer>
      <LoadingWrapper>
        <Loader />
        <p>Loading...</p>
      </LoadingWrapper>
    </StyledContainer>
  );
};

const Loader = () => {
  return (
    <StyledWrapper>
      <div className="loader" />
    </StyledWrapper>
  );
};

const StyledWrapper = styled.div`
  .loader {
    width: 45px;
    height: 40px;
    background:
      linear-gradient(
        #0000 calc(1 * 100% / 6),
        #fff 0 calc(3 * 100% / 6),
        #0000 0
      ),
      linear-gradient(
        #0000 calc(2 * 100% / 6),
        #fff 0 calc(4 * 100% / 6),
        #0000 0
      ),
      linear-gradient(
        #0000 calc(3 * 100% / 6),
        #fff 0 calc(5 * 100% / 6),
        #0000 0
      );
    background-size: 10px 400%;
    background-repeat: no-repeat;
    animation: matrix 1s infinite linear;
  }

  @keyframes matrix {
    0% {
      background-position:
        0% 100%,
        50% 100%,
        100% 100%;
    }

    100% {
      background-position:
        0% 0%,
        50% 0%,
        100% 0%;
    }
  }
`;

const StyledContainer = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  background: linear-gradient(135deg, #676767 0%, #050513 100%);
`;

const LoadingWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;

  svg {
    width: 60px;
    height: 60px;
  }

  p {
    color: white;
    font-size: 18px;
    font-weight: 500;
  }
`;

export default LoadingPage;
