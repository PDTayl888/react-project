import { locationData, loading } from "../context/IPContext";
import {
  addToFavorites,
  removeFromFavorites,
  isFavorite,
} from "../context/FavoritesContext";

const InfoDisplay = () => {
  if (!locationData || !locationData.location) return null;

  const { ip, isp, location } = locationData;
  const favStatus = isFavorite(ip);

  const toggleFavorite = () => {
    if (favStatus) {
      removeFromFavorites(ip);
    } else {
      addToFavorites(locationData);
    }
  };

  return (
    <div>
      <div>
        <button onClick={toggleFavorite}>{favStatus ? "unFav" : "Fav"}</button>
      </div>
      <div>
        <span>IP ADDRESS</span>
        <p>{loading ? "LOADING..." : ip}</p>
      </div>
      <div>
        <span>LOCATION</span>
        <p>
          {loading
            ? "LOADING..."
            : `${location.city}, ${location.region} ${location.postalCode}`}
        </p>
      </div>
      <div>
        <span>TIMEZONE</span>
        <p>{loading ? "Loading..." : `UTC ${location.timezone}`}</p>
      </div>
      <div>
        <span>ISP</span>
        <p>{loading ? "Loading..." : isp}</p>
      </div>
    </div>
  );
};

export default InfoDisplay;
