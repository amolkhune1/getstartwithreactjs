// const api_access_key = require('../config/index.js').api_access_key;
// console.log(api_access_key);
require([
  'esri/config',
  'esri/Map',
  'esri/views/MapView',
  'esri/Graphic',
  'esri/layers/GraphicsLayer',
], loadArcMap(esriConfig, Map, MapView, Graphic, GraphicsLayer));

function loadArcMap(esriConfig, Map, MapView, Graphic, GraphicsLayer) {
  esriConfig.apiKey = api_access_key;
  const map = new Map({
    basemap: 'arcgis-topographic', // Basemap layer service
  });
  const view = new MapView({
    map: map,
    center: [-118.805, 34.027], // Longitude, latitude
    zoom: 13, // Zoom level
    container: 'viewDiv', // Div element
  });
  const graphicsLayer = new GraphicsLayer();
  map.add(graphicsLayer);
  const point = {
    //Create a point
    type: 'point',
    longitude: -118.80657463861,
    latitude: 34.0005930608889,
  };
  const simpleMarkerSymbol = {
    type: 'simple-marker',
    color: [226, 119, 40], // Orange
    outline: {
      color: [255, 255, 255], // White
      width: 1,
    },
  };
  const pointGraphic = new Graphic({
    geometry: point,
    symbol: simpleMarkerSymbol,
  });
  graphicsLayer.add(pointGraphic);
  // Create a line geometry
  const polyline = {
    type: 'polyline',
    paths: [
      [-118.821527826096, 34.0139576938577], //Longitude, latitude
      [-118.814893761649, 34.0080602407843], //Longitude, latitude
      [-118.808878330345, 34.0016642996246], //Longitude, latitude
    ],
  };
  const simpleLineSymbol = {
    type: 'simple-line',
    color: [226, 119, 40], // Orange
    width: 2,
  };
}
