import { useState, useEffect } from "react";

const useLocalStorage = (key, initialValue=[]) => {
  // console.log(initialValue)
  // console.log("initial value above")
  const [value, setValue] = useState(() => {
    try {
      // console.log(key)
      const item = localStorage.getItem(key);
      // console.log(item)

      if (item && item !== "undefined") {
        const parsed = JSON.parse(item);

        return Array.isArray(parsed) ? parsed : initialValue;
      }
      return initialValue;
    } catch (error) {
      console.error(error);
      return initialValue;
    }
  });

  useEffect(() => {
    try {
      localStorage.setItem(key, JSON.stringify(value));
    } catch (error) {
      console.error(error);
    }
  }, [key, value]);

  return [value, setValue];
};

export default useLocalStorage;
