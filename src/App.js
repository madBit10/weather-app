import React, { useState } from 'react';
import axios from 'axios';
import './App.css';
import SearchBar from './components/SearchBar';
import LoadingIndicator from './components/LoadingIndicator';
import ErrorMessage from './components/ErrorMsg';
import WeatherInfo from './components/WeatherInfo';

function WeatherApp() {
  const [input, setInput] = useState('');
  const [weather, setWeather] = useState({
    loading: false,
    data: {},
    error: false,
  });

  const toDateFunction = () => {
    const months = [
        'January',
        'February',
        'March',
        'April',
        'May',
        'June',
        'July',
        'August',
        'September',
        'October',
        'November',
        'December',
    ];
    const WeekDays = [
        'Sunday',
        'Monday',
        'Tuesday',
        'Wednesday',
        'Thursday',
        'Friday',
        'Saturday',
    ];
    const currentDate = new Date();
    const date = `${WeekDays[currentDate.getDay()]} ${currentDate.getDate()} ${months[currentDate.getMonth()]}`;
    return date;
};

  const search = async (e) => {
    if(e.key === 'Enter') {
      e.preventDefault();
      setInput('');
      setWeather({...weather, loading: true});
      const url = 'https://api.openweathermap.org/data/2.5/weather'
      const api_key = '3c2ff04086827e8411a05e5242285be5'
      await axios.get(url, {
        params: {
          q: input,
          units: 'metric',
          appid: api_key,
        },
      }).then((res)=> {
        // console.log('res', res);
        setWeather({data: res.data, loading: false, error: false});
      }).catch((err) => {
        setWeather({...weather, data: {}, error: true});
        setInput('');
        console.log('error', err);
      });
    }
  }

  return (
    <div className="App">
        <h1 className="app-name">
          The Weather App
        </h1>
        <div className='main'>
          <SearchBar input={input} setInput={setInput} search={search} />
          {weather.loading && <LoadingIndicator />}
          {weather.error && <ErrorMessage />}
          {weather && weather.data && weather.data.main && (
            <WeatherInfo weather={weather} toDateFunction={toDateFunction} />
          )}
      </div>
    </div>
  );
}

export default WeatherApp;
