import React from "react";

import "../styles/SectionButton.css";

export default function SectionButton(props){

    function changeSection(){
        props.setSection(props.placeName);
    }

    if(props.section==props.placeName){
        return(
            <>
            <button className="sectionButton2" onClick={changeSection}>
                {props.placeName}
            </button>
            </>
        );
    }
    else{
        return(
            <>
            <button className="sectionButton" onClick={changeSection}>
                {props.placeName}
            </button>
            </>
        );
    }
    
}