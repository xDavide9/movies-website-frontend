import styles from "./SearchField.module.css";
import { useState } from "react";
import { Input, Select } from "antd";
import SearchPosters from "./SearchPosters";
import { motion } from "framer-motion";
import { useSearchParams } from "react-router-dom";

const { Search } = Input;
const { Option } = Select;

const SearchField = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  let query = "";
  if (searchParams.get("q")) {
    query = searchParams.get("q");
  }
  const [language, setLanguage] = useState("en");
  const [minimumPopularity, setMinimumPopularity] = useState(0);

  return (
    <motion.div>
      <div className={styles.container}>
        <Select defaultValue="en" onChange={(value) => setLanguage(value)}>
          <Option value="en">English</Option>
          <Option value="it">Italian</Option>
          <Option value="de">German</Option>
          <Option value="es">Spanish</Option>
          <Option value="fr">French</Option>
        </Select>
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
        <Select
          defaultValue={0}
          onChange={(value) => setMinimumPopularity(value)}
        >
          <Option value={0}>Popular</Option>
          <Option value={50}>More Popular</Option>
          <Option value={100}>Most Popular</Option>
        </Select>
      </div>
      <SearchPosters
        query={query}
        language={language}
        minimumPopularity={minimumPopularity}
      />
    </motion.div>
  );
};

export default SearchField;
