mapboxgl.accessToken =
  "pk.eyJ1IjoiYXJ0dGVtcGxhdGUiLCJhIjoiY2s0M3I5ZHgzMGEzNDNucXM1cDd0dzl3cSJ9.a2wjLlxz8LzWj9nIoGsshw";
var map = new mapboxgl.Map({
  container: "map",
  style: "mapbox://styles/mapbox/dark-v10",
  center: [51.386126, 35.697989], // starting position
  zoom: 15, // starting zoom
});

map.on("load", function () {
  map.resize();
  $('a[data-bs-toggle="tab"]').on("shown.bs.tab", function () {
    map.resize();
  });
});

// create the popup
var popup = new mapboxgl.Popup({ offset: 40 }).setText("I'm here  ");

// create DOM element for the marker
var el = document.createElement("div");
el.id = "marker";

// create the marker
new mapboxgl.Marker(el)
  .setLngLat([51.386126, 35.697989])
  .setPopup(popup) // sets a popup on this marker
  .addTo(map);

// Add zoom and rotation controls to the map.
map.addControl(new mapboxgl.NavigationControl(), "bottom-right");
