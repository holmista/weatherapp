import React, { useState, useContext } from 'react';
import { useParams } from 'react-router-dom';
import useFetch from '../utils/useFetch';
import WeatherCard from '../components/weather/weatherCard';
import Context from '../utils/theme';
import ToggleTheme from '../components/generic/toggleTheme';
import ToggleMeasure from '../components/generic/toggleMeasure';
import LoadingSpinner from '../components/generic/loadingSpinner';
import Error from '../components/generic/error';

export default function Weather() {
  const { lat, lon } = useParams();
  const {
    theme, setTheme, measure, setMeasure,
  } = useContext(Context);

  const url = `https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&exclude=current,minutely,hourly&units=${measure}&appid=${process.env.REACT_APP_KEY2 || '87334bb1cd3b2f9617637d686cb38590'}`;
  const { data, loading, error } = useFetch(url, 2500);
  console.log(loading);
  return (
    <div className={`flex flex-col items-center justify-ceneter min-h-screen  overflow-auto sm:h-screen  ${theme === 'light' ? 'bg-slate-100' : 'bg-slate-600 text-white'}`}>
      <div className="w-screen flex justify-center sm:flex sm:justify-end sm:pr-48">
        <ToggleMeasure measure={measure} setMeasure={setMeasure} disabled={loading} />
        <ToggleTheme theme={theme} setTheme={setTheme} />
      </div>
      <div className="h-full flex justify-center items-center py-16 sm:py-0">
        {error && <Error theme={theme} />}
        {loading && (<LoadingSpinner width="60" height="60" />)}
        {data == null && loading === false && error == null && <LoadingSpinner width="60" height="60" />}
        <div className="grid grid-cols-1 xl:grid-cols-4 sm:grid-cols-2 ">
          {data && data.daily.map((elem) => (
            <WeatherCard
              key={elem.dt}
              averageTemp={elem.temp.day}
              minTemp={elem.temp.min}
              maxTemp={elem.temp.max}
              date={new Date(elem.dt * 1000).toLocaleDateString('en-US')}
              weatherDescription={elem.weather[0].description}
              icon={elem.weather[0].icon}
            />
          ))}
        </div>
      </div>

    </div>
  );
}
