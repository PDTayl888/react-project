import SearchBar from "../component/SearchBar";
import InfoDisplay from "../component/InfoDisplay";
import MapView from "../component/MapView";
import Favorites from "./Favorites";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div>
      <h1>IP Address Tracker</h1>
      <nav>
        <Link to="/favorites">Favorites</Link>
      </nav>
      <SearchBar></SearchBar>
      <InfoDisplay></InfoDisplay>
      <MapView></MapView>
    </div>
  );
};

export default Home;
