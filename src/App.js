import React, { useState, useEffect } from "react";
import PropertyList from "./PropertyList";
import FilterDrawer from "./FilterDrawer";
import logo from "./logo.png";
import stays from "./stays.json";

const App = () => {
  const [filterVisible, setFilterVisible] = useState(false);
  const [properties, setProperties] = useState([]);

  useEffect(() => {
    setProperties(stays);
  }, []);

  const handleOpenFilter = () => {
    setFilterVisible(true);
  };

  const handleCloseFilter = () => {
    setFilterVisible(false);
  };

  const handleFilter = () => {
    // Perform filtering logic based on location and number of guests
    // Update the properties state with filtered data
    // ...
  };

  // Extract unique locations from stays.json
  const locations = Array.from(new Set(stays.map((stay) => stay.location)));

  return (
    <div>
      <header>
        <img src={logo} alt="Windbnb logo" className="header-img" />
      </header>
      <main>
        <div className="search-bar">
          <select className="location-select">
            <option value="">Location</option>
            {locations.map((location, index) => (
              <option key={index} value={location}>
                <span class="material-symbols-outlined">location_on</span>
                {location}
              </option>
            ))}
          </select>
          <input
            className="guest-input"
            type="number"
            placeholder="Add Guests"
          />
          <button className="btn-main-search" onClick={handleOpenFilter}>
            <span className="material-symbols-outlined ">search</span>
          </button>
        </div>
        <PropertyList properties={properties} />
        <FilterDrawer
          visible={filterVisible}
          onClose={handleCloseFilter}
          onFilter={handleFilter}
        />
      </main>
      <footer>
        <p>created by yunyun-c - devChallenges.io</p>
      </footer>
    </div>
  );
};

export default App;
