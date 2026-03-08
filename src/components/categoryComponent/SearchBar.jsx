import styled from "styled-components";
import { useState, useMemo } from "react";

import CategoriesBox from "./CategoriesBox";
import { Text } from "../ui/Typography";

const SearchContainer = styled.div`
  box-sizing: border-box;
  width: 90%;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 8px 14px;
  margin: 0 auto;

  .input {
    width: 75%;
    height: 35px;
    margin: 0 auto;
    padding: 4px 8px;
    font-size: 18px;
    text-indent: 20px;
    border: 0;
    border-radius: 999px;
    color: #1d5d06;
  }

  .input:focus {
    outline: 0;
  }

  @media (max-width: 768px) {
    .input {
      width: 100%;
      height: 30px;
      font-size: 16px;
    }
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

const getCategoryName = (category) =>
  category?.categoryName || category?.name || "";

const SearchBar = ({ categories }) => {
  const [keyword, setKeyword] = useState("");

  const results = useMemo(() => {
    const trimmedKeyword = keyword.trim();
    if (!trimmedKeyword) return [];

    return categories.filter((category) =>
      getCategoryName(category)
        .toLowerCase()
        .includes(trimmedKeyword.toLowerCase()),
    );
  }, [keyword, categories]);

  const hasNoResult = keyword.trim().length > 0 && results.length === 0;

  return (
    <>
      <SearchContainer>
        <input
          className="input"
          type="text"
          placeholder="Nhập để tìm kiếm..."
          id="search"
          value={keyword}
          onChange={(e) => setKeyword(e.target.value)}
        />
      </SearchContainer>

      {(results.length > 0 || hasNoResult) && (
        <Result>
          {hasNoResult ? (
            <Text className="no-result">Không tìm thấy kết quả phù hợp</Text>
          ) : (
            <CategoriesBox categories={results} onRefresh={() => {}} />
          )}
        </Result>
      )}
    </>
  );
};

export default SearchBar;
