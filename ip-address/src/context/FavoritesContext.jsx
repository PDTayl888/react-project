import { createContext } from "react";
import useLocalStorage from "../hooks/useLocalStorage";

export const FavoritesContext = createContext();

const FavoritesProvider = ({ children }) => {
  const [favorites, setFavorites] = useLocalStorage([]);

  const addToFavorites = (location) => {
    console.log("ADDED");
    console.log(location.ip);
    console.log(favorites);
    if (!isFavorite(location.ip)) {
      setFavorites([...favorites, location.ip]);
    }
    console.log("filled below");
    console.log(favorites);
  };

  const removeFromFavorites = (ip) => {
    console.log('REMOVED');
    setFavorites(favorites.filter((item) => item.ip !== ip));
  };

  const isFavorite = (ip) => {
    return !!favorites?.find((item) => item.ip === ip);
  };

  return (
    <FavoritesContext.Provider
      value={{ favorites, addToFavorites, removeFromFavorites, isFavorite }}
    >
      {children}
    </FavoritesContext.Provider>
  );
};

export default FavoritesProvider;
