import React, { useState, useEffect } from "react";
import PropertyList from "./PropertyList";
import FilterDrawer from "./FilterDrawer";
import logo from "./logo.png";
import stays from "./stays.json";
import { Select } from "antd";
const { Option } = Select;

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

  const locations = Array.from(
    new Set(stays.map((stay) => `${stay.city}, ${stay.country}`))
  );

  return (
    <div>
      <header>
        <img src={logo} alt="Windbnb logo" className="header-img" />
      </header>
      <main>
        <div className="search-bar">
          <Select className="location-select" defaultValue="Location">
            {locations.map((location, index) => {
              const [city, country] = location.split(", ");
              return (
                <Option key={index} value={location}>
                  {city}, {country}
                </Option>
              );
            })}
          </Select>
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
