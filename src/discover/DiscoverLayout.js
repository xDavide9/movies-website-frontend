import "./DiscoverLayout.css";
import DiscoverGenre from "./DiscoverGenre";
import DiscoverPopular from "./DiscoverPopular";
import DiscoverRange from "./DiscoverRange";
import { motion } from "framer-motion";

// the page will consist of a simple layout with 3 rows that will show results

const DiscoverLayout = () => {
  return (
    <motion.div id="discover-layout-top-level-container">
      <DiscoverPopular />
      <DiscoverRange />
      <DiscoverGenre />
    </motion.div>
  );
};

export default DiscoverLayout;
