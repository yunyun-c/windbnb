import React from "react";
import PropertyCard from "./PropertyCard";
// import stays from "../stays.json";

const PropertyList = ({ properties }) => {
  const totalStays = properties.length;
  let displayedStays = totalStays;
  if (totalStays > 12) {
    displayedStays = "12+";
  }
  return (
    <div className="lists-container">
      <div className="where">
        <h1>Stays in Finland</h1>
        <p>{`${displayedStays} stays`}</p>
      </div>
      <div className="lists">
        {properties.map((property, index) => (
          <PropertyCard key={index} property={property} />
        ))}
      </div>
    </div>
  );
};

export default PropertyList;
