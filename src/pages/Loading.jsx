import styled from "styled-components";
import Loading from "../components/ui/Loading";

const LoadingPage = () => {
  return (
    <StyledContainer>
      <LoadingWrapper>
        <Loading />
        <p>Loading...</p>
      </LoadingWrapper>
    </StyledContainer>
  );
};

const StyledContainer = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
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
