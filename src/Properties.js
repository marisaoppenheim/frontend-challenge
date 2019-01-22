import React from "react";
import Property from "./Property";

const Properties = props => (
  <div>
    {props.properties.map(
      ({ city, displayPictureUrl, bedrooms, bathrooms }) => (
        <Property
          city={city}
          displayPictureUrl={displayPictureUrl}
          bedrooms={bedrooms}
          bathrooms={bathrooms}
        />
      )
    )}
  </div>
);

export default Properties;
