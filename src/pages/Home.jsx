import { useContext } from "react";
import { AuthContext } from "../contexts/AuthContext.jsx";

import Section from "../components/ui/Section";
import Container from "../components/ui/Container";
import FeatureCard from "../components/homeComponents/FeatureCard.jsx";
import { Heading } from "../components/ui/Typography";
import FeatureWrapper from "../styles/FeatureWrapper.jsx";

import { homeFeatures as link } from "../data/featuresInfomation.js";
import Clock from "../components/homeComponents/Clock.jsx";

export default function Home() {
  const { user } = useContext(AuthContext);
  return (
    <>
      <Section $fullHeight>
        <Container>
          <Heading $level={1} style={{ textAlign: "center", margin: 0 }}>
            Chào mừng {user?.userNickName || "bạn đến với Storage"}
          </Heading>
          <Clock />
        </Container>
      </Section>

      <Section $bgColor="var(--bg-section)">
        <Container>
          <Heading $level={2} style={{ color: "var(--cotton-color)" }}>
            Một số tính năng:
          </Heading>
          <FeatureWrapper>
            {link.map((link) => (
              <FeatureCard key={link.title} {...link} />
            ))}
          </FeatureWrapper>
        </Container>
      </Section>
    </>
  );
}
