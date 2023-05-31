import React from "react";
import { Drawer, InputNumber, Select, Button } from "antd";
import stays from "./stays.json";

const { Option } = Select;
const locations = Array.from(
  new Set(stays.map((stay) => `${stay.city}, ${stay.country}`))
);

const FilterDrawer = ({ visible, onClose, onFilter }) => {
  return (
    <Drawer
      title="Edit your search"
      placement="right"
      visible={visible}
      onClose={onClose}
    >
      <div className="searching-bar">
        <div className="location">
          <label>Location</label>
          <Select
            className="selector"
            placeholder="Location"
            dropdownStyle={{ top: "250px" }}
          >
            {locations.map((location, index) => {
              const [city, country] = location.split(", ");
              return (
                <Option key={index} value={location}>
                  <span class="material-symbols-outlined">location_on</span>
                  {city}, {country}
                </Option>
              );
            })}
          </Select>
        </div>
        <div className="guests">
          <label>Guests</label>
          <InputNumber
            className="input-wrap"
            min={1}
            max={10}
            placeholder="Add guessts"
          />
        </div>
      </div>
      <div className="location-detail">
        {locations.map((location, index) => {
          const [city, country] = location.split(", ");
          return (
            <li key={index} value={location}>
              <span class="material-symbols-outlined">location_on</span>
              {city}, {country}
            </li>
          );
        })}
      </div>

      <Button className="drawer-btn" onClick={onFilter}>
        <span class="material-symbols-outlined">search</span> Search
      </Button>
    </Drawer>
  );
};

export default FilterDrawer;
