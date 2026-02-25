import styled from "styled-components";

const FeatureWrapper = styled.div`
  box-sizing: border-box;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 24px;
  margin-top: 32px;
  width: 100%;
  padding: 8px;
  & > div {
    transition:
      opacity 0.3s ease,
      filter 0.3s ease;
    min-width: 0;
  }

  &:has(> div:hover) > div:not(:hover) {
    opacity: 0.4;
    filter: blur(2px);
  }

  @media (max-width: 1024px) {
    grid-template-columns: repeat(3, 1fr);
    gap: 20px;
  }

  @media (max-width: 768px) {
    grid-template-columns: repeat(2, 1fr);
    gap: 20px;
  }

  @media (max-width: 480px) {
    grid-template-columns: 1fr;
    gap: 16px;
  }
`;

export default FeatureWrapper;
