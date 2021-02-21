import './App.css';
import MapDisplay from './MapDisplay';
import React, { useEffect, useState } from 'react';
import UsersInfo from './UsersInfo';

function App() {

  // setting the states
  let [usersLocation, setUsersLocation] = useState({});
  let [mapUrl, setMapUrl] = useState("https://www.google.com/maps/embed/v1/place?key=AIzaSyCdQymwSuF0P6Ee-ffX0ZtWjpJdpaT5eLk&q=Beit Shemesh Israel&center=31.740820, 34.984337&zoom=17");


  // finction to get the data of the users location
  const getLocation = async (_url) => {
      let res = await fetch(_url);
      let data = await res.json();

      console.log(data);
      setUsersLocation(data);
      setMapUrl(`https://www.google.com/maps/embed/v1/place?key=AIzaSyCdQymwSuF0P6Ee-ffX0ZtWjpJdpaT5eLk&q=${data.city} ${data.country_name}&center=${data.latitude}, ${data.longitude}&zoom=17`)
      return data;
  }

  // calling the function when the component is built
  useEffect(() => {
        getLocation("https://api.ipdata.co/?api-key=dcb19aafdd3accd0ca61b014f91a6cc5888d57f4f703a9758da3751e")
    },[]);

  
  return (
    <div className="App">
      <MapDisplay usersLocation={usersLocation} mapUrl={mapUrl} />
      <UsersInfo usersLocation={usersLocation} />
    </div>
  );
}

export default App;
