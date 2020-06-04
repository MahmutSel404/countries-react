import React, { useState } from "react";

function Search({ search, setSearch }) {
  function handleChange(event) {
    setSearch(event.target.value);
  }
  return (
    <div>
      <header>
        <input
          type="text"
          onChange={handleChange}
          value={search}
          placeholder="search the country..."
        />
      </header>
    </div>
  );
}

export default Search;
