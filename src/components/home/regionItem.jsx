import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

function RegionItem({
  latitude,
  longitude,
  name,
  label,
}) {
  return (

    <Link to={`/weather/${latitude}/${longitude}`} className="w-full">
      <div className="text-lg font-medium pl-1 py-4 border-b-2 border-gray-200
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
