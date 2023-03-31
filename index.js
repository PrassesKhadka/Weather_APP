// let city=prompt('Enter a name of a city')
async function weather(){
    const response=await fetch(`https://api.weatherapi.com/v1/forecast.json?key=2a0beee6fdba43eeb3e33624231903&q=kathmandu&days=1&aqi=no&alerts=no`,
    {
        mode:'cors'
    });
    const json=await response.json()
    console.log(json)
    console.log(json.current.temp_c)
    console.log(json.current.temp_f)
    console.log(json.current.humidity)
    console.log(json.current.condition.text)
    console.log(json.location.country)
    console.log(json.location.localtime)
    console.log(json.location.name)

}
weather()