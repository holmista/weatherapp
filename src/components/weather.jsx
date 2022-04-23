import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import useFetch from '../utils/useFetch';
import WeatherCard from './weatherCard';

export default function Weather() {
  const { lat, lon } = useParams();
  const url = `https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&exclude=current,minutely,hourly&units=metric&appid=${process.env.REACT_APP_KEY2}`;
  const { data, loading, error } = useFetch(url);
  // const currentDate = new Date(1650711600 * 1000).toLocaleDateString('en-US');
  console.log(data);
  return (
    <div>
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
  );
}
