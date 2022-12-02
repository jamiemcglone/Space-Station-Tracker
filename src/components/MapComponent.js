import React, { useState } from 'react';
import {useLoadScript, MarkerF, GoogleMap} from "@react-google-maps/api";
import { useMemo } from "react";

export default function Home({issLocation}) {
        const {isLoaded} = useLoadScript({
            googleMapsApiKey: "AIzaSyBSZSyEe7nwDROk_swGV-xjSvR83ppjE9Y", 
        });
        
        if (!isLoaded) return <div>Loading...</div>
        return <Map issLocation={{issLocation}}/>
        // return (
        //   <>
        //     {/* <AppContainer /> */}
        //     <p>Map</p>
        //   </>
    }
        
        function Map({issLocation}) {


            const center = useMemo(() => ({lat: 21, lng: 10}), [])
            console.log(issLocation)

            const issLocationLatitude = parseInt(issLocation.issLocation["latitude"]);
            const issLocationLongitude = parseInt(issLocation.issLocation["longitude"]);

            console.log(issLocationLatitude);
            console.log(issLocationLongitude)

            return <GoogleMap 
            zoom={1} 
            center={center} 
            mapContainerClassName="map-container"
            >
                <MarkerF position={{lat: issLocationLatitude, lng: issLocationLongitude}}/>
            </GoogleMap>
        }
