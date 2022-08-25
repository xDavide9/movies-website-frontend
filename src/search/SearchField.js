import styles from "./SearchField.module.css";
import { useState } from "react";
import { Input, Select } from "antd";
import SearchPosters from "./SearchPosters";
import { motion } from "framer-motion";
import { useSearchParams } from "react-router-dom";

const { Search } = Input;

const SearchField = (props) => {
  const [searchParams, setSearchParams] = useSearchParams();
  let query = "";
  if (searchParams.get("q")) {
    query = searchParams.get("q");
  }

  return (
    <motion.div>
      <div className={styles.container}>
        <Search
          placeholder="input search text"
          enterButton="Search"
          style={{ width: "200px" }}
          onSearch={(value) => {
            if (value === "") return;
            setSearchParams({ q: value });
          }}
          defaultValue={query}
        />
      </div>
      <SearchPosters query={query} language={props.language} />
    </motion.div>
  );
};

export default SearchField;
