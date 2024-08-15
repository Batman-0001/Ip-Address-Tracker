import {update} from './api.js';

const input = document.querySelector('div.search-box input');
const ip = document.querySelector('div.ip p:nth-child(2)');
const loc = document.querySelector('div.location p:nth-child(2)');
const timezone = document.querySelector('div.timezone p:nth-child(2)');
const isp = document.querySelector('div.isp p:nth-child(2)');

const searchButton = document.querySelector('div.search-button');

searchButton.addEventListener('click', () => update(input, ip, loc, timezone, isp));


