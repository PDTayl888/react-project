import { createContext, useState, useEffect, useContext } from "react";
import useFetch from "../hooks/useFetch";

const mockData = {
  ip: "222.33.44.222",
  isp: "Comcast",
  location: {
    city: "Pittsburgh",
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
  const [locationData, setLocationData] = useState(mockData);

  const url = query
    ? `https://geo.ipify.org/api/v2/country,city?apiKey=${apiKey}&ipAddress=${query}`
    : null;

  const { data, loading, error } = useFetch(url);

  useEffect(() => {
    if (data) {
      setLocationData(mockData);
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
