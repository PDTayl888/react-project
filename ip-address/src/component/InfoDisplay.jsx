import { IPContext } from "../context/IPContext";
import { useContext } from "react";
import { FavoritesContext } from "../context/FavoritesContext";

const InfoDisplay = ({ data }) => {
  const cardStyle = {
    background: "white",
    borderRadius: "15px",
    padding: "1.5rem",
    display: "flex",
    flexDirection: "column",
    gap: "1rem",
    boxShadow: "0 10px 20px rgba(0,0,0,0.1)",
    textAlign: "center",
  };

  const sectionStyle = {
    display: "flex",
    flexDirection: "column",
    gap: "0.25rem",
  };

  const buttonSectionStyle = {
    display: "flex",
    flexDirection: "column",
    gap: "0.25rem",
  };

  const labelStyle = {
    fontSize: "0.65rem",
    fontWeight: 700,
    color: "#9b9b9b",
  };

  const infoStyle = {
    fontSize: "1.25rem",
    fontWeight: 700,
    color: "#2c2c2c",
    margin: 0,
  };

  const buttonStyle = {
    display: "flex",
    top: "100px",
    right: "10px",
    background: "none",
    border: "none",
    cursor: "pointer",
    fontSize: "1.2rem",
    padding: "5px",
    width: "20%",
    outline: "none",
  };

  const { removeFromFavorites, addToFavorites, isFavorite } =
    useContext(FavoritesContext);

  const { locationData, loading } = useContext(IPContext);

  const activeData = data || locationData;
  if (!activeData || !activeData.location) return null;

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
    <div style={cardStyle}>
      <div style={sectionStyle}>
        <span style={labelStyle}>IP ADDRESS</span>
        <p style={infoStyle}>{loading ? "LOADING..." : ip}</p>
      </div>
      <div style={sectionStyle}>
        <span style={labelStyle}>LOCATION</span>
        <p style={infoStyle}>
          {loading
            ? "LOADING..."
            : `${location.city}, ${location.region} ${location.postalCode}`}
        </p>
      </div>
      <div style={sectionStyle}>
        <span style={labelStyle}>TIMEZONE</span>
        <p style={infoStyle}>
          {loading ? "Loading..." : `UTC ${location.timezone}`}
        </p>
      </div>
      <div style={sectionStyle}>
        <span style={labelStyle}>ISP</span>
        <p style={infoStyle}>{loading ? "Loading..." : isp}</p>
      </div>
      <div style={buttonSectionStyle}>
        <button style={buttonStyle} onClick={toggleFavorite}>
          {favStatus ? "❤️" : "🤍"}
        </button>
      </div>
    </div>
  );
};

export default InfoDisplay;
