import { Outlet } from "react-router-dom";
import styled from "styled-components";
import FooterLayout from "../components/footer/FooterLayout";
import HeaderLayout from "../components/header/HeaderLayout";

const Main = styled.main`
  min-height: calc(100vh - 64px - 120px);
  padding-top: 64px;
  background-color: var(--bg-secondary);
  display: flex;
  flex-direction: column;
`;

export default function MainLayout() {
  return (
    <>
      <HeaderLayout />
      <Main>
        <Outlet />
      </Main>
      <FooterLayout />
    </>
  );
}
