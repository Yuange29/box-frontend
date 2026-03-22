import styled from "styled-components";
import { Outlet, useLocation } from "react-router-dom";
import { useEffect, useState } from "react";

import FooterLayout from "../components/footer/FooterLayout";
import HeaderLayout from "../components/header/HeaderLayout";
import FeatureButton from "../components/FeatureButton";

import {
  homeFeatures,
  categoryFeatures,
  feeFeatures,
} from "../data/featuresInfomation";

const Main = styled.main`
  min-height: calc(100vh - 64px - 120px);
  padding-top: 64px;
  background-color: var(--bg-secondary);
  display: flex;
  flex-direction: column;
`;

export default function MainLayout() {
  const [link, setLink] = useState(homeFeatures);
  const location = useLocation();

  const FEATURE_MAP = {
    "/": homeFeatures,
    "/categories": categoryFeatures,
    "/fee": feeFeatures,
  };

  useEffect(() => {
    const features = FEATURE_MAP[location.pathname];
    if (features) setLink(features);
  }, [location.pathname]);
  return (
    <>
      <HeaderLayout />
      <Main>
        <Outlet />
      </Main>
      <FooterLayout />
      <FeatureButton content={link} />
    </>
  );
}
