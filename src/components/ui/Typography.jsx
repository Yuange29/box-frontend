import styled from "styled-components";

export const Heading = styled.h1`
  font-weight: 700;
  line-height: 1.2;
  color: var(--text-primary);

  font-size: ${(p) => {
    switch (p.$level) {
      case 1:
        return "48px";
      case 2:
        return "36px";
      case 3:
        return "28px";
      case 4:
        return "22px";
      default:
        return "18px";
    }
  }};

  @media (max-width: 768px) {
    font-size: ${(p) => {
      switch (p.$level) {
        case 1:
          return "32px";
        case 2:
          return "26px";
        case 3:
          return "22px";
        default:
          return "18px";
      }
    }};
  }
`;

export const Text = styled.p`
  font-size: 18px;
  line-height: 1.6;
  color: var(--text-secondary);
`;

export const SmallText = styled.span`
  font-size: 16px;
  color: var(--text-muted);
`;
