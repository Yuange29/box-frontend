import styled from "styled-components";
import { useContext } from "react";

import { AuthContext } from "../../contexts/AuthContext";

import { Text } from "../ui/Typography";

const InfoWrapper = styled.div`
  width: calc(100% - 200px);
  border-radius: 16px;
  border: 1px solid var(--border-primary);
  margin: 0 auto;
  background-color: var(--bg-card);
  text-indent: 20px;

  @media (max-width: 768px) {
    width: 90%;
  }
`;

export default function InfomationBox() {
  const { user } = useContext(AuthContext);

  if (!user) return null;

  return (
    <InfoWrapper>
      <Text>Tên tài khoản: {user.userNickName || "trống"}</Text>
      <Text>Email: {user.email || "trống"}</Text>
    </InfoWrapper>
  );
}
