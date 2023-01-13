import { useEffect, useState } from "react"
import ButtonComponent from "../components/ButtonComponent";
import Home from "../components/MapComponent"
import TitleComponent from "../components/TitleComponent";
import "./AppContainer.css"


const AppContainer = () => {

    const [issLocation, setIssLocation] = useState([])

    // useEffect(() => {
    //     getSpaceStationLocation();
    // }, []);

    const getSpaceStationLocation = function() {
        fetch('http://api.open-notify.org/iss-now')
        .then(res => res.json())
        .then(issLocation => setIssLocation(issLocation.iss_position))
    }

    return (
        <div id="contents">
        <>
        <TitleComponent />
        <Home issLocation={issLocation} />
        <ButtonComponent getSpaceStationLocation={getSpaceStationLocation}/>
        </>
        </div>
    )
}

export default AppContainer;