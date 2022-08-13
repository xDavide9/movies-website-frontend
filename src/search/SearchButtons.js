import "./SearchButtons.css";
import { useState } from "react";
import { Input, Select } from "antd";
import SearchPosters from "./SearchPosters";
import { motion } from "framer-motion";

const { Search } = Input;
const { Option } = Select;

const SearchButtons = () => {
  const [query, setQuery] = useState("asdfghjkl");
  const [language, setLanguage] = useState("en");
  const [minimumPopularity, setMinimumPopularity] = useState(0);

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
            setQuery(value);
          }}
        />
        <div className="search-buttons-popularity">
          <Select
            defaultValue={0}
            onChange={(value) => setMinimumPopularity(value)}
          >
            <Option value={0}>Popular</Option>
            <Option value={50}>More Popular</Option>
            <Option value={100}>Most Popular</Option>
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
