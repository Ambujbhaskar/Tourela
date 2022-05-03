import "../styles/StartPlanning.css";

import { useState, useEffect, useRef} from "react";
import React from "react";

import NavBar from "../components/NavBar";
import BottomNav from "../components/BottomNav";
import PlaceBoard from "../components/PlaceBoard";

require('dotenv').config();

let autoComplete;

const loadScript = (url, callback) => {
  let script = document.createElement("script");
  script.type = "text/javascript";

  if (script.readyState) {
    script.onreadystatechange = function() {
      if (script.readyState === "loaded" || script.readyState === "complete") {
        script.onreadystatechange = null;
        callback();
      }
    };
  } else {
    script.onload = () => callback();
  }

  script.src = url;
  document.getElementsByTagName("head")[0].appendChild(script);
};

function handleScriptLoad(updateQuery, autoCompleteRef) {
    autoComplete = new window.google.maps.places.Autocomplete(
      autoCompleteRef.current,
      { types: ["(cities)"] }
    );
    autoComplete.setFields(["address_components", "formatted_address"]);
    autoComplete.addListener("place_changed", () =>
      handlePlaceSelect(updateQuery)
    );
}

async function handlePlaceSelect(updateQuery) {
    const addressObject = autoComplete.getPlace();
    const query = addressObject.formatted_address;
    updateQuery(query);
    console.log(addressObject);
}


function StartPlanning(){

    const [query, setQuery] = useState("");
    const autoCompleteRef = useRef(null);

    const [pacing, setPacing] = useState(null);
    const [numOfPeople, setPeople] = useState(null);
    const [startDate, setDate] = useState(null);

    const [placeCardInfo, setPlaceCardInfo] = useState([
      {placeName: "Patna", placeDays: 7},
      {placeName: "Trivandrum", placeDays: 6},
      {placeName: "Pune", placeDays: 8},
      {placeName: "Delhi", placeDays: 10}
    ]);

    useEffect(() => {
      loadScript(
        `https://maps.googleapis.com/maps/api/js?key=${process.env.REACT_APP_API_KEY}&libraries=places`,
        () => handleScriptLoad(setQuery, autoCompleteRef)
      );
    }, []);
    
    function addPlaceHandler(event){
      return;
    }

    return (
        <>
        <NavBar page="categories" />

        <div id="formWrapper">
            
            <div id="planHeading">
                Build your travel package
            </div>

            <div id="forms">
                <div className="form" id="form1">

                  <div className="formInputWrapper" id="inputWrapper1">
                      <input 
                          ref={autoCompleteRef}
                          onChange={event => setQuery(event.target.value)}
                          className="formInput" id="placeSearchInput" placeholder="City name"
                          value={query}
                      />
                  </div>
                  
                  <div className="formInputWrapper" id="inputWrapper2">
                      <input className="formInput" id="placeDaysInput" placeholder="Duration in days" type="number" />
                  </div>
                  <div className="formInputWrapper" id="inputWrapper3">
                    <button className="formBtn" id="addPlaceBtn" onClick={addPlaceHandler}>Add Place</button>
                  </div>

                </div>

                <div className="form" id="form2">

                  <div class="formInputWrapper" id="inputWrapper4">
                      <select onChange={event => setPacing(event.target.value)} name="pacingTypes" className="formInput" id="pacingInput" placeholder="Pacing of the trip">
                        <option className="pacingValues" value="none" disabled selected hidden>Pacing of the Trip</option>
                        <option className="pacingValues" value="Slow">Slow</option>
                        <option className="pacingValues" value="Medium">Medium</option>
                        <option className="pacingValues" value="Fast">Fast</option>
                      </select>
                  </div>
                
                  <div onChange={event => setPeople(event.target.value)} className="formInputWrapper" id="inputWrapper5">
                    <input class="formInput" id="numberOfPeopleInput" placeholder="Number of People" type="number"/>
                  </div>

                  <div onChange={event => setDate(event.target.value)} id="formLabelWrapper">Trip Starting Date:</div>
                  <div className="formInputWrapper" id="inputWrapper6">
                    <input class="formInput" id="startDateInput" placeholder="Starting Date" type="date"/>
                  </div>
                </div>

                <PlaceBoard placeCardInfo={placeCardInfo} setPlaceCardInfo={setPlaceCardInfo}/>
            </div>
        </div>

        <BottomNav page="startplanning"/>
        </>
    );
}

export default StartPlanning;