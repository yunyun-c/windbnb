import React from "react";

const PropertyCard = ({ property }) => {
  if (!property) {
    return null;
  }

  const { title, rating, type, superHost, beds } = property;

  return (
    <div className="property-card">
      <div className="property-image">
        <img src={property.photo} alt={title} />
      </div>
      <div className="property-details">
        <div className="property-type">
          {superHost && <div className="superhost">Superhost</div>}
          {type} {beds && ` . ${beds} bed(s)`}
          <div className="property-rating">
            <span className="material-symbols-outlined">star</span>
            <span className="rating">{rating}</span>
          </div>
        </div>
        <div className="property-info">
          <h2 className="property-title">{title}</h2>
        </div>
      </div>
    </div>
  );
};

export default PropertyCard;
