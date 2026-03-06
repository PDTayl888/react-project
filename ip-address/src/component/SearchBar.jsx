import { useContext } from "react";

import { IPContext } from "../context/IPContext";
import { useState } from "react";
import iconArrow from "../images/icon-arrow.svg";

const SearchBar = () => {
  const [input, setInput] = useState("");
  const { fetchLocation } = useContext(IPContext);

  const formStyle = {
    display: "flex",
    justifyContent: "center",
    maxWidth: "250px",
    margin: "0 auto",
  };

  const inputStyle = {
    padding: "1rem",
    borderRadius: "15px 0 0 15px",
    border: "none",
    width: "100%",
    fontSize: "1rem",
  };

  const buttonStyle = {
    background: "black",
    color: "white",
    border: "none",
    padding: "0 1.25rem",
    borderRadius: "0 15px 15px 0",
    cursor: "pointer",
    fontSize: "1.2rem",
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (input.trim()) {
      fetchLocation(input);
    }
    setInput("");
  };

  return (
    <form style={formStyle} onSubmit={handleSubmit}>
      <input
        style={inputStyle}
        type="text"
        placeholder="Enter IP address.."
        value={input}
        onChange={(e) => setInput(e.target.value)}
      />
      <button type="submit" style={buttonStyle}>
        <img src={iconArrow} alt="Search" style={{ width: '11px', height: '14px' }} />
      </button>
    </form>
  );
};
export default SearchBar;
