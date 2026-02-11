import styled from "styled-components";

const Section = styled.section`
  padding: ${(p) => p.$padding || "80px 0"};

  @media (max-width: 768px) {
    padding: ${(p) => p.$mobilePadding || "48px 0"};
  }
`;

export default Section;
