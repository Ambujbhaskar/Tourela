import "./StartPlanning.css";

import { useState, useEffect, useRef} from "react";
import React from "react";

import NavBar from "./NavBar";
import BottomNav from "./BottomNav";

require('dotenv').config({ debug: true });

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
      { types: ["(cities)"], componentRestrictions: { country: "us" } }
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
  
    useEffect(() => {
      console.log(process.env.AMBUJ_API_KEY);
      loadScript(
        `https://maps.googleapis.com/maps/api/js?key=AIzaSyCzTN1Zqa0NbrnRacQxidLwOppnVIjta-g&libraries=places`,
        () => handleScriptLoad(setQuery, autoCompleteRef)
      );
    }, []);



    // function addPlace(event){
    //     event.preventDefault();

    // }

    return (
        <>
        <NavBar page="categories" />


        <div id="formWrapper">
            
            <div id="planHeading">
                Build your travel package
            </div>

            <div id="forms">
                <div className="form" id="form1">

                  <div class="formInputWrapper">
                      <input 
                          ref={autoCompleteRef}
                          onChange={event => setQuery(event.target.value)}
                          class="formInput" id="placeSearchInput" placeholder="City name"
                          value={query}
                      />
                  </div>
                  
                  <div class="formInputWrapper">
                      <input 
                          class="formInput" id="placeDaysInput" placeholder="Duration in days" type="number" />
                      <button className="formBtn" id="addPlaceBtn">Add Place</button>
                  </div>

                </div>

                <div className="form" id="form2">

                  <div class="formInputWrapper">
                    <form id="pacingWrapper">
                      <select name="pacingTypes" className="formInput" id="pacingInput" placeholder="Pacing of the trip">
                        <option className="pacingValues">Slow</option>
                        <option className="pacingValues">Medium</option>
                        <option className="pacingValues">Fast</option>
                      </select>
                    </form>
                  </div>
                
                  <div className="formInputWrapper">
                    <input class="formInput" id="numberOfPeopleInput" placeholder="Number of People" type="number"/>
                  </div>

                </div>

                <div className="form" id="placeBoard">
                  Added places will appear here
                </div>
            </div>
        </div>

        <BottomNav page="startplanning"/>
        </>
    );
}

export default StartPlanning;