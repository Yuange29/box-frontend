import { useContext } from "react";
import { AuthContext } from "../contexts/AuthContext";
import styled from "styled-components";

import Section from "../components/ui/Section";
import Container from "../components/ui/Container";
import FeatureCard from "../components/homeComponents/FeatureCard.jsx";
import { Heading, Text } from "../components/ui/Typography";
import { featureLink } from "../data/featureLink.js";

export default function Home() {
  const { user } = useContext(AuthContext);
  return (
    <>
      <Section>
        <Container>
          <Heading $level={1} style={{ textAlign: "center", margin: 0 }}>
            Chào mừng {user?.userName || "bạn đến với Storage"}
          </Heading>
        </Container>
      </Section>

      <Section>
        <Container>
          <Heading $level={2}>Một số tính năng:</Heading>
          <CardStyle>
            {featureLink.map((feature) => (
              <FeatureCard
                key={feature.title}
                icon={feature.icon}
                title={feature.title}
                desc={feature.desc}
                direct={feature.direct}
              />
            ))}
          </CardStyle>
        </Container>
      </Section>
    </>
  );
}

const CardStyle = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 24px;
  margin-top: 32px;
  width: 100%;

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
