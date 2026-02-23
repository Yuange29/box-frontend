import styled from "styled-components";

const Section = styled.section`
  box-sizing: border-box;
  width: 100%;
  // overflow: hidden;
  padding: ${(p) =>
    p.$fullHeight ? "0" : p.$padding || "80px 0"}; // ← chỉ padding dọc

  ${(p) =>
    p.$fullHeight &&
    `
    height: 100vh;
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
