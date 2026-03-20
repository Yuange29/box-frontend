import styled from "styled-components";
const FeatureWrapper = styled.div`
  box-sizing: border-box;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 32px;
  margin-top: 40px;
  width: 100%;
  padding: 12px;
  align-items: stretch;

  @media (hover: hover) and (pointer: fine) {
    &:has(> div:hover) > div:not(:hover) {
      opacity: 0.3;
      filter: blur(4px) grayscale(0.5); /* Thêm grayscale để tăng sự tập trung vào card đang chọn */
      transform: scale(0.96);
    }
  }

  & > div {
    transition:
      opacity 0.4s cubic-bezier(0.4, 0, 0.2, 1),
      filter 0.4s cubic-bezier(0.4, 0, 0.2, 1),
      transform 0.4s cubic-bezier(0.4, 0, 0.2, 1);
    min-width: 0;
  }

  @media (max-width: 1200px) {
    grid-template-columns: repeat(3, 1fr);
    gap: 24px;
  }

  @media (max-width: 900px) {
    grid-template-columns: repeat(2, 1fr);
    gap: 20px;
    margin-top: 24px;
  }

  @media (max-width: 550px) {
    grid-template-columns: 1fr;
    gap: 16px;
    padding: 10px;

    &:has(> div:hover) > div:not(:hover) {
      opacity: 1;
      filter: none;
      transform: none;
    }
  }
`;
export default FeatureWrapper;
