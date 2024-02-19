function WeatherInfo({ weather, toDateFunction }) {
  return (
    <div>
      <div className="city-name">
        <h2>
          {weather.data.name}, <span>{weather.data.sys.country}</span>
        </h2>
      </div>
      <div className="date">
        <span>{toDateFunction()}</span>
      </div>
      <div className="icon-temp">
        <img
          className=""
          src={`https://openweathermap.org/img/wn/${weather.data.weather[0].icon}@2x.png`}
          alt={weather.data.weather[0].description}
        />
        {Math.round(weather.data.main.temp)}
        <sup className="deg">°C</sup>
      </div>
      <div className="des-wind">
        <p>{weather.data.weather[0].description.toUpperCase()}</p>
        <p>Wind Speed: {weather.data.wind.speed}m/s</p>
      </div>
    </div>
  );
}

export default WeatherInfo;
