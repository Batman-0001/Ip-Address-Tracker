let lati = 34.0614;
let lang = -118.0816;

var map = L.map('map', {
    zoomControl: false
}).setView([34.0614, -118.0816], 19);
L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 19,
    minZoom: 1,
    attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
}).addTo(map);
var greenIcon = L.icon({
    iconUrl: './images/icon-location.svg',

    iconSize:     [38, 95],
    iconAnchor:   [22, 94], 
    popupAnchor:  [-3, -29]
});

var marker = L.marker([34.0614, -118.0816], {icon: greenIcon}).addTo(map);

export function updateMap(x, y) {
    lati = x;
    lang = y;
    map.setView([x, y], 19);
    marker.setLatLng([x, y]);
}

let z = 19;

export function customZoomIn() {
    if (z < 20) {
        z = z + 1;
        map.setView([lati, lang], z);
    }
    else {
        map.setView([lati, lang], z);
    }
}

export function customZoomOut() {
    if (z > 1) {
        z = z - 1;
        map.setView([lati, lang], z);
    }
    else {
        map.setView([lati, lang], z);
    }
}
  
