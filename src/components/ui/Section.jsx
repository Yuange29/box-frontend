import styled from "styled-components";

const Section = styled.section`
  padding: ${(p) => (p.$fullHeight ? "0" : p.$padding || "80px 0")};
  ${(p) =>
    p.$fullHeight &&
    `
    height: 80vh;
    display: flex;
    align-items: center;
    justify-content: center;
  `}

  background-color: ${(p) => p.$bgColor || "transparent"};

  @media (max-width: 768px) {
    padding: ${(p) => (p.$fullHeight ? "0" : p.$mobilePadding || "48px 0")};
  }
`;

export default Section;
