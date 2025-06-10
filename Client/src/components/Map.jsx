import React, { useEffect } from 'react';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';

const Map = () => {
  // Google Maps Location: -1.3119717515962175, 36.89107988824873
  const targetLatitude = -1.3119717515962175;
  const targetLongitude = 36.89107988824873;

  useEffect(() => {
    // Initialize the map, centering on the new location
    const map = L.map('map').setView([targetLatitude, targetLongitude], 16); 

    // Add OpenStreetMap tiles
    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png').addTo(map);

    // Add a marker for the new location
    L.marker([targetLatitude, targetLongitude])
      .addTo(map)
      .bindPopup('AGJK') 
      .openPopup();

    // Cleanup on component unmount
    return () => {
      map.remove();
    };
  }, [targetLatitude, targetLongitude]); 

  return (
    <div
      id="map"
      style={{
        height: '400px',
        width: '100%',
        border: '1px solid #ccc',
        borderRadius: '8px',
      }}
    ></div>
  );
};

export default Map;