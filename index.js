require('dotenv').config();
console.log('weather app')

const BASE_URL='http://api.weatherapi.com/v1/'
const API_KEY = process.env.API_KEY;
const LOCATION = 'pawashingtonris'


console.log(`${BASE_URL}forecast.json?key=${API_KEY}&q=${LOCATION}`)

function fetchAPI(){
    fetch(`${BASE_URL}current/json?key=${API_KEY}`, {
        method: 'GET',
    })
    .then((response)=>{
        response.json()
    })
    .then((data)=>{
        console.log(`this is the ${data}`)
    })
    .catch((error)=>{
        throw new Error("error")

    })

}

fetchAPI();