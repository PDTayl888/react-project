import { useContext } from "react";

import { Link, useNavigate } from "react-router-dom";
import { FavoritesContext } from "../context/FavoritesContext";
import { IPContext } from "../context/IPContext";
import InfoDisplay from "../component/InfoDisplay";

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

  return (
    <div>
      <div>
        <h1>FAVORITE LOCATIONS</h1>
        <Link to="/">HOME</Link>
      </div>
      <div>
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
