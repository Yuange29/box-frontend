import Section from "../components/ui/Section";
import Container from "../components/ui/Container";
import { Heading, Text } from "../components/ui/Typography";
import Dialog from "../components/ui/Dialog";
import { useState } from "react";

export default function Home() {
  const [isDialogOpen, setIsDialogOpen] = useState(false);

  return (
    <>
      <Section>
        <Container>
          <Heading $level={1} style={{ textAlign: "center", margin: 0 }}>
            Chào mừng bạn trở lại
          </Heading>
        </Container>
      </Section>

      <Section>
        <Container>
          <Heading $level={2}>Các chi tiêu gần nhất:</Heading>
          <button onClick={() => setIsDialogOpen(true)}>Mở Dialog</button>
          <Dialog
            isOpen={isDialogOpen}
            onClose={() => setIsDialogOpen(false)}
            title="Chi tiêu gần nhất"
          >
            <p>Đây là nội dung của dialog.</p>
          </Dialog>
        </Container>
      </Section>
    </>
  );
}
