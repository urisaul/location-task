import React, { useEffect, useState } from 'react';

function MapDisplay(props){

    let usersLocation = props.usersLocation;
    let mapUrl = props.mapUrl;
    
    return(
        <div>
            <h1>Map of your Location</h1>
            <iframe
                style={{border: "0", width: "800px", height: "450px", maxWidth: "95%"}}
                loading="lazy"
                allowFullScreen
                src={mapUrl}>
                </iframe>
        </div> 
    )
}

export default MapDisplay