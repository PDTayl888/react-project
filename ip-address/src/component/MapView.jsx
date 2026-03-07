import { MapContainer, TileLayer, Marker, Popup, useMap } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import L from "leaflet";
import { useEffect } from "react";
import { IPContext } from "../context/IPContext";
import { useContext } from "react";
import locationSvg from "../images/icon-location.svg";

// import {
//   FavoritesContext
// } from "../context/FavoritesContext";

import icon from "leaflet/dist/images/marker-icon.png";
import iconShadow from "leaflet/dist/images/marker-shadow.png";

const RecenterMap = ({ lat, lng }) => {
  const map = useMap();

  useEffect(() => {
    if (lat && lng) {
      map.flyTo([lat, lng], 13, {
        animate: true,
        duration: 1.5, 
      });
    }
  }, [lat, lng, map]);

  return null;
};

let CustomIcon = L.icon({
  iconUrl: locationSvg,
  iconSize: [46, 56],
  iconAnchor: [23, 56],
  popupAnchor: [0, -50],
});
L.Marker.prototype.options.icon = CustomIcon;



const MapView = () => {
  const { locationData } = useContext(IPContext);

  if (!locationData || !locationData.location)
    return <div className="map-placeholder">Loading Map...</div>;

  const { lat, lng } = locationData.location;
  const position = [lat, lng];

  return (
    <section>
      <MapContainer
        center={position}
        zoom={13}
        scrollWheelZoom={true}
        style={{ height: "70vh" }}
      >
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />

        <RecenterMap lat={lat} lng={lng} />

        <Marker position={position} icon={CustomIcon}>
          <Popup>
            {locationData.ip} <br /> {locationData.location.city}
          </Popup>
        </Marker>
      </MapContainer>
    </section>
  );
};

export default MapView;
