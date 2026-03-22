import { useContext, useEffect, useMemo } from "react";

import { DataContext } from "../contexts/DataContext";

import Section from "../components/ui/Section";
import Container from "../components/ui/Container";
import { Heading } from "../components/ui/Typography";
import FeatureCard from "../components/homeComponents/FeatureCard";
import FeatureWrapper from "../styles/FeatureWrapper";

import FeeBox from "../components/feeComponent/FeeBox";
import FeeForm from "../components/feeComponent/FeeForm";

import SearchBar from "../components/feeComponent/SearchBar";
import { feeFeatures as links } from "../data/featuresInfomation";

export default function Fee() {
  const { fees, setLoadingFees, categories } = useContext(DataContext);

  const memoizedLinks = useMemo(() => links, []);

  useEffect(() => {
    if (!fees || fees.length === 0) setLoadingFees(true);
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
          <FeeForm categories={categories} />
        </Container>
      </Section>
    </>
  );
}
