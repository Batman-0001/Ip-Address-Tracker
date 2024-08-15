import {updateMap} from './leaflet.js';

let x = 34.0614;
let y = -118.0816;

export function update(input, ip, loc, timezone, isp) {
    const ip4 = /\b((25[0-5]|2[0-4][0-9]|1[0-9]{2}|[1-9]?[0-9])\.){3}(25[0-5]|2[0-4][0-9]|1[0-9]{2}|[1-9]?[0-9])\b/;
    const ip6 = /\b((([0-9A-Fa-f]{1,4}:){7}([0-9A-Fa-f]{1,4}|:))|(([0-9A-Fa-f]{1,4}:){1,7}:)|(([0-9A-Fa-f]{1,4}:){1,6}:[0-9A-Fa-f]{1,4})|(([0-9A-Fa-f]{1,4}:){1,5}(:[0-9A-Fa-f]{1,4}){1,2})|(([0-9A-Fa-f]{1,4}:){1,4}(:[0-9A-Fa-f]{1,4}){1,3})|(([0-9A-Fa-f]{1,4}:){1,3}(:[0-9A-Fa-f]{1,4}){1,4})|(([0-9A-Fa-f]{1,4}:){1,2}(:[0-9A-Fa-f]{1,4}){1,5})|([0-9A-Fa-f]{1,4}:((:[0-9A-Fa-f]{1,4}){1,6}))|(:((:[0-9A-Fa-f]{1,4}){1,7}|:)))(%.+)?\b/;
    const domain = /\b(?:[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?\.)+[a-zA-Z]{2,}\b/;
    
    if (ip4.test(input.value) || ip6.test(input.value)) {
        callerIP(input.value, ip, loc, timezone, isp);
        input.value = "";
    }
    else if (domain.test(input.value)) {
        callerDOM(input.value, ip, loc, timezone, isp);
        input.value = "";
    }
    else {
        input.value = "";
        alert("enter a valid ip address...");
    }
}

async function callerIP(value, ip, loc, timezone, isp) {
    const temp = 'https://geo.ipify.org/api/v2/country,city?apiKey=at_tR47UbZ0d8sDlBlFOzhu7doVa7hRH';

    try {
        const url = `${temp}&ipAddress=${value}`;
    
        const response = await fetch(url);
        const data = await response.json();

        x = data.location.lat;
        y = data.location.lng;

        updateMap(x, y);

        transpose(data, ip, loc, timezone, isp);
    }
    catch(err) {
        console.log(err);
        alert('server not responding.....');
    }
}

async function callerDOM(value, ip, loc, timezone, isp) {
    const temp = 'https://geo.ipify.org/api/v2/country,city?apiKey=at_tR47UbZ0d8sDlBlFOzhu7doVa7hRH';

    try {
        const url = `${temp}&domain=${value}`;

        const response = await fetch(url);
        const data = await response.json();

        x = data.location.lat;
        y = data.location.lng;

        updateMap(x, y);

        transpose(data, ip, loc, timezone, isp);
    }
    catch(err) {
        console.log(err);
        alert('server is not responding.....');
    }
}

function transpose(data, ip, loc, timezone, isp) {
    ip.textContent = data.ip;
    loc.textContent = `${data.location.city} ${data.location.region}`;
    timezone.textContent = `${data.location.timezone}`;
    isp.textContent = data.isp;
}









