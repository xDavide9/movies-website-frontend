import "./Home.css";
import { Typography, Button, Divider } from "antd";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import logo from "./tmdblogo.svg";

const { Title, Text } = Typography;

const Home = () => {
  const navigate = useNavigate();

  return (
    <motion.div
      className="fullscreen home"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <div className="home-logo-container">
        {/* replace with logo */}
        <Title id="home-title" level={1}>
          Quentertain
        </Title>
        <div id="home-line"></div>
        <Title level={3} id="home-subtitle">
          Find Your Favourite Films And More
        </Title>
      </div>
      <div>
        <Title level={3} id="home-powered">
          Powered By
        </Title>
        <img src={logo} alt="tdmb logo" className="tmdb-logo" />
      </div>
      {/* create a better button */}
      {/* <Button type="primary" onClick={() => navigate("/search")}>
        Start Now
      </Button> */}
    </motion.div>
  );
};

export default Home;
