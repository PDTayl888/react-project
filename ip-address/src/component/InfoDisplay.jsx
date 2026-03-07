import { IPContext } from "../context/IPContext";
import { useContext } from "react";
import { FavoritesContext } from "../context/FavoritesContext";
import { stopPropagation } from "./../../node_modules/leaflet/src/dom/DomEvent";
import { useEffect, useState } from "react";

const InfoDisplay = ({ data }) => {
  const [isDesktop, setIsDesktop] = useState(window.innerWidth > 800);

  useEffect(() => {
    const handleResize = () => setIsDesktop(window.innerWidth > 800);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const cardStyle = {
    background: "white",
    borderRadius: "15px",
    padding: "1.5rem",
    display: "flex",
    flexDirection: isDesktop ? "row" : "column",
    justifyContent: isDesktop ? "space-between" : "center",
    alignItems: isDesktop ? "center" : "stretch",
    gap: isDesktop ? "0" : "1.5rem",
    boxShadow: "0 100px 200px rgba(0,0,0,0.1)",
    textAlign: "center",
    maxWidth: isDesktop ? "1100px" : "320px",
    maxHeight: "350px",
    margin: "0 auto",
    width: "80%",
  };

  const sectionStyle = {
    display: "flex",
    flexDirection: "column",
    borderRight: isDesktop ? "1px solid #bdb3b3" : "none",
    paddingRight: isDesktop ? ".4rem" : "0",
    paddingLeft: isDesktop ? ".1rem" : "0",
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
    fontSize: isDesktop ? "1.5rem" : "1.25rem",
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
  const { ip, isp, location } = activeData;
  const favStatus = isFavorite(ip);

  const toggleFavorite = (e) => {
    e.preventDefault();
    e.stopPropagation();

    if (favStatus) {
      removeFromFavorites(ip);
    } else {
      addToFavorites(activeData);
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
          {favStatus ? "❤️" : "🩶"}
        </button>
      </div>
    </div>
  );
};

export default InfoDisplay;
