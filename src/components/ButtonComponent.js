import React from "react";
import "./button.css";
const ButtonComponent = ({getSpaceStationLocation}) => {

    return(
        <div id="button">
        <h3 onClick={getSpaceStationLocation}>Where is the Space Station?</h3>
        </div>
    )

}

export default ButtonComponent;