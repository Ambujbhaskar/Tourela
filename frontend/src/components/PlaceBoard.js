import React, { useState } from "react";

import "../styles/PlaceBoard.css";

export default function PlaceBoard(){
    const [state, setState] = useState("Empty");
    const [placeCount, setPlaceCount] = useState(0);

    if(state==="Empty"){
        return(
            <>
            <div id="placeBoard">
                Added places will appear here 
            </div>
            </>
        );
    }
    // else(){

    // }

}