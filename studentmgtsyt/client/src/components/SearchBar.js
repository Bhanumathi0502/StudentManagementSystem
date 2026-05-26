import React, { useState } from 'react';
import './SearchBar.css';

function SearchBar({ onSearch }) {
  const [searchQuery, setSearchQuery] = useState('');

  const handleChange = (e) => {
    const value = e.target.value;
    setSearchQuery(value);
    onSearch(value);
  };

  const handleClear = () => {
    setSearchQuery('');
    onSearch('');
  };

  return (
    <div className="search-bar">
      <input
        type="text"
        placeholder="Search by name, email, or roll number..."
        value={searchQuery}
        onChange={handleChange}
        className="search-input"
      />
      {searchQuery && (
        <button className="clear-btn" onClick={handleClear} title="Clear search">
          ✕
        </button>
      )}
    </div>
  );
}

export default SearchBar;
