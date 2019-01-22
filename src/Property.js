import React from "react";

const Property = ({ city, displayPictureUrl, bedrooms, bathrooms }) => (
  <div className="property">
    <img src={displayPictureUrl} className="thumbnail" alt="Property" />
    <div className="description">
      <p>{city}</p>
      <p>{bedrooms} Bedrooms </p>
      <p>{bathrooms} bathrooms </p>
    </div>
  </div>
);

export default Property;
