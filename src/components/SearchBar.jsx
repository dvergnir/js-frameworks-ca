import React, { useState } from "react";

const SearchBar = ({ products, onSearch }) => {
  const [searchTerm, setSearchTerm] = useState("");
  const [suggestions, setSuggestions] = useState([]);

  const handleInputChange = (event) => {
    const inputValue = event.target.value;
    setSearchTerm(inputValue);
    onSearch(inputValue);

    if (inputValue.trim() !== "") {
      const filteredSuggestions = products.filter((product) =>
        product.title.toLowerCase().includes(inputValue.toLowerCase())
      );
      setSuggestions(filteredSuggestions);
    } else {
      setSuggestions([]);
    }
  };

  const handleSuggestionClick = (suggestion) => {
    setSearchTerm(suggestion.title);
    onSearch(suggestion.title);
    setSuggestions([]);
  };

  return (
    <div>
      <input
        className="search-bar"
        type="text"
        placeholder="Search..."
        value={searchTerm}
        onChange={handleInputChange}
      />
      {suggestions.length > 0 && (
        <ul className="autofill-suggestions">
          {suggestions.map((suggestion) => (
            <li
              key={suggestion.id}
              onClick={() => handleSuggestionClick(suggestion)}
            >
              {suggestion.title}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default SearchBar;
