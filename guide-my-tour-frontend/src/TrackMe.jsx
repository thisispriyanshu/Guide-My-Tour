import React, {useRef, useEffect, useState} from 'react';
import mapboxgl from 'mapbox-gl';
mapboxgl.accessToken = 'pk.eyJ1IjoiYXl1c2hkb2thbmlhIiwiYSI6ImNrdWpyZm11dTBmdGwyeG1vaGxvczkyeG8ifQ.IMlzM1h4rRYhWh8ESun2Hw'

const TrackMe = (props) => {
    const {coordinates} = props;
    const mapContainer = useRef(null);
    const map = useRef(null);
    const [zoom, setZoom] = useState(15);

    useEffect(() => {
        if(coordinates.length == 0) return;
        if (map.current) return; // initialize map only once
        map.current = new mapboxgl.Map({
            container: mapContainer.current,
            style: 'mapbox://styles/mapbox/streets-v11',
            center: [coordinates[0][0], coordinates[0][1]],
            zoom: zoom
        });
    });

    useEffect(() => {
        if (!map.current) return;
        map.current.on('load', () => {
            map.current.addSource('route', {
                'type': 'geojson',
                'data': {
                    'type': 'Feature',
                    'properties': {},
                    'geometry': {
                        'type': 'LineString',
                        'coordinates': coordinates
                    }
                }
            });
            map.current.addLayer({
                'id': 'route',
                'type': 'line',
                'source': 'route',
                'layout': {
                    'line-join': 'round',
                    'line-cap': 'round'
                },
                'paint': {
                    'line-color': '#888',
                    'line-width': 8
                }
            });
        });
    })

    return(
        <>
        {coordinates.length == 0 && <h1> No Tracking Available</h1>}
        <div>
            <div ref={mapContainer} className="map-container"/>
        </div>
        </>
    );
}

export default TrackMe;
