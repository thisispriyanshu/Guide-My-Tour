import React, {useState} from 'react'
import database from './firebase.js'
// import "https://api.mapbox.com/mapbox-gl-js/v2.3.1/mapbox-gl.js"

const Track = () => {
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
    
    // useEffect(() => {
    //     const fetchMap = async () => {
    //         const mp = await import('https://api.mapbox.com/mapbox-gl-js/v2.3.1/mapbox-gl.js');
    //         console.log(mp);
    //     }
    // }, []);

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
        
        return <>aman</> 
    }

    var ssx = { __html: ss};

    return (
        <>
            <button onClick={handleClick} > Start </button>
            <button onClick={Push}> Stop </button>
            <button onClick = {showMap}> Track Me </button>

            {isMap && <div dangerouslySetInnerHTML = {ssx}>
                
            </div>
            }
        </>

    )
}

export default Track;


// onClick="window.location.href = '../gps_tracking/index.html'; "