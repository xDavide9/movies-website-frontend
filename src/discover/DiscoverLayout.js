import styles from "./DiscoverLayout.module.css";
import DiscoverGenre from "./DiscoverGenre";
import DiscoverPopular from "./DiscoverPopular";
import DiscoverRange from "./DiscoverRange";
import { motion } from "framer-motion";

// the page will consist of a simple layout with 3 rows that will show results

const DiscoverLayout = () => {
  return (
    <motion.div className={styles.topLevelContainer}>
      <DiscoverPopular />
    </motion.div>
  );
};

export default DiscoverLayout;
