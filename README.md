## Table of contents

- [Overview](#overview)
  - [Screenshot](#screenshot)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
- [Author](#author)

## Overview

An IP address tracker website uses HTML, CSS, and JavaScript to let users search for IP addresses. The site fetches geolocation data via an API, displaying the results on an interactive map. It includes a search bar, styled layout, and dynamic elements for user-friendly tracking of IP-related information.

### Screenshot

![](./screenshot.jpg)

### Links

- Solution URL: [Add solution URL here](https://your-solution-url.com)
- Live Site URL: [Add live site URL here](https://your-live-site-url.com)

## My process

I developed this website using HTML, CSS, and JavaScript, beginning with the desktop design and then optimizing it for mobile devices. For the map view, I integrated Leaflet.js, and I utilized the GeoIPfy API to fetch IP address data.

### Built with

- Semantic HTML5 markup
- CSS custom properties
- Flexbox
- CSS Grid
- JavaScript
- API Handling
- Responsive Design


### What I learned

I've learned how to render maps on a website using Leaflet.js, send HTTP requests, handle API responses, and dynamically update data on the page. Additionally, I've mastered organizing multiple JavaScript files to enhance the website's abstraction and robustness.


```js
var map = L.map('map', {
    zoomControl: false
}).setView([34.0614, -118.0816], 19);
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

```


## Author

- Website - [Suraj Kumar Santra](https://github.com/Batman-0001)
- Frontend Mentor - [@Batman-0001](https://www.frontendmentor.io/profile/Batman-0001)
- Twitter - [@SurajKSantra001](https://www.twitter.com/SurajKSantra001)
