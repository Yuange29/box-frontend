import styled from "styled-components";
import { footerData } from "../../data/generalData.js";
import { Heading, Text } from "../ui/Typography.jsx";

const Footer = styled.footer`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  gap: 16px;
  padding: 40px 24px;
  box-sizing: border-box;
  background-color: var(--bg-section);
`;

const InformationCard = styled.div`
  flex: 1 1 280px;
  max-width: 100%;
  padding: 16px;
  border-radius: 12px;
  box-sizing: border-box;
  background: rgba(255, 255, 255, 0.05);
  font-size: 18px;
  color: var(--cotton-color);
  transition:
    transform 0.2s ease,
    background 0.2s ease;

  &:hover {
    transform: translateY(-4px);
    background: rgba(255, 255, 255, 0.08);
  }

  @media (max-width: 600px) {
    flex: 1 1 100%;
    font-size: 16px;
  }
`;

const InformationList = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
`;

const InformationChild = styled.li`
  padding: 6px 0;
  font-size: 16px;
  opacity: 0.85;
  transition:
    transform 0.15s ease,
    opacity 0.15s ease;

  &:hover {
    scale: 1.02;
    opacity: 0.95;
  }

  &:not(:last-child) {
    border-bottom: 1px solid rgba(255, 255, 255, 0.1);
  }
`;

const Copyright = styled.div`
  width: 100%;
  text-align: center;
  padding: 16px 0;
  font-size: 14px;
  opacity: 0.6;
  border-top: 1px solid rgba(255, 255, 255, 0.1);
  color: var(--cotton-color);
`;

function ShowData({ title, inf }) {
  return (
    <InformationCard>
      <Heading $level={4}>{title}</Heading>
      <InformationList>
        {inf.map((e, index) => (
          <InformationChild key={index}>
            <Text>{e}</Text>
          </InformationChild>
        ))}
      </InformationList>
    </InformationCard>
  );
}

export default function FooterLayout() {
  return (
    <Footer>
      {footerData.map((item, index) => (
        <ShowData key={index} {...item} />
      ))}
      <Copyright>© 2026 Storage Service. All rights reserved.</Copyright>
    </Footer>
  );
}
