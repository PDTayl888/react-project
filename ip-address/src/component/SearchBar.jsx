import { useContext } from "react";

import { IPContext } from "../context/IPContext";
import { useState } from "react";

const SearchBar = () => {
  const [input, setInput] = useState("");
  const { fetchLocation } = useContext(IPContext);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (input.trim()) {
      fetchLocation(input);
    }
    setInput("");
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Enter IP address.."
        value={input}
        onChange={(e) => setInput(e.target.value)}
      />
      <button type="submit">Search</button>
    </form>
  );
};
export default SearchBar;
