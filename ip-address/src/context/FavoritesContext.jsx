import { createContext } from "react";
import useLocalStorage from "../hooks/useLocalStorage";

export const FavoritesContext = createContext();

const FavoritesProvider = ({ children }) => {
  const [favorites, setFavorites] = useLocalStorage('favorites', []);

  const addToFavorites = (location) => {
    console.log("ADDED");
    if (!isFavorite(location.ip)) {
      setFavorites([...favorites, location]);
    }
  };

  const removeFromFavorites = (ip) => {
    console.log("REMOVED");
    console.log(favorites);
    setFavorites(favorites.filter((item) => item.ip !== ip));
  };

  const isFavorite = (ip) => {
        console.log("ADDED");
    console.log(favorites);

    const isIt = !!favorites?.find((item) => item.ip === ip);
    return isIt;
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
