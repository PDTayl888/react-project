import SearchBar from "../component/SearchBar";
import InfoDisplay from "../component/InfoDisplay";
import MapView from "../component/MapView";
import { Link } from "react-router-dom";
import bgMobile from "../images/pattern-bg-mobile.png";

const Home = () => {
  const HEADER_HEIGHT = 280;

  const headerStyle = {
    backgroundImage: `url(${bgMobile})`,
    backgroundSize: "cover",
    backgroundPosition: "center",
    // border: "20px solid red",
    height: `${HEADER_HEIGHT}`,
    zIndex: 10,
    position: "relative",
    padding: "8px 35px 55px 35px",
    boxSizing: "border-box",
  };

  const floatStyle = {
    position: "absolute",
    zIndex: 100,
    top: `${HEADER_HEIGHT}px`,
    left: "50%",
    transform: "translate(-50%, -30%)",
  };

  const mainStyle = {
    flex: 1,
    position: "relative",
    backgroundColor: "yellow",
    backgroundImage: 'url("../images/pattern-bg-mobile.png")',
    zIndex: 10,
    // border: "20px solid red",
  };

  const appStyle = {
    boxShadow: "0 10px 20px rgba(0,0,0,0.1)",
    minWidth: "450px",
    display: "flex",
    flexDirection: "column",
    minHeight: "100vh",
    position: "relative",
    overflowX: "hidden",
    // border: "30px solid green",
  };

  return (
    <div style={appStyle}>
      <header style={headerStyle}>
        <h2>IP Address Tracker</h2>
        <nav>
          <Link style={{ color: "white" }} to="/favorites">
            Favorites
          </Link>
        </nav>
        <SearchBar />
      </header>
      <div style={floatStyle}>
        <InfoDisplay />
      </div>

      <main style={mainStyle}>
        <MapView />
      </main>
    </div>
  );
};

export default Home;
