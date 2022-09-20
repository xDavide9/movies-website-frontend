import styles from "./SearchField.module.css";
import { Input } from "antd";
import SearchPosters from "./SearchPosters";
import { motion } from "framer-motion";
import { useSearchParams } from "react-router-dom";
import { pageTransition } from "../common/animations";
import { Helmet } from "react-helmet";

const { Search } = Input;

const SearchField = (props) => {
  const [searchParams, setSearchParams] = useSearchParams();
  let query = "";
  if (searchParams.get("q")) {
    query = searchParams.get("q");
  }

  return (
    <motion.div {...pageTransition}>
      <Helmet>
        <title>Search Info About Specific Movies</title>
        <meta
          name="description"
          content="Search information about specific Movies. You can search any movie by specifying its title,
                    and then click on one of the results that appear on the screen to view the Information."
        />
      </Helmet>
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
