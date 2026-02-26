import { useContext } from "react";
import { AuthContext } from "../Contexts/AuthContext.jsx";

import Section from "../components/ui/Section";
import Container from "../components/ui/Container";
import FeatureCard from "../components/homeComponents/FeatureCard.jsx";
import { Heading } from "../components/ui/Typography";
import { featureLink as link } from "../data/featureLink.js";
import FeatureWrapper from "../styles/FeatureWrapper.jsx";

export default function Home() {
  const { user } = useContext(AuthContext);
  return (
    <>
      <Section $fullHeight>
        <Container>
          <Heading $level={1} style={{ textAlign: "center", margin: 0 }}>
            Chào mừng {user?.userName || "bạn đến với Storage"}
          </Heading>
        </Container>
      </Section>

      <Section $bgColor="var(--section-color)">
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
