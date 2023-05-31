import React from "react";

const PropertyCard = ({ image, title, rating, type, superHost, beds }) => {
  return (
    <div className="room-detail">
      <img src={image} alt={title} />
      <div className="room-intro">
        {superHost && <p className="superhost">Superhost</p>}
        <div className="types">
          <p>{type}</p>
          {beds && <p>. {beds} bed(s)</p>}
        </div>

        <p className="rate">
          <span class="material-symbols-outlined">star_rate</span> {rating}
        </p>
      </div>
      <h3>{title}</h3>
    </div>
  );
};

export default PropertyCard;
