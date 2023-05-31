import React from "react";
import { Drawer, InputNumber, Select, Button } from "antd";
import stays from "./stays.json";

const { Option } = Select;
// Extract unique locations from stays.json
const locations = Array.from(new Set(stays.map((stay) => stay.location)));

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
          <Select className="selector" placeholder="Location">
            {locations.map((location, index) => (
              <Option key={index} value={location}>
                <span class="material-symbols-outlined">location_on</span>
                {location}
              </Option>
            ))}
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
      <Button className="drawer-btn" onClick={onFilter}>
        <span class="material-symbols-outlined">search</span> Search
      </Button>
    </Drawer>
  );
};

export default FilterDrawer;
