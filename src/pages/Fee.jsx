import { useContext, useEffect, useState, useMemo } from "react";
import { AuthContext } from "../contexts/AuthContext";
import { useNavigate } from "react-router-dom";

import Section from "../components/ui/Section";
import Container from "../components/ui/Container";
import { Heading } from "../components/ui/Typography";
import FeatureCard from "../components/homeComponents/FeatureCard";
import FeatureWrapper from "../styles/FeatureWrapper";
import Dialog from "../components/ui/Dialog";
import { Button } from "../components/ui/Button";
import FeeBox from "../components/feeComponent/FeeBox";
import FeeForm from "../components/feeComponent/FeeForm";

import { feeFeatures as links } from "../data/feeFeatures";
import { getFees } from "../services/fee.service";

export default function Fee() {
  const { user, setLoadData } = useContext(AuthContext);
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [isErrorDialogOpen, setIsErrorDialogOpen] = useState(false);
  //   const [isDetailsDialogOpen, setIsDetailsDialogOpen] = useState(false);
  const [fees, setFees] = useState([]);
  const [error, setError] = useState(null);
  const [refresh, setRefresh] = useState(false);
  const navigate = useNavigate();
  const memoizedLinks = useMemo(() => links, []);

  useEffect(() => {
    const fetchFee = async () => {
      setLoadData(true);
      try {
        const response = await getFees();
        setFees(response.data.result);
        console.log("Fetched fees:", response.data.result);
      } catch (error) {
        console.error("Error fetching fees:", error);
        setError(error);
      } finally {
        setLoadData(false);
      }
    };
    fetchFee();
  }, [refresh, setLoadData]);
  return (
    <>
      <Section $fullHeight>
        <Container>
          <Heading $level={1} style={{ textAlign: "center" }}>
            Các chi phí của bạn
          </Heading>
        </Container>
      </Section>

      <Section $bgColor="var(--section-color)">
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
        </Container>
      </Section>

      <Section id="recent">
        <Container>
          <Heading $level={2}>Các chi phí gần đây: </Heading>
          <FeeBox></FeeBox>
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

      <Dialog
        title={"Có lỗi xảy ra"}
        isOpen={isErrorDialogOpen}
        onClose={() => setIsErrorDialogOpen(false)}
      >
        Đã có lỗi trong quá trình tải dữ liệu. Vui lòng thử lại sau.
        <p>{error}</p>
        <Button onClick={() => setIsErrorDialogOpen(false)}>Đóng</Button>
      </Dialog>

      {/* <Dialog
        title={fees}
        isOpen={isDetailsDialogOpen}
        onClose={() => setIsDetailsDialogOpen(false)}
      >
        Đã có lỗi trong quá trình tải dữ liệu. Vui lòng thử lại sau.
        <p>{error}</p>
        <Button onClick={() => setIsDetailsDialogOpen(false)}>Đóng</Button>
      </Dialog> */}
    </>
  );
}
