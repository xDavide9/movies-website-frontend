import styles from "./Home.module.css";
import { Typography, Button, Select } from "antd";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import logo from "./tmdblogo.svg";

const { Title, Paragraph } = Typography;
const { Option } = Select;

const Home = () => {
  const navigate = useNavigate();

  return (
    <motion.div className={styles.topLevelContainer}>
      <ul>
        <li>
          <Title level={3}>Language</Title>
          <Paragraph className={styles.fontMedium}>
            Please Select Your desired Language
          </Paragraph>
          <Select defaultValue="en">
            <Option value="en">English</Option>
            <Option value="it">Italian</Option>
            <Option value="de">German</Option>
            <Option value="es">Spanish</Option>
            <Option value="fr">French</Option>
          </Select>
        </li>
        <li>
          <Title level={3}>Discover</Title>
          <Paragraph className={styles.fontMedium}>
            Discover new Movies based on Popularity, Year and Genre
          </Paragraph>
          <Button type="primary" onClick={() => navigate("/discover")}>
            Discover Now
          </Button>
        </li>
        <li>
          <Title level={3}>Search</Title>
          <Paragraph className={styles.fontMedium}>
            Search a specific Movie with its Title
          </Paragraph>
          <Button type="primary" onClick={() => navigate("/search")}>
            Search Now
          </Button>
        </li>
      </ul>
      <div>
        <Paragraph className={styles.fontSmall}>Powered by</Paragraph>
        <img src={logo} alt="tdmb logo" className={styles.tmdbLogo} />
      </div>
    </motion.div>
  );
};

export default Home;
