import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import useFetch from '../utils/useFetch';

function RegionItem({
  latitude,
  longitude,
  name,
  label,
}) {
  // const url = `https://api.openweathermap.org/data/2.5/onecall?lat=${latitude}&lon=${longitude}&${process.env.REACT_APP_KEY2}`;
  // const { data, loading, error } = useFetch(url);
  return (
    <button type="button" onClick={() => console.log('should redirect to /lat=lat&lon=lon&label=label')}>
      <Link to={`/weather/${latitude}/${longitude}`}>
        {name}
        {label}
      </Link>

    </button>
  );
}
RegionItem.propTypes = {
  latitude: PropTypes.number.isRequired,
  longitude: PropTypes.number.isRequired,
  name: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
};
export default RegionItem;
