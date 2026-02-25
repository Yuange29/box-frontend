import Section from "../components/ui/Section";
import Container from "../components/ui/Container";
import { Heading } from "../components/ui/Typography";

export default function Fee() {
  return (
    <>
      <Section>
        <Container>
          <Heading $level={1} style={{ textAlign: "center" }}>
            Các chi phí của bạn
          </Heading>
        </Container>
      </Section>

      <Section>
        <Container>
          <Heading>Fee Details</Heading>
        </Container>
      </Section>
    </>
  );
}
