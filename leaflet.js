var map = L.map('map').setView([34.0614, -118.0816], 19);
L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 19,
    minZoom: 1,
    attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
}).addTo(map);
var greenIcon = L.icon({
    iconUrl: '/images/icon-location.svg',

    iconSize:     [38, 95],
    iconAnchor:   [22, 94], 
    popupAnchor:  [-3, -29]
});

var marker = L.marker([34.0614, -118.0816], {icon: greenIcon}).addTo(map);

export function updateMap(x, y) {
    map.setView([x, y], 19);
    marker.setLatLng([x, y]);
}
  
