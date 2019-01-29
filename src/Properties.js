import React from "react";
import Property from "./Property";

const Properties = props => (
  <div>
    {props.properties.map(
      ({ city, displayPictureUrl, bedrooms, bathrooms }, i) => (
        <Property
	  key={i}
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
