import React, {useRef, useEffect, useState} from 'react';
import database from './firebase.js'
import mapboxgl from 'mapbox-gl';
import TrackMe from './TrackMe';
mapboxgl.accessToken = 'pk.eyJ1IjoiYXl1c2hkb2thbmlhIiwiYSI6ImNrdWpyZm11dTBmdGwyeG1vaGxvczkyeG8ifQ.IMlzM1h4rRYhWh8ESun2Hw'
// import "https://api.mapbox.com/mapbox-gl-js/v2.3.1/mapbox-gl.js"


const Track = () => {
    const [isMap, setMap] = useState(false);

    const [coordinates, setCoordinates] = useState([]);

    const handleClick = () => {

        navigator.geolocation.watchPosition(
            data => {
                console.log(data);
                setCoordinates([...coordinates, [data.coords.longitude, data.coords.latitude]])
                // coordinates.push([data.coords.longitude, data.coords.latitude]);
                window.localStorage.setItem("coordinates", JSON.stringify(coordinates));
            },
            error => console.log(error),
            {
                enableHighAccuracy: true
            }
        );
    }
    const Push = () => {
        database.ref().set({
            coordinates: coordinates
        }).catch(alert);
    }

    const showMap = () => {
        setMap(true);
    }

    return (
        <>
            {!isMap && <>
                <button style={{marginRight: "10px"}} onClick={handleClick} > Start </button>
                <button onClick={Push}> Stop </button>
                <button style={{marginLeft: "10px"}} onClick = {showMap}> Track Me </button>
            </>
            }
            {isMap && <TrackMe coordinates = {coordinates}/>}            
        </>
    )
}

export default Track;
