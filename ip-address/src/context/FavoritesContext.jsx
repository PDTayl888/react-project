import { createContext } from "react";
import useLocalStorage from "../hooks/useLocalStorage";

export const FavoritesContext = createContext();

const FavoritesProvider = ({ children }) => {
  const [favorites, setFavorites] = useLocalStorage([]);

  const addToFavorites = (recipe) => {
    setFavorites([...favorites, recipe]);
  };

  const removeFromFavorites = (id) => {
    setFavorites(favorites.filter((recipe) => recipe.idMeal !== id));
  };

  const isFavorite = (id) => {
    const isFound = favorites.find((item) => item.idMeal === id);

    return isFound !== undefined;
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
