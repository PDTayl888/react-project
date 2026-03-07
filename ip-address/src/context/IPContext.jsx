import { createContext, useState, useEffect, useContext } from "react";
import useFetch from "../hooks/useFetch";

const mockData = {
  ip: "222.33.44.222",
  isp: "Comcast",
  location: {
    city: "Garyville",
    region: "Pa",
    postalCode: "15243",
    timezone: "-05:000",
    lat: 40.4406,
    lng: -67.6767,
  },
};

export const IPContext = createContext();

const IPProvider = ({ children }) => {
  const [query, setQuery] = useState("");
  const [locationData, setLocationData] = useState();

  const apiKey = 'at_KP6w8IL9oQP8yZacXg4P6tHyVCD4y';

const url = query
  ? `https://geo.ipify.org/api/v2/country,city?apiKey=${apiKey}&ipAddress=${query}`
  : `https://geo.ipify.org/api/v2/country,city?apiKey=${apiKey}`;
  
  const { data, loading, error } = useFetch(url);

  useEffect(() => {
    if (data) {
      setLocationData(data);
    }
  }, [data]);

  const fetchLocation = (ip) => {
    setQuery(ip);
  };
  return (
    <IPContext.Provider value={{ locationData, loading, error, fetchLocation }}>
      {children}
    </IPContext.Provider>
  );
};

export default IPProvider;
