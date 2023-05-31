import React from "react";
import PropertyCard from "./PropertyCard";
import stays from "./stays.json";

const PropertyList = () => {
  const totalStays = stays.length;
  let displayedStays = totalStays;
  if (totalStays > 12) {
    displayedStays = "12+";
  }
  return (
    <div>
      <div className="where">
        <h1>Stays in Finland</h1>
        <p>{`${displayedStays} stays`}</p>
      </div>
      {stays.map((stay, index) => (
        <PropertyCard
          key={index}
          image={stay.photo}
          title={stay.title}
          rating={stay.rating}
          type={stay.type}
          superHost={stay.superHost}
          beds={stay.beds}
        />
      ))}
    </div>
  );
};

export default PropertyList;
