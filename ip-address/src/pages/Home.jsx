import SearchBar from "../component/SearchBar";
import InfoDisplay from "../component/InfoDisplay";
import MapView from "../component/MapView";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div>
      <header>
        <h1>IP Address Tracker</h1>
        <nav>
          <Link to="/favorites">Favorites</Link>
        </nav>
        <SearchBar />
        <InfoDisplay />
      </header>

      <main>
        <MapView />
      </main>
    </div>
  );
};

export default Home;
