import React from 'react';

function UsersInfo (props){

    let usersLocation = props.usersLocation;
    
    return(
        <div>
            <div>
                <h3>Your Info:</h3>
                <div>
                    <div>
                    <span style={{fontWeight: "bold"}}>City:</span> {usersLocation.city}<br></br>
                    <span style={{fontWeight: "bold"}}>Country:</span> {usersLocation.country_name}<br></br>
                    <span style={{fontWeight: "bold"}}>Latitude:</span> {usersLocation.latitude}<br></br>
                    <span style={{fontWeight: "bold"}}>Longitude:</span> {usersLocation.longitude}<br></br>
                    </div>
                </div>
            </div>
        </div> 
    )
}

export default UsersInfo 