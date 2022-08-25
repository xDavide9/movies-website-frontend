import "./App.css";
import { Routes, Route, useNavigate, useLocation } from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import ErrorPage from "./common/ErrorPage";
import Home from "./home/Home";
import CustomLayout from "./common/CustomLayout";
import SearchField from "./search/SearchField";
import MovieInfo from "./common/MovieInfo";
import DiscoverSliders from "./discover/DiscoverSliders";

const App = () => {
  const navigate = useNavigate();
  const location = useLocation();

  return (
    <CustomLayout navigate={navigate} location={location}>
      <AnimatePresence>
        <Routes location={location} key={location.pathname}>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/discover" element={<DiscoverSliders />} />
          <Route exact path="/discover/:id/:language" element={<MovieInfo />} />
          <Route
            exact
            path="/search"
            element={<SearchField language={"en"} />}
          />
          <Route exact path="/search/:id/:language" element={<MovieInfo />} />
          <Route path="*" element={<ErrorPage />} />
        </Routes>
      </AnimatePresence>
    </CustomLayout>
  );
};

export default App;
