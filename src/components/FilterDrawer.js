import React, { useState } from "react";
import stays from "../stays.json";

const locations = Array.from(
  new Set(stays.map((stay) => `${stay.city}, ${stay.country}`))
);

const FilterDrawer = ({
  visible,
  onClose,
  onFilter,
  guests,
  adults,
  children,
  onAdultsIncrement,
  onAdultsDecrement,
  onChildrenIncrement,
  onChildrenDecrement,
  setProperties,
  setGuests,
}) => {
  const [location, setLocation] = useState("");

  const handleLocationChange = (value) => {
    setLocation(value);
  };

  const handleFilter = () => {
    const filters = {
      location: location.trim().toLowerCase(),
      guests: guests,
    };

    onFilter(filters);
  };

  const handleKeyPress = (e) => {
    if (e.key === "Enter") {
      handleFilter();
    }
  };

  return (
    // <drawer placement="right" visible={visible} onClose={onClose}>
    <div className="filter-drawer">
      <h3>Edit your search</h3>
      <div className="filter-input">
        <label>Location</label>
        <select
          className="location"
          placeholder="Location"
          value={location}
          onChange={handleLocationChange}
        >
          {locations.map((location, index) => {
            const [city, country] = location.split(", ");
            return (
              <option key={index} value={location}>
                <span className="material-symbols-outlined locate-icon">
                  location_on
                </span>
                {city}, {country}
              </option>
            );
          })}
        </select>
      </div>
      <div className="filter-input">
        <label>Guests</label>
        <select
          className="input-wrap"
          type="number"
          min={0}
          max={10}
          value={guests}
          onChange={(e) => setGuests(parseInt(e.target.value))}
          placeholder="Add guests"
        />
        {guests > 0 && (
          <>
            <div className="guests">
              <label>Adults</label>
              <div className="guest-counter">
                <button className="counter-btn" onClick={onAdultsDecrement}>
                  -
                </button>
                <input
                  className="input-wrap"
                  type="number"
                  min={0}
                  max={guests}
                  value={adults}
                  onChange={(e) => onAdultsIncrement(parseInt(e.target.value))}
                />
                <button className="counter-btn" onClick={onAdultsIncrement}>
                  +
                </button>
              </div>
            </div>
            <div className="guests">
              <label>Children</label>
              <div className="guest-counter">
                <button className="counter-btn" onClick={onChildrenDecrement}>
                  -
                </button>
                <input
                  className="input-wrap"
                  type="number"
                  min={0}
                  max={guests - adults}
                  value={children}
                  onChange={(e) =>
                    onChildrenIncrement(parseInt(e.target.value))
                  }
                />
                <button className="counter-btn" onClick={onChildrenIncrement}>
                  +
                </button>
              </div>
            </div>
          </>
        )}
      </div>

      <button
        className="filter-button"
        onClick={handleFilter}
        onKeyDown={handleKeyPress}
      >
        <span className="material-symbols-outlined">search</span>
        <span className="search-btn">Search</span>
      </button>
    </div>
    // </drawer>
  );
};

export default FilterDrawer;
