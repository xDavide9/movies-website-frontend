import "./DiscoverButtons.css";
import { useState } from "react";
import { Input, Select, Tooltip } from "antd";
import DiscoverPosters from "./DiscoverPosters";
import keywords from "./keywords";
import { motion } from "framer-motion";
import { QuestionCircleOutlined } from "@ant-design/icons";

const { Search } = Input;
const { Option } = Select;

const DiscoverButtons = () => {
  const [query, setQuery] = useState(
    () => keywords[Math.floor(Math.random() * keywords.length)]
  );
  const [language, setLanguage] = useState("en");
  const [minimumPopularity, setMinimumPopularity] = useState(0);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      transition={{ delay: 0.3 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <div className="discover-buttons-container">
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
        <div className="discover-buttons-popularity">
          <Select
            defaultValue={0}
            onChange={(value) => setMinimumPopularity(value)}
          >
            <Option value={5}>5</Option>
            <Option value={10}>15</Option>
            <Option value={25}>25</Option>
            <Option value={100}>100</Option>
            <Option value={250}>250</Option>
            <Option value={500}>500</Option>
          </Select>
          <Tooltip
            color="blue"
            title="Popularity of films is filtered based on this number. 0 means every film is listed while higher values gradually limit the amount of results."
          >
            <QuestionCircleOutlined />
          </Tooltip>
        </div>
      </div>
      <DiscoverPosters
        query={query}
        language={language}
        minimumPopularity={minimumPopularity}
      />
    </motion.div>
  );
};

export default DiscoverButtons;
