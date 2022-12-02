import { useEffect, useState } from "react"
import ButtonComponent from "../components/ButtonComponent";
import Home from "../components/MapComponent"


const AppContainer = () => {

    const [issLocation, setIssLocation] = useState([])

    useEffect(() => {
        getSpaceStationLocation();
    }, []);

    const getSpaceStationLocation = function() {
        fetch('http://api.open-notify.org/iss-now')
        .then(res => res.json())
        .then(issLocation => setIssLocation(issLocation.iss_position))
    }

    return (
        <>
        <Home issLocation={issLocation} />
        <ButtonComponent getSpaceStationLocation={getSpaceStationLocation}/>
        </>
    )
}

export default AppContainer;