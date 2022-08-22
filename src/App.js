import "./App.css";
import { Routes, Route, useNavigate, useLocation } from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import ErrorPage from "./miscellaneous/ErrorPage";
import Home from "./home/Home";
import CustomLayout from "./miscellaneous/CustomLayout";
import SearchButtons from "./search/SearchButtons";
import MovieInfo from "./miscellaneous/MovieInfo";

const App = () => {
  const navigate = useNavigate();
  const location = useLocation();

  if (location.pathname === "/") {
    window.scrollTo(0, 0);
    document.body.style.overflow = "hidden";
  } else {
    document.body.style.overflow = "auto";
  }

  return (
    <CustomLayout navigate={navigate} location={location}>
      <AnimatePresence>
        <Routes location={location} key={location.pathname}>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/search" element={<SearchButtons />} />
          <Route exact path="/search/:id/:language" element={<MovieInfo />} />
          <Route path="*" element={<ErrorPage />} />
        </Routes>
      </AnimatePresence>
    </CustomLayout>
  );
};

export default App;
