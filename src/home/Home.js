import "./Home.css";
import { Typography, Button } from "antd";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import logo from "./tmdblogo.svg";

const { Title } = Typography;

const Home = () => {
  const navigate = useNavigate();

  return (
    <motion.div id="home">
      <Title id="home-title" level={1}>
        Quentertain
      </Title>

      <Button type="primary" onClick={() => navigate("/search")}>
        Start Now
      </Button>
      <img src={logo} alt="tdmb logo" id="home-tmdb-logo" />
    </motion.div>
  );
};

export default Home;
