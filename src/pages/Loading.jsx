import styled from "styled-components";
import { useContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";

import { AuthContext } from "../contexts/AuthContext";

import Loading from "../components/ui/Loading";

import { getInfo } from "../services/user.service";

const LoadingPage = () => {
  const { login } = useContext(AuthContext);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchUserInfo = async () => {
      try {
        const token = localStorage.getItem("accessToken");
        if (!token) {
          navigate("/signin");
          return;
        }

        const response = await getInfo();

        login(response.data.result);
      } catch (error) {
        console.error("Error fetching user info:", error);
      } finally {
        //
      }
    };
    fetchUserInfo();
  }, []);

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
