import fetch from 'node-fetch';
import $ from 'jquery';
const url = 'https://jsonplaceholder.typicode.com/posts'
const path = '../data.data.json';
//console.log(url);

async function fetchData(link){

    try{
        const res = await fetch(link);

        let data = await res.json();

        //console.log(data);

    }catch(e){
        console.log(e);
    }

    //jquery
    $.getJSON(path, data => console.log(data));
}

fetchData(url);