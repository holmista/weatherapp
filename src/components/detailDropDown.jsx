import React, { useState } from 'react';
import PropTypes from 'prop-types';
import DropDownButton from './dropDownButton';

export default function DetailDropDown({ title, data }) {
  const [drop, setDrop] = useState(false);
  const ar = Object.keys(data);
  return (
    <div>
      <p className="flex justify-center align-middle">{title}</p>
      {/* <DropDownButton /> */}
      <div className="flex align-middle justify-start">
        {ar.map((elem) => (
          <div>
            {elem}
            :
            {data[elem]}
          </div>
        ))}
      </div>
    </div>
  );
}

DetailDropDown.propTypes = {
  title: PropTypes.string.isRequired,
  // eslint-disable-next-line react/forbid-prop-types
  data: PropTypes.object.isRequired,
};
