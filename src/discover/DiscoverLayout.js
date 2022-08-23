import "./DiscoverLayout.css";
import DiscoverGenre from "./DiscoverGenre";
import DiscoverPopular from "./DiscoverPopular";
import DiscoverRange from "./DiscoverRange";
import { motion } from "framer-motion";

// the page will consist of a simple layout with 3 rows that will show results

const DiscoverLayout = () => {
  return (
    <motion.div
      id="discover-layout-top-level-container"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <DiscoverPopular />
      <DiscoverRange />
      <DiscoverGenre />
    </motion.div>
  );
};

export default DiscoverLayout;
