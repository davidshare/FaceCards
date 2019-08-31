import React from "react";
import "./search-box.styles.css";

export const SearchBox = ({ placeholder, handleChange }) => (
  <input
    type="text"
    className="search-box"
    placeholder={placeholder}
    onChange={handleChange}
  />
);
