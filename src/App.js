import "./App.css";
import { Routes, Route, useNavigate, useLocation } from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import ErrorPage from "./common/ErrorPage";
import Home from "./home/Home";
import CustomLayout from "./common/CustomLayout";
import SearchSection from "./search/SearchSection";
import MovieInfo from "./common/MovieInfo";
import DiscoverLayout from "./discover/DiscoverLayout";

const App = () => {
  const navigate = useNavigate();
  const location = useLocation();

  return (
    <CustomLayout navigate={navigate} location={location}>
      <AnimatePresence>
        <Routes location={location} key={location.pathname}>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/discover" element={<DiscoverLayout />} />
          <Route exact path="/search" element={<SearchSection />} />
          <Route exact path="/search/:id/:language" element={<MovieInfo />} />
          <Route path="*" element={<ErrorPage />} />
        </Routes>
      </AnimatePresence>
    </CustomLayout>
  );
};

export default App;
