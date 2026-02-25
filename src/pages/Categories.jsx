import { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

import { AuthContext } from "../Contexts/AuthContext";

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

import { getCategories } from "../services/category.service";
import { categoryFeatures as links } from "../data/categoryFeatures";

export default function Categories() {
  const { user, setLoadData } = useContext(AuthContext);
  const [isOpen, setIsOpen] = useState(true);
  const [categories, setCategories] = useState([]);

  const navigate = useNavigate();

  const [refresh, setRefresh] = useState(false);

  useEffect(() => {
    const fetchCategories = async () => {
      try {
        setLoadData(true);
        const response = await getCategories();
        setCategories(response.data.result);
      } catch (error) {
        console.error(
          "Error fetching categories:",
          error?.response?.data || error?.message,
        );
      } finally {
        setLoadData(false);
      }
    };
    if (user) {
      fetchCategories();
    }
  }, [user, refresh, setLoadData]);

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
                {link.description}
              </FeatureCard>
            ))}
          </FeatureWrapper>
        </Container>
      </Section>

      <Section id="find" $bgColor="var(--section-color)">
        <Container>
          <Heading $level={2}>Tìm danh mục chi tiêu</Heading>
          <SearchBar categories={categories} />
        </Container>
      </Section>

      <Section id="list" $bgColor="var(--section-color)">
        <Container>
          <Heading $level={2}>Các danh mục chi tiêu của bạn</Heading>
          <CategoriesBox categories={categories} onRefresh={setRefresh} />
        </Container>
      </Section>

      <Section id="add">
        <Container>
          <Heading $level={2}>Thêm danh mục mới</Heading>
          <AddCategoryForm isRefresh={setRefresh} />
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
