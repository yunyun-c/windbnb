import React from "react";

const PropertyCard = ({ image, title, rating, type, superHost, beds }) => {
  return (
    <div className="room-detail">
      <div className="card-img">
        <img src={image} alt={title} />
      </div>

      <div className="room-intro">
        <p className="rate">
          <span class="material-symbols-outlined">star_rate</span> {rating}
        </p>
        {superHost && <p className="superhost">Superhost</p>}

        <p>
          {type} {beds && `. ${beds} bed(s)`}
        </p>
      </div>
      <h3>{title}</h3>
    </div>
  );
};

export default PropertyCard;
