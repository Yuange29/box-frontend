import { useContext, useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

import { AuthContext } from "../contexts/AuthContext";
import { DataContext } from "../contexts/DataContext";

import { Heading } from "../components/ui/Typography";
import { Button } from "../components/ui/Button";
import Section from "../components/ui/Section";
import Container from "../components/ui/Container";
import Dialog from "../components/ui/Dialog";
import FeatureWrapper from "../styles/FeatureWrapper";
import FeatureCard from "../components/homeComponents/FeatureCard";
import CategoriesBox from "../components/categoryComponent/CategoriesBox";
import AddCategoryForm from "../components/categoryComponent/AddCategoryForm";
import SearchBar from "../components/categoryComponent/SearchBar";

import { categoryFeatures as links } from "../data/featuresInfomation";

export default function Categories() {
  const { user } = useContext(AuthContext);
  const { categories, setLoadingCategories } = useContext(DataContext);
  const [isOpen, setIsOpen] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    setLoadingCategories(true);
    // console.log("cate page cate", categories);
  }, [setLoadingCategories]);
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
