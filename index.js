function return_object(temp_c,temp_f,humidity,condition,country,localtime,name)
{
    return {temp_c,temp_f,humidity,condition,country,localtime,name}
}
const city='kathmandu';
async function weather(){
    const response=await fetch(`https://api.weatherapi.com/v1/forecast.json?key=2a0beee6fdba43eeb3e33624231903&q=${city}&days=1&aqi=no&alerts=no`,
    {
        mode:'cors'
    });
    const json=await response.json()
    console.log(json)
    const current=json.current
    const location=json.location
    const obj=new return_object(current.temp_c,current.temp_f,current.humidity,current.condition.text,location.country,location.localtime,location.name)
    console.log(obj.temp_c)
}
weather()

