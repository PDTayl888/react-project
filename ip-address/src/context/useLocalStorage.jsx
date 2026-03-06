import { useState, useEffect } from "react";

const useLocalStorage = (recipes) => {
  const [savedRecipes, setSavedRecipes] = useState(() => {
    try {
      const item = localStorage.getItem("fav-recipes");
      return item ? JSON.parse(item) : recipes;
    } catch (error) {
      console.error(error);
      return recipes;
    }
  });

  useEffect(() => {
    try {
      localStorage.setItem("fav-recipes", JSON.stringify(savedRecipes));
    } catch (error) {
      console.error(error);
    }
  }, [savedRecipes]);

  return [savedRecipes, setSavedRecipes];
};

export default useLocalStorage;
