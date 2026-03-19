import styled from "styled-components";

const Section = styled.section`
  box-sizing: border-box;
  width: 100%;
  margin-bottom: 32px;
  padding: ${(p) =>
    p.$fullHeight ? "0" : p.$padding || "80px 0"}; // ← chỉ padding dọc

  ${(p) =>
    p.$fullHeight &&
    `
    height: calc(100vh - 64px);
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
  `}

  background-color: ${(p) => p.$bgColor || "transparent"};

  @media (max-width: 768px) {
    padding: ${(p) =>
      p.$fullHeight ? "0" : p.$mobilePadding || "48px 0"}; // ← chỉ padding dọc
  }
`;
export default Section;
