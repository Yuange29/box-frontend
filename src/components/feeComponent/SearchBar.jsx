import styled from "styled-components";
import { useMemo, useState } from "react";

import FeeBox from "./FeeBox";
import { Text } from "../ui/Typography";

const SearchWrapper = styled.div`
  box-sizing: border-box;
  width: 90%;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 8px 14px;
  margin: 0 auto;
`;

const Input = styled.input`
  width: 75%;
  height: 35px;
  margin: 0 auto;
  padding: 4px 8px;
  font-size: 16px;
  text-indent: 20px;
  border: 0;
  border-radius: 999px;
  color: #1d5d06;

  &:focus {
    outline: 0;
  }

  @media (max-width: 768px) {
    width: 100%;
    height: 30px;
    font-size: 16px;
  }
`;

const Result = styled.div`
  opacity: 0.9;

  .no-result {
    color: var(--text-secondary);
    font-size: 18px;
    text-align: center;
    margin-top: 40px;
  }
`;

const getFeeName = (fee) => fee.feeName;

export default function SearchBar({ fees }) {
  const [keywords, setKeywords] = useState("");

  const results = useMemo(() => {
    const trimmedKeyword = keywords.trim();
    if (!trimmedKeyword) return [];

    return fees.filter((fee) =>
      getFeeName(fee).toLowerCase().includes(trimmedKeyword.toLowerCase()),
    );
  }, [keywords, fees]);

  const hasNoResult = keywords.trim().length > 0 && results.length === 0;

  return (
    <>
      <SearchWrapper>
        <Input
          type="text"
          placeholder="Nhập để tìm kiếm"
          value={keywords}
          onChange={(e) => setKeywords(e.target.value)}
        />
      </SearchWrapper>
      {(results.length > 0 || hasNoResult) && (
        <Result>
          {hasNoResult ? (
            <Text className="no-result">Không tìm thấy kết quả phù hợp</Text>
          ) : (
            <FeeBox fees={results} onRefresh={() => {}} />
          )}
        </Result>
      )}
    </>
  );
}
