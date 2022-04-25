import React from 'react';
import PropTypes from 'prop-types';

export default function WeatherCard({
  averageTemp, minTemp, maxTemp, date, weatherDescription, icon,
}) {
  return (
    <div className="text-center text-base flex flex-row flex-wrap bg-indigo-300 p-2 items-center justify-center m-2 rounded-xl sm:text-lg xs:text-left">
      <div className="flex-col">
        <div className="b border-b-2">{date}</div>
        <div className="flex flex-row justify-between">
          <div>current</div>
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
