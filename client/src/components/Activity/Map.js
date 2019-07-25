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
        // L.tileLayer(
        //   // 'https://server.arcgisonline.com/ArcGIS/rest/services/NatGeo_World_Map/MapServer/tile/{z}/{y}/{x}',
        //   'https://stamen-tiles-{s}.a.ssl.fastly.net/toner/{z}/{x}/{y}{r}.{ext}',
        //   {
        //     // attribution: '&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors',
        //     attribution:
        //       'Map tiles by <a href="http://stamen.com">Stamen Design</a>, <a href="http://creativecommons.org/licenses/by/3.0">CC BY 3.0</a> &mdash; Map data &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
        //     subdomains: 'abcd',
        //     minZoom: 0,
        //     maxZoom: 20,
        //     ext: 'png',
        //   }
        // ),
        L.tileLayer('https://stamen-tiles-{s}.a.ssl.fastly.net/watercolor/{z}/{x}/{y}.{ext}', {
          attribution:
            'Map tiles by <a href="http://stamen.com">Stamen Design</a>, <a href="http://creativecommons.org/licenses/by/3.0">CC BY 3.0</a> &mdash; Map data &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
          subdomains: 'abcd',
          minZoom: 1,
          maxZoom: 16,
          ext: 'jpg',
        }),
        L.tileLayer('https://{s}.tile.openstreetmap.se/hydda/roads_and_labels/{z}/{x}/{y}.png', {
          maxZoom: 18,
          attribution:
            'Tiles courtesy of <a href="http://openstreetmap.se/" target="_blank">OpenStreetMap Sweden</a> &mdash; Map data &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
        }),
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
