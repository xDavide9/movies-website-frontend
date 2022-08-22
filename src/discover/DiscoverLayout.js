import DiscoverGenre from "./DiscoverGenre";
import "./DiscoverLayout.css";
import DiscoverPopular from "./DiscoverPopular";
import DiscoverRange from "./DiscoverRange";

// the page will consist of a simple layout with 3 rows that will show results

const DiscoverLayout = () => {
  return (
    <div id="discover-layout-top-level-container">
      <DiscoverPopular />
      <DiscoverRange />
      <DiscoverGenre />
    </div>
  );
};

export default DiscoverLayout;
