import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

export default function WeatherCard({
  averageTemp, minTemp, maxTemp, date, weatherDescription, icon,
}) {
  return (
    <Link to="./today">
      <div className="transition ease-in-out hover:-translate-y-1 hover:scale-105 hover:bg-indigo-500 duration-150
    hover:cursor-pointer text-center text-base flex flex-row flex-wrap bg-indigo-400 p-2 items-center justify-center m-2 rounded-xl sm:text-lg xs:text-left"
      >
        <div className="flex-col">
          <div className="b border-b-2">{date}</div>
          <div className="flex flex-row justify-between">
            <div>Average</div>
            <div>{Math.round(averageTemp)}</div>
          </div>
          <div className="flex flex-row justify-between">
            <div>minimum</div>
            <div>{Math.round(minTemp)}</div>
          </div>
          <div>{`maximum ${Math.round(maxTemp)}`}</div>
        </div>
        <img src={`http://openweathermap.org/img/wn/${icon}@2x.png`} alt="weather icon" />
      </div>
    </Link>
  );
}

WeatherCard.propTypes = {
  averageTemp: PropTypes.number.isRequired,
  minTemp: PropTypes.number.isRequired,
  maxTemp: PropTypes.number.isRequired,
  date: PropTypes.string.isRequired,
  weatherDescription: PropTypes.string.isRequired,
  icon: PropTypes.string.isRequired,
};
