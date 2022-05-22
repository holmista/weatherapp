import React from 'react';
import PropTypes from 'prop-types';

export default function ToggleMeasure({ measure, setMeasure }) {
  const oppositeMeasure = () => {
    if (measure === 'metric') return 'imperial';
    return 'metric';
  };
  const handleClick = () => {
    setMeasure(oppositeMeasure());
  };
  return (
    <button onClick={() => setMeasure(oppositeMeasure())} type="button" className="p-1 font-medium shrink-0 mt-10 bg-indigo-400 w-40 h-14 rounded-lg">
      {`convert to ${measure === 'metric' ? 'imperial' : 'metric'}`}
    </button>
  );
}

ToggleMeasure.propTypes = {
  measure: PropTypes.string.isRequired,
  setMeasure: PropTypes.func.isRequired,
};
