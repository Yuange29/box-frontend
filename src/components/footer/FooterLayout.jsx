import styled from "styled-components";

import { footerData } from "../../data/generalData.js";

import { Heading } from "../ui/Typography.jsx";

const Footer = styled.footer`
  width: 100%;
  background-color: var(--bg-card);
  border-top: 1px solid var(--border-primary);
  padding: 60px 24px 30px;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  gap: 40px;

  @media (max-width: 768px) {
    padding: 40px 16px 20px;
    gap: 30px;
  }
`;

const FooterGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
  gap: 32px;
  width: 100%;
  max-width: 1200px;
  margin: 0 auto;
`;

const InformationCard = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;

  h4 {
    color: var(--text-primary);
    font-size: 16px;
    font-weight: 700;
    text-transform: uppercase;
    letter-spacing: 1px;
    margin: 0;
  }
`;

const InformationList = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

const InformationChild = styled.li`
  color: var(--text-secondary);
  font-size: 14px;
  cursor: pointer;
  transition: all 0.2s ease;
  width: fit-content;
  position: relative;

  &:hover {
    color: var(--text-primary);
    transform: translateX(5px);
  }

  /* Hiệu ứng gạch chân nhẹ khi hover */
  &::after {
    content: "";
    position: absolute;
    bottom: -2px;
    left: 0;
    width: 0;
    height: 1px;
    background: var(--text-primary);
    transition: width 0.3s ease;
  }

  &:hover::after {
    width: 100%;
  }
`;

const Copyright = styled.div`
  width: 100%;
  max-width: 1200px;
  margin: 0 auto;
  padding-top: 30px;
  border-top: 1px solid var(--border-primary);
  display: flex;
  justify-content: space-between;
  align-items: center;
  color: var(--text-muted);
  font-size: 13px;

  @media (max-width: 768px) {
    flex-direction: column;
    gap: 12px;
    text-align: center;
  }
`;

const SocialIcons = styled.div`
  display: flex;
  gap: 16px;
  font-size: 18px;

  i {
    cursor: pointer;
    transition: color 0.2s;
    &:hover {
      color: var(--text-primary);
    }
  }
`;

function ShowData({ title, inf }) {
  return (
    <InformationCard>
      <Heading $level={4}>{title}</Heading>
      <InformationList>
        {inf.map((e, index) => (
          <InformationChild key={index}>{e}</InformationChild>
        ))}
      </InformationList>
    </InformationCard>
  );
}

export default function FooterLayout() {
  return (
    <Footer>
      <FooterGrid>
        {footerData.map((item, index) => (
          <ShowData key={index} {...item} />
        ))}
      </FooterGrid>

      <Copyright>
        <span>© 2026 Storage Service. All rights reserved.</span>
        <SocialIcons>
          <i className="fa-brands fa-facebook"></i>
          <i className="fa-brands fa-twitter"></i>
          <i className="fa-brands fa-github"></i>
        </SocialIcons>
      </Copyright>
    </Footer>
  );
}
