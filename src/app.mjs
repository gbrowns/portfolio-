import fetch from 'node-fetch';
import $ from 'jquery';
const url = 'https://jsonplaceholder.typicode.com/posts'
const path = '../data.data.json';
//console.log(url);

fetch(url)
    .then(response => response.json())
    .then(data => console.log(data))
    .catch(err => console.error(err));