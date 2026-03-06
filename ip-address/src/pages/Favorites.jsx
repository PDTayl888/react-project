import { Link, useNavigate } from "react-router-dom";
import { FavoritesContext } from "../context/FavoritesContext";
import { IPContext } from '../context/IPContext';

const Favorites = () => {
  const { Favorites, removeFromFavorites } = FavoritesContext();
  const navigate = useNavigate();

  const displayFav = (ip) => {
    const { fetchLocation } = IPContext();
    fetchLocation(ip);
    navigate("/");
  };

  return (
    <div>
      <div>
        <h1>FAVORITE LOCATIONS</h1>
        <Link to="/">HOME</Link>
      </div>
      <div>
        {Favorites.length === 0 ? (
          <p>NONE SAVED</p>
        ) : (
          <ul>
            {Favorites.map((item) => (
              <li key={item.ip}>
                <div onClick={() => displayFav(item.ip)}>
                  <p>
                    {item.location.city}, {item.location.region}
                  </p>
                </div>
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
};

export default Favorites;
