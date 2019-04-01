import React, { useEffect } from 'react';
import styled from 'styled-components/macro';
import L from 'leaflet';

const LeafletMap = styled.div`
  height: 500px;

  margin: 0;
`;

function Map({
  activity: {
    startLatitude,
    startLongitude,
    map: { decodedPolyline },
  },
}) {
  useEffect(() => {
    const map = L.map('map', {
      center: [startLatitude, startLongitude],
      zoom: 13,
      layers: [
        L.tileLayer(
          'https://server.arcgisonline.com/ArcGIS/rest/services/NatGeo_World_Map/MapServer/tile/{z}/{y}/{x}',
          {
            attribution: '&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors',
          }
        ),
      ],
    });

    L.polyline(decodedPolyline, {
      color: 'blue',
      weight: 2,
      opacity: 0.7,
      lineJoin: 'round',
    }).addTo(map);
  }, []);

  return <LeafletMap id="map" />;
}

export default Map;
