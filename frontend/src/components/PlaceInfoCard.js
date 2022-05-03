import { set } from "express/lib/application";
import React from "react";

import "../styles/PlaceInfoContainer.css";

export default function PlaceInfoCard ({placeName, placeDays, placeCardInfo, setPlaceCardInfo}){

    function removePlace(){
        const tempArr = placeCardInfo;
        console.log(placeCardInfo);

        for( var i = 0; i < tempArr.length; i++){ 
            if ( tempArr[i].placeDays == placeDays && tempArr[i].placeName == placeName ) {
                tempArr.splice(i, 1);
            }
        }
        console.log(placeCardInfo);
        setPlaceCardInfo(placeCardInfo);

    }

    return(
        <>
        <div className="placeCard">
            <div className="placeName">{placeName}</div>
            <div className="placeDays">{placeDays} days</div>
            <button className="placeCardDeleteBtn" onClick={removePlace}>Remove</button>
        </div>
        </>
    );
}