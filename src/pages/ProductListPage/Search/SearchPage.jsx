import React, { useState } from 'react';
import { useNavigate } from "react-router-dom";
import styles from "./SearchPage.module.scss";
import { SearchField } from "../../../components/Core";

const SearchPage = () => {
  const navigate = useNavigate();
  const [searchTerm, setSearchTerm] = useState("");

  const handleSearch = () => {
    const searchKeyword = new URLSearchParams({ search: searchTerm }).toString();
    navigate(`/?${searchKeyword}`);
  };

  return (
    <div className={styles["content"]}>
      <div className={styles["searchSection"]}>
        <SearchField
          label={"검색어를 입력해 주세요."}
          value={searchTerm}
          className={styles["searchField"]}
          onChange={value => setSearchTerm(value)}
          onKeyUp={event => {
            if (event.key === "Enter") {
              handleSearch();
            }
          }}
        />
      </div>
    </div>
  );
};

export default SearchPage;