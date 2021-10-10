import React, {useState, useEffect} from 'react'
import database from './firebase.js'
// import "https://api.mapbox.com/mapbox-gl-js/v2.3.1/mapbox-gl.js"

const Track = () => {
    // const perf = require('./index.html');
    const ss = `
        <html lang='en'> 
        <head> <meta charset='UTF-8'> 
        <meta http-equiv='X-UA-Compatible' content='IE=edge'> 
        <meta name='viewport' content='width=device-width, initial-scale=1.0'> <title>Map</title>
         <link href='https://api.mapbox.com/mapbox-gl-js/v2.3.1/mapbox-gl.css' rel='stylesheet' />
        <style>
            body{
                margin: 0;
            }
            #map{
                width: 100vw;
                height: 100vh;
            }
        </style>
    </head>
    <body>
        <div id="map"> hello </div>
        <script src="app1.js" type="module"> </script>
    </body>
</html>`
    const [isMap, setMap] = useState(false);
    
    useEffect(() => {
        const script = document.createElement('script');
        script.src = "https://api.mapbox.com/mapbox-gl-js/v2.3.1/mapbox-gl.js";
        // script.src = "./app1.js"; 
        script.async = true;
        document.body.appendChild(script);
    }, []);

    const coordinates = [];
    const handleClick = () => {

        navigator.geolocation.watchPosition(
            data => {
                console.log(data);
                coordinates.push([data.coords.longitude, data.coords.latitude]);
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

    const fun = () => {

// const coordinates = [ [-122.483696, 37.833818],
//     [-122.483482, 37.833174],
//     [-122.483396, 37.8327],
//     [-122.483568, 37.832056],
//     [-122.48404, 37.831141],
//     [-122.48404, 37.830497],
//     [-122.483482, 37.82992],
//     [-122.483568, 37.829548],
//     [-122.48507, 37.829446],
//     [-122.4861, 37.828802],
//     [-122.486958, 37.82931],
//     [-122.487001, 37.830802],
//     [-122.487516, 37.831683],
//     [-122.488031, 37.832158],
//     [-122.488889, 37.832971],
//     [-122.489876, 37.832632],
//     [-122.490434, 37.832937],
//     [-122.49125, 37.832429],
//     [-122.491636, 37.832564],
//     [-122.492237, 37.833378],
//     [-122.493782, 37.833683]
// ];

// mapboxgl.accessToken = 'pk.eyJ1IjoiYXl1c2hkb2thbmlhIiwiYSI6ImNrdWpyZm11dTBmdGwyeG1vaGxvczkyeG8ifQ.IMlzM1h4rRYhWh8ESun2Hw';
//     const map = new mapboxgl.Map({
//     container: 'map',
//     style: 'mapbox://styles/mapbox/streets-v11',
//     center: [-122.486958, 37.82931],
//     zoom: 15
// });
// map.on('load', () => {
//     map.addSource('route', {
//         'type': 'geojson',
//         'data': {
//             'type': 'Feature',
//             'properties': {},
//             'geometry': {
//                 'type': 'LineString',
//                 'coordinates': coordinates
//             }
//         }
//     });
//     map.addLayer({
//         'id': 'route',
//         'type': 'line',
//         'source': 'route',
//         'layout': {
//             'line-join': 'round',
//             'line-cap': 'round'
//         },
//         'paint': {
//             'line-color': '#888',
//             'line-width': 8
//         }
//     });
// });
    }

    // var ssx = { __html: ss};
    // <iframe src = {perf }> </iframe>

    return (
        <>
            <button onClick={handleClick} > Start </button>
            <button onClick={Push}> Stop </button>
            <button onClick = {showMap}> Track Me </button>

            {isMap && <>{fun()}</>
            }
            
        </>

    )
}

export default Track;


// onClick="window.location.href = '../gps_tracking/index.html'; "