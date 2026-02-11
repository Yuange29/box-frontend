import { useState, useContext } from "react";
import { AuthContext } from "../contexts/AuthContext";
import styled from "styled-components";

import Section from "../components/ui/Section";
import Container from "../components/ui/Container";
import FeatureCard from "../components/homeComponents/FeatureCard.jsx";
import Dialog from "../components/ui/Dialog";
import { Heading, Text } from "../components/ui/Typography";

export default function Home() {
  // const [isDialogOpen, setIsDialogOpen] = useState(false);
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
            <FeatureCard
              title={"test card"}
              desc={"Mô tả cho card test"}
              direct={"/"}
            />
            <FeatureCard
              title={"test card"}
              desc={"Mô tả cho card test"}
              direct={"/"}
            />
          </CardStyle>
        </Container>
      </Section>
    </>
  );
}

const CardStyle = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;
