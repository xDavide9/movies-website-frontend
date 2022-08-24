import styles from "./Home.module.css";
import { Typography, Button } from "antd";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import logo from "./tmdblogo.svg";

const { Title } = Typography;

const Home = () => {
  const navigate = useNavigate();

  return (
    <motion.div className={styles.home}>
      <Title className={styles.title} level={1}>
        Quentertain
      </Title>
      <Button type="primary" onClick={() => navigate("/search")}>
        Start Now
      </Button>
      <img src={logo} alt="tdmb logo" className={styles.tmdbLogo} />
    </motion.div>
  );
};

export default Home;
