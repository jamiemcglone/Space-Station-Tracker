import React from "react";

const ButtonComponent = ({getSpaceStationLocation}) => {

    return(
        <button onClick={getSpaceStationLocation}>Gimme that location!</button>
    )

}

export default ButtonComponent