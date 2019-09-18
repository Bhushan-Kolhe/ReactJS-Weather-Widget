import React from 'react'

export default function Weather(props) {

    const data = props.weatherData;
    const city = data.name;
    const country = data.sys.country;
    const temp = Math.round(data.main.temp - 273 );
    const minTemp = Math.round(data.main.temp_min - 273 );
    const maxTemp = Math.round(data.main.temp_max - 273 );
    const desc = data.weather[0].description;
    const icon = data.weather[0].icon;
    const humidity = data.main.humidity;
    const wind = data.wind.speed;
    const seaLevel = Math.round(data.main.sea_level);
    const currenttime = new Date();
    const hours = currenttime.getHours();
    const minutes = currenttime.getMinutes();
    let time = hours + ":" + minutes;
    let iconClass = 'icon ';

    switch (icon) {
        // day
        case '01d':
        iconClass += 'wi wi-day-sunny';
        break;
        case '02d':
        iconClass += 'wi wi-day-cloudy';
        break;
        case '03d':
        iconClass += 'wi wi-cloud';
        break;
        case '04d':
        iconClass += 'wi wi-cloudy';
        break;
        case '09d':
        iconClass += 'wi wi-day-rain';
        break;
        case '10d':
        iconClass += 'wi wi-day-rain-mix';
        break;
        case '11d':
        iconClass += 'wi wi-day-lightning';
        break;
        case '13d':
        iconClass += 'wi wi-day-snow-wind';
        break;
        case '50d':
        iconClass += 'wi wi-fog';
        break;
        // night
        case '01n':
        iconClass += 'wi wi-night-clear';
        break;
        case '02n':
        iconClass += 'wi wi-night-alt-cloudy';
        break;
        case '03n':
        iconClass += 'wi wi-cloud';
        break;
        case '04n':
        iconClass += 'wi wi-cloudy';
        break;
        case '09n':
        iconClass += 'wi wi-showers';
        break;
        case '10n':
        iconClass += 'wi wi-night-alt-showers';
        break;
        case '11n':
        iconClass += 'wi wi-storm-showers';
        break;
        case '13n':
        iconClass += 'wi wi-wi-night-alt-snow';
        break;
        case '50n':
        iconClass += 'wi wi-fog';
        break;
    }



    return (
        <div className="WeatherArea">
            <div className="containerTop">
                <div className="location align-Left">
                    <span>{city}, </span>
                    <span>{country}</span>
                </div>
                <div className="time align-Right">
                    <span>{time}</span>
                </div>
            </div>
            <div className="containerMid">
                <div className="textInner align-Left">
                    <i className={iconClass}></i>
                    <span className="temp">{temp}</span>
                    <span className="unit">°C</span>
                </div>
                <div className="descContainer align-Right">
                    <span className="desc">{desc}</span>
                </div>
            </div>
            <div className="containerBottom">
                <div className="textInnerBottom align-Left">
                    <span className="maxTemp">Max: <span></span>{maxTemp}°C</span>
                    <span className="minTemp">Min: <span></span>{minTemp}°C</span>
                </div>
                <div className="details align-Right">
                    <span className="humidity">Humidity: {humidity}%</span>
                    <span className="wind">Wind: {wind}mph</span>
                </div>
            </div>
        </div>
    )
}
