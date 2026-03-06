import { createContext, useState, useEffect, useContext } from 'react';
import useFetch from '../hooks/useFetch';


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
    }
};

const IPContext = createContext();

export const IPProvider = (( children )) => {
    const [query, setQuery] = useState('');

    const { data, loading, error } = useFetch(url=null);

      return (
        <IPContext.Provider
          value={{ }}
        >
          {children}
        </IPContext.Provider>
      );
}:

export default IPProvider;