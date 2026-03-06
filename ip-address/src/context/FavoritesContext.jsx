import { createContext } from "react";
import useLocalStorage from "../hooks/useLocalStorage";

export const FavoritesContext = createContext();

const FavoritesProvider = ({ children }) => {
  const [favorites, setFavorites] = useLocalStorage([]);

  const addToFavorites = (location) => {
    if (!isFavorite(location.ip)) {
      setFavorites([...favorites, location]);
    }
  };

  const removeFromFavorites = (ip) => {
    setFavorites(favorites.filter((item) => item.ip !== ip));
  };

  const isFavorite = (ip) => {
    return (favorites ?? []).find((item) => item.ip === ip);
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
