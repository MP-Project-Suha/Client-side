import React, { useState, useEffect } from "react";
import LocationPicker from 'react-location-picker';
 
 /* Default position */
const defaultPosition = {
  lat: 26.3333,
  lng: 43.9667
};
 
 
const Location =()=>{


 const [location, setLocation] = useState({
      address: "Buraydah, Saudi Arabia",
      position: {
        lat: 26.3333,
        lng: 43.9667
      }
    })

 
 const handleLocationChange =({ position, address, places }) =>{
 
    // Set new location
    setLocation({ position, address });
    console.log(location);
  }
 

    return (
      <div>
        <h1>{location.address}</h1>
        <div>
          <LocationPicker
            containerElement={ <div style={ {height: '100%'} } /> }
            mapElement={ <div style={ {height: '300px',width: '300px'} } /> }
            defaultPosition={defaultPosition}
            onChange={handleLocationChange}
      
          />
        </div>
      </div>
    )

}
export default Location