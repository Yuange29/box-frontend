import { useContext, useEffect } from "react";
// import { useNavigate } from "react-router-dom";

// import { AuthContext } from "../contexts/AuthContext";
import { DataContext } from "../contexts/DataContext";

import { Heading } from "../components/ui/Typography";
import Section from "../components/ui/Section";
import Container from "../components/ui/Container";
import FeatureWrapper from "../styles/FeatureWrapper";
import FeatureCard from "../components/homeComponents/FeatureCard";
import CategoriesBox from "../components/categoryComponent/CategoriesBox";
import AddCategoryForm from "../components/categoryComponent/AddCategoryForm";
import SearchBar from "../components/categoryComponent/SearchBar";

import { categoryFeatures as links } from "../data/featuresInfomation";

export default function Categories() {
  const { categories, setLoadingCategories } = useContext(DataContext);

  useEffect(() => {
    if (!categories || categories.length === 0) setLoadingCategories(true);
  }, []);

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
              <FeatureCard key={link.title} {...link} />
            ))}
          </FeatureWrapper>
        </Container>
      </Section>

      <Section id="find" $bgColor="var(--bg-section)">
        <Container>
          <Heading $level={2}>Tìm danh mục chi tiêu</Heading>
          <SearchBar categories={categories} />
        </Container>
      </Section>

      <Section id="list" $bgColor="var(--bg-section)">
        <Container>
          <Heading $level={2}>Các danh mục chi tiêu của bạn</Heading>
          <CategoriesBox categories={categories} />
        </Container>
      </Section>

      <Section id="add">
        <Container>
          <Heading $level={2}>Thêm danh mục mới</Heading>
          <AddCategoryForm />
        </Container>
      </Section>
    </>
  );
}
