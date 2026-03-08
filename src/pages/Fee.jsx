import { useContext, useEffect, useState, useMemo } from "react";
import { useNavigate } from "react-router-dom";

import { AuthContext } from "../contexts/AuthContext";

import Section from "../components/ui/Section";
import Container from "../components/ui/Container";
import { Heading } from "../components/ui/Typography";
import FeatureCard from "../components/homeComponents/FeatureCard";
import FeatureWrapper from "../styles/FeatureWrapper";
import Dialog from "../components/ui/Dialog";
import { Button } from "../components/ui/Button";
import FeeBox from "../components/feeComponent/FeeBox";
import FeeForm from "../components/feeComponent/FeeForm";

import { feeFeatures as links } from "../data/featuresInfomation";
import { DataContext } from "../contexts/DataContext";
import SearchBar from "../components/feeComponent/SearchBar";

export default function Fee() {
  const { user } = useContext(AuthContext);
  const { fees, setLoadingFees } = useContext(DataContext);

  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const navigate = useNavigate();
  const memoizedLinks = useMemo(() => links, []);

  useEffect(() => {
    setLoadingFees(true);
  }, []);

  return (
    <>
      <Section>
        <Container>
          <Heading $level={1} style={{ textAlign: "center" }}>
            Các chi phí của bạn
          </Heading>
        </Container>
      </Section>

      <Section $bgColor="var(--bg-section)">
        <Container>
          <Heading $level={2}>Các tính năng</Heading>
          <FeatureWrapper>
            {memoizedLinks.map((link) => (
              <FeatureCard key={link.id} {...link} />
            ))}
          </FeatureWrapper>
        </Container>
      </Section>

      <Section id="search">
        <Container>
          <Heading $level={2}>Tìm kiếm chi phí của bạn</Heading>
          <SearchBar fees={fees} />
        </Container>
      </Section>

      <Section id="recent" $bgColor="var(--bg-section)">
        <Container>
          <Heading $level={2}>Các chi phí gần đây: </Heading>
          <FeeBox fees={fees} />
        </Container>
      </Section>

      <Section id="add">
        <Container>
          <Heading $level={2}>Thêm chi phí mới: </Heading>
          <FeeForm />
        </Container>
      </Section>

      {!user && (
        <Dialog
          title={"Vui lòng đăng nhập"}
          isOpen={isDialogOpen}
          onClose={() => setIsDialogOpen(false)}
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
