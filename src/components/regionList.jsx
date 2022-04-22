import React, { useState } from 'react';
import PropTypes from 'prop-types';
import RegionItem from './regionItem';
import uniqueItems from '../utils/uniqueItems';

function RegionList({ items }) {
  const unique = uniqueItems(items, 'label');
  if (!unique) {
    return <div>incorrect data format</div>; // make error component
  }
  if (items.length === 0) {
    return (
      <div>could not find that place, try another one...</div>
    );
  }
  return (
    <div>
      {unique.map((elem) => (
        <RegionItem
          key={elem.label}
          latitude={elem.latitude}
          longitude={elem.longitude}
          name={elem.name}
          label={elem.label}
        />
      ))}
    </div>
  );
}
RegionList.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      latitude: PropTypes.number,
      longitude: PropTypes.number,
      name: PropTypes.string,
      label: PropTypes.string,
    }),
  ).isRequired,
};
export default RegionList;
