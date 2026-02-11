import styled from "styled-components";
import { footerData } from "../../data/generalData.js";

const Footer = styled.footer`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  background-color: var(--footer-color);
`;

const InfomationCard = styled.div`
  flex: 1 1 280px;
  padding: 16px;
  border-radius: 12px;
  background: rgba(255, 255, 255, 0.05);
  font-size: 18px;
  color: var(--cotton-color);

  &:hover {
    transform: translateY(-4px);
    background: rgba(255, 255, 255, 0.08);
  }

  @media (max-width: 600px) {
    font-size: 16px;
  }
`;

const InfomationTitle = styled.h3`
  margin-bottom: 12px;
  font-size: 20px;
  font-weight: 600;
  letter-spacing: 0.5px;
`;

const InfomationList = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
`;

const InfomationChild = styled.li`
  padding: 6px 0;
  font-size: 16px;
  opacity: 0.85;

  &:hover {
    scale: 1.02;
    opacity: 0.95;
  }

  &:not(:last-child) {
    border-bottom: 1px solid rgba(255, 255, 255, 0.1);
  }
`;

function ShowData({ title, inf }) {
  return (
    <InfomationCard>
      <InfomationTitle>{title}</InfomationTitle>
      <InfomationList>
        {inf.map((e, index) => (
          <InfomationChild key={index}>{e}</InfomationChild>
        ))}
      </InfomationList>
    </InfomationCard>
  );
}

export default function FooterLayout() {
  return (
    <Footer>
      {footerData.map((item, index) => (
        <ShowData key={index} {...item} />
      ))}
    </Footer>
  );
}
