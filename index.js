import getWeather from "./fetch.js";
import render from "./dom.js";

//Retrieve the object from returned promise using .then()
const obj=getWeather().then((obj)=>{
    // console.log(obj)
    render(obj)
})


