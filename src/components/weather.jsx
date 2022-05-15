import React, { useState, useContext } from 'react';
import { useParams } from 'react-router-dom';
import useFetch from '../utils/useFetch';
import WeatherCard from './weatherCard';
import Context from '../utils/theme';
import ToggleTheme from './toggleTheme';
import ToggleMeasure from './toggleMeasure';
import LoadingSpinner from './loadingSpinner';
import Error from './error';

export default function Weather() {
  const { lat, lon } = useParams();
  // const [measure, setMeasure] = useState('metric');
  const {
    theme, setTheme, measure, setMeasure,
  } = useContext(Context);

  const url = `https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&exclude=current,minutely,hourly&units=${measure}&appid=${process.env.REACT_APP_KEY2}`;
  const { data, loading, error } = useFetch(url, 5000);
  return (
    <div className={`flex flex-col items-center justify-ceneter min-h-screen  overflow-auto sm:h-screen  ${theme === 'light' ? 'bg-slate-100' : 'bg-slate-600 text-white'}`}>
      <div className="w-screen flex justify-center sm:flex sm:justify-end sm:pr-48">
        <ToggleMeasure measure={measure} setMeasure={setMeasure} />
        <ToggleTheme theme={theme} setTheme={setTheme} />
      </div>
      <div className="h-full flex justify-center items-center py-16 sm:py-0">
        {error && <Error theme={theme} />}
        {loading && (<LoadingSpinner width="60" height="60" />)}
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
