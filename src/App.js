import React, { useState } from "react";
import PropertyList from "./components/PropertyList";
import FilterDrawer from "./components/FilterDrawer";
import staysData from "./stays.json";
import logo from "./logo.png";

function App() {
  const [filter, setFilter] = useState({ location: "", guests: null });

  const handleFilterChange = (newFilter) => {
    setFilter(newFilter);
  };

  const filteredStays = staysData.filter((stay) => {
    const isLocationMatch = filter.location
      ? stay.city.toLowerCase() === filter.location.toLowerCase()
      : true;
    const isGuestsMatch = filter.guests
      ? stay.maxGuests >= filter.guests
      : true;
    return isLocationMatch && isGuestsMatch;
  });

  return (
    <div className="App">
      <header>
        <div className="logo-img">
          <img src={logo} alt="logo" />
        </div>
      </header>
      <FilterDrawer filter={filter} onFilterChange={handleFilterChange} />
      <div className="property-list-info">
        <span>{filteredStays.length} properties found</span>
      </div>
      <PropertyList properties={filteredStays} />
    </div>
  );
}

export default App;
