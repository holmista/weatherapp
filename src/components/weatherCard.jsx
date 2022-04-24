import React from 'react';
import PropTypes from 'prop-types';

export default function WeatherCard({
  averageTemp, minTemp, maxTemp, date, weatherDescription, icon,
}) {
  return (
    <div>
      <div className="text-8xl">
        {`average tempreture: ${averageTemp}, minimum tempreture: ${minTemp}, maximum tempreture: ${maxTemp}
       date: ${date}, weather: ${weatherDescription}`}

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
