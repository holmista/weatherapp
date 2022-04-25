import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import useFetch from '../utils/useFetch';
import WeatherCard from './weatherCard';

export default function Weather() {
  const { lat, lon } = useParams();
  const [measure, setMeasure] = useState('celcius');

  const url = `https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&exclude=current,minutely,hourly&units=metric&appid=${process.env.REACT_APP_KEY2}`;
  const { data, loading, error } = useFetch(url);
  return (
    <div className="flex flex-col items-center justify-ceneter min-h-screen bg-slate-500 overflow-auto py-16 sm:py-0 sm:h-screen">

      <div className="bg-white w-screen flex justify-end pr-44 pt-5">
        <button type="button">
          {`convert to ${measure}`}
        </button>
      </div>

      <div className="h-full flex justify-center items-center bg-red-400">
        <div className="grid grid-cols-1 xl:grid-cols-4 sm:grid-cols-2">
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
