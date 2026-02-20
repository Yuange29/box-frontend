import Section from "../components/ui/Section";
import Container from "../components/ui/Container";
import { Heading } from "../components/ui/Typography";
import { useContext, useState } from "react";
import { AuthContext } from "../contexts/AuthContext";
import Dialog from "../components/ui/Dialog";
import { Button } from "../components/ui/Button";
import { useNavigate } from "react-router-dom";
import FeatureWrapper from "../styles/FeatureWrapper";
import FeatureCard from "../components/homeComponents/FeatureCard";
import { categoryFeatures as links } from "../data/categoryFeatures";

export default function Categories() {
  const { user } = useContext(AuthContext);
  const [isOpen, setIsOpen] = useState(true);
  const navigate = useNavigate();

  return (
    <>
      <Section>
        <Container>
          <Heading $level={1} style={{ textAlign: "center", margin: 0 }}>
            Các danh mục chi tiêu của bạn
          </Heading>
        </Container>
      </Section>

      <Section>
        <Container>
          <Heading $level={2}>Tìm nhanh các tính năng:</Heading>
          <FeatureWrapper>
            {links.map((link) => (
              <FeatureCard
                key={link.title}
                title={link.title}
                direct={link.direct}
              >
                {" "}
                {link.description}
              </FeatureCard>
            ))}
          </FeatureWrapper>
        </Container>
      </Section>

      {!user && (
        <Dialog
          title={"Vui lòng đăng nhập"}
          isOpen={isOpen}
          onClose={() => setIsOpen(false)}
        >
          Ấn nút đăng nhập để tiếp tục.
          <Button
            onClick={() => navigate("/signin")}
            style={{ margin: "0 auto", display: "block", marginTop: "32px" }}
          >
            Đăng nhập
          </Button>
        </Dialog>
      )}
    </>
  );
}
