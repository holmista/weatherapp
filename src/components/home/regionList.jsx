import React, { useState, useContext } from 'react';
import PropTypes from 'prop-types';
import Context from '../../utils/theme';
import RegionItem from './regionItem';
import uniqueItems from '../../utils/uniqueItems';
import Error from '../generic/error';

function RegionList({ items }) {
  const { theme, setTheme } = useContext(Context);
  items.forEach((item) => {
    const elem = item;
    elem.label = elem.state ? `${elem.name}, ${elem.state}, ${elem.country}` : `${elem.name}, ${elem.country}`;
  });
  let unique;
  try {
    unique = uniqueItems(items, 'label');
  } catch {
    return <Error theme={theme} description="something went wrong 😟" renderLink={false} />;
  }

  if (unique === null) {
    return <Error theme={theme} description="incorrect data format 🤨" renderLink={false} />;
  }
  if (items.length === 0) {
    return <Error theme={theme} description="could not find that place, try another one 😅" renderLink={false} />;
  }
  return (
    <div className="flex-col w-1/5 mt-6">
      {unique.map((elem, idx) => (
        <RegionItem
          // eslint-disable-next-line react/no-array-index-key
          key={idx}
          latitude={elem.lat}
          longitude={elem.lon}
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
