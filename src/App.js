import AppContainer from './containers/AppContainer';
import './App.css';
import React from 'react';
import {useLoadScript, MarkerF, GoogleMap} from "@react-google-maps/api";
import { useMemo } from "react";

function App() {
//   const {isLoaded} = useLoadScript({
//     googleMapsApiKey: "AIzaSyBSZSyEe7nwDROk_swGV-xjSvR83ppjE9Y", 
//   });

//   if (!isLoaded) return <div>Loading...</div>
//   return <Map />
//   // return (
//   //   <>
//   //     {/* <AppContainer /> */}
//   //     <p>Map</p>
//   //   </>
// }

// function Map() {
//   const center = useMemo(() => ({lat: 44, lng: -80}), [])
//   return <GoogleMap 
//   zoom={5} 
//   center={{lat: 44, lng: -80}} 
//   mapContainerClassName="map-container"
//   >
//     <MarkerF position={{lat: 44, lng: -80}}/>
//   </GoogleMap>

  return (
    <>
      <h1>Space Station Tracker</h1>
      <AppContainer/>
    </>
  )
}

export default App;
