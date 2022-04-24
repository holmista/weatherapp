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

    <Link to={`/weather/${latitude}/${longitude}`} className="w-full">
      <div className="text-lg pl-1 py-4 border-b-2 border-gray-200
                    hover:border-indigo-500 transition duration-300"
      >
        {label}
      </div>
    </Link>
  );
}
RegionItem.propTypes = {
  latitude: PropTypes.number.isRequired,
  longitude: PropTypes.number.isRequired,
  name: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
};
export default RegionItem;
