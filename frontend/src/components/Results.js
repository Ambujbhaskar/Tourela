import React from "react";
import NavBar from "./NavBar";
import "../styles/Results.css";
import BottomNav from "./BottomNav";

export default function Results(){
    return(
        <>
        < NavBar page="Results"/>
        <div className="formWrapper">
            <div className="planHeading">
                Select the places which suit you
            </div>

            <div className="groupWrapper">
                <div className="predictionsWrapper"></div>
                <div className="addedPlacesWrapper"></div>
            </div>

        </div>
        <BottomNav page="Results"/>
        
        </>
    );
}