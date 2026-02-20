import { useContext } from "react";
import { AuthContext } from "../contexts/AuthContext";

import Section from "../components/ui/Section";
import Container from "../components/ui/Container";
import FeatureCard from "../components/homeComponents/FeatureCard.jsx";
import { Heading } from "../components/ui/Typography";
import { featureLink } from "../data/featureLink.js";
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
            {featureLink.map((feature) => (
              <FeatureCard
                key={feature.title}
                icon={feature.icon}
                title={feature.title}
                desc={feature.desc}
                direct={feature.direct}
              />
            ))}
          </FeatureWrapper>
        </Container>
      </Section>
    </>
  );
}
