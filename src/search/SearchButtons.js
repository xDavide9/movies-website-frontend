import "./SearchButtons.css";
import { useState } from "react";
import { Input, Select, Tooltip } from "antd";
import SearchPosters from "./SearchPosters";
import keywords from "./keywords";
import { motion } from "framer-motion";

const { Search } = Input;
const { Option } = Select;

const SearchButtons = () => {
  const [query, setQuery] = useState(
    () => keywords[Math.floor(Math.random() * keywords.length)]
  );
  const [language, setLanguage] = useState("en");
  const [minimumPopularity, setMinimumPopularity] = useState(15);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      transition={{ delay: 0.3 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <div className="search-buttons-container">
        <Select defaultValue="en" onChange={(value) => setLanguage(value)}>
          <Option value="en">English</Option>
          <Option value="it">Italian</Option>
        </Select>
        <Search
          placeholder="input search text"
          enterButton="Search"
          style={{ width: "200px" }}
          onSearch={(value) => {
            if (value === "") return;
            setQuery(value);
          }}
        />
        <div className="search-buttons-popularity">
          <Select
            defaultValue={5}
            onChange={(value) => setMinimumPopularity(value)}
          >
            <Option value={1.25}>Least Popular</Option>
            <Option value={2.5}>Less Popular</Option>
            <Option value={5}>Popular</Option>
            <Option value={10}>More Popular</Option>
            <Option value={20}>Most Popular</Option>
          </Select>
        </div>
      </div>
      <SearchPosters
        query={query}
        language={language}
        minimumPopularity={minimumPopularity}
      />
    </motion.div>
  );
};

export default SearchButtons;
