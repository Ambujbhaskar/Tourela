import React, { useEffect, useState } from "react";

import "../styles/Results.css";

import NavBar from "./NavBar";
import BottomNav from "./BottomNav";
import ItineraryInfoCard from "./ItineraryInfoCard";
import SectionButton from "./SectionButton";
import PredictionCard from "./PredictionCard";


function getKeyword(catArr){
    switch(catArr[0]){
        case 1:
            return "Monuments in";
        case 2:
            return "Spas in";
        case 3:
            return "Religious sites in";
        case 4:
            return "Parks in";
        case 5:
            return "Trekks in";
        case 6:
            return "museums in";
        case 7:
            return "restaurants in";
        case 8:
            return "Markets in";
        case 9:
            return "Arcades in";
        case 10:
            return "Clubs in";
    }
}


export default function Results(){
    const [placeList, setPlaceList] = useState(JSON.parse(sessionStorage.getItem("placeList")));
    
    const [itineraryPlaces, setItineraryPlaces] = useState([]);
    const [predictions, setPredictions] = useState([]);
    
    const [categories, setCategories] = useState(JSON.parse(sessionStorage.getItem("userCategories")));
    const [section, setSection] = useState(placeList[0].placeName);

    console.log(sessionStorage);

    console.log("placeList: ",placeList);
    console.log("section: ", section);

    function sections(placeList){
        console.log(placeList)
        return placeList.map((place, index) => {
            return <SectionButton key={index} placeName={place.placeName} setSection={setSection} section={section}/>;
        })
    }
    function finalPlaces(itineraryPlaces){
        return itineraryPlaces.map((place, index) => {
            return <PredictionCard key={index} result={place} itineraryPlaces={itineraryPlaces} setItineraryPlaces={setItineraryPlaces}/>;
        })
    }
    function predict(predictions){
        for(let i = 0; i < predictions.length; i++ ){
            if(predictions[i][0]==section){
                return predictions[i][1].map((result, index) => {
                    return <PredictionCard key={index} result={result} itineraryPlaces={itineraryPlaces} setItineraryPlaces={setItineraryPlaces}/>;
                })
            }
        }
    }


    useEffect(() => {
        let arr = [];
        for(let i = 0; i < placeList.length; i++){
            const placeString = getKeyword(categories)+placeList[i].placeName ;
            let request = {
                query: placeString,
                fields: ['name', 'geometry', 'formatted_address', 'photos'],
            };

            (async () => {
                let map;
                let sydney = new window.google.maps.LatLng(-33.867, 151.195);
                
                map = new window.google.maps.Map(document.getElementById('map'), {center: sydney, zoom: 15});

                let service = new window.google.maps.places.PlacesService(map);
                
                console.log("radahorela idhar maps mein", service)
        
                service.textSearch(request, function(results, status) {
                    console.log(results, " RESULTSSS ", status);

                    console.log("predictions: ", arr);
                    const x = [placeList[i].placeName, results];
                    arr.push(x);
                });
            })()
        }
        setPredictions(arr)
    }, []);
    
    console.log("pred: ",predictions)
    // const [placeLatLong, setPlaceLatLong] = useState([...arr]);
    // console.log("placeLatLong List: ",placeLatLong);

    return(
        <>
        < NavBar page="Results"/>
        <div className="formWrapper">
            <div id='map'/>
            <div className="planHeading">
                Select the places which suit you
            </div>

            <div className="groupWrapper">
                <div className="predictionsWrapper">
                    <div className="sections">
                        {
                            sections(placeList)
                        }
                    </div>
                    <div className="predictionCardsWrapper">
                        {predictions.length===0?"Loading Recommendations":predict(predictions)}
                    </div>
                </div>
                <div className="addedPlacesWrapper">
                    {
                        finalPlaces(itineraryPlaces)
                    }
                </div>
            </div>

        </div>
        <BottomNav page="Results" itineraryPlaces={itineraryPlaces}/>
        
        </>
    );
}