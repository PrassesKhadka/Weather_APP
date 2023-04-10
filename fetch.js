const city = 'kathmandu';
export default async function getWeather() {
    try {
        const response = await fetch(`https://api.weatherapi.com/v1/forecast.json?key=2a0beee6fdba43eeb3e33624231903&q=${city}&days=1&aqi=no&alerts=no`
        ,{
            mode: 'cors'
        });
        const json = await response.json();
        const {current: { condition:{text:condition},temp_c: celsius, temp_f: fahrenheit }, location: { name:cityName,country:country,localtime: time } } = json;
        console.log(json)
        const weatherData = { cityName,country, celsius, fahrenheit, time ,condition};
        console.log(weatherData)
        return weatherData;
    }catch (error) {
        throw new Error(`Failed to fetch weather data: ${error.message}`);
    }
}
