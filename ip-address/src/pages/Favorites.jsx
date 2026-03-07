import { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { FavoritesContext } from "../context/FavoritesContext";
import { IPContext } from "../context/IPContext";
import InfoDisplay from "../component/InfoDisplay";
import bgMobile from "../images/pattern-bg-mobile.png";

const Favorites = () => {
  const { favorites } = useContext(FavoritesContext);
  const navigate = useNavigate();

  const displayFav = (ip) => {
    const { fetchLocation } = IPContext();
    fetchLocation(ip);
    navigate("/");
  };
  // console.log("favs list");
  // console.log(favorites);
  const favoritesCount = favorites?.length ?? 0;

  const mainStyle = {
    backgroundImage: `url(${bgMobile})`,
    minWidth: "450px",
    paddingBottom: "10px",
    backgroundSize: "cover",
    backgroundPosition: "center",
    display: "flex",
    flexDirection: "column",
  };

  const listStyle = {
    width: '100%',
    display: "flex",
    flexDirection: "column",
    alignItems: 'center',
    //marginRight: '100px'
  };

  return (
    <div style={mainStyle}>
      <div>
        <h2>FAVORITE LOCATIONS</h2>
        <Link style={{ color: "white" }} to="/">
          HOME
        </Link>
      </div>
      <div style={listStyle}>
        {favoritesCount === 0 ? (
          <p>NONE SAVED</p>
        ) : (
          <ul>
            {favorites.map((item) => (
              <div key={item.ip}>
                {/* {console.log(item)} */}
                <InfoDisplay data={item}></InfoDisplay>
                <div onClick={() => displayFav(item.ip)}></div>
              </div>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
};

export default Favorites;
