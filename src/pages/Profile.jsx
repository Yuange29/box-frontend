import Section from "../components/ui/Section";
import Container from "../components/ui/Container";
import InfomationBox from "../components/profile/InfomationBox";
import Setting from "../components/profile/Setting";

import { Heading } from "../components/ui/Typography";

export default function Profile() {
  return (
    <>
      <Section>
        <Container>
          <Heading $level={1}>Thông tin tài khoản</Heading>
        </Container>
      </Section>

      <Section $bgColor="var(--bg-section)">
        <Container>
          <Heading $level={2}></Heading>
          <InfomationBox />
        </Container>
      </Section>

      <Section>
        <Container>
          <Heading $level={2}>Một số tùy chỉnh</Heading>
          <Setting />
        </Container>
      </Section>
    </>
  );
}
