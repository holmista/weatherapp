import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import Context from '../utils/theme';

export default function Wrapper({ style, children }) {
  const {
    theme, setTheme,
  } = useContext(Context);
  return (
    <div className={`${theme === 'light' ? 'bg-slate-100' : 'bg-slate-600 text-white'}`}>
      {children}
    </div>
  );
}

Wrapper.propTypes = {
  style: PropTypes.string.isRequired,
  // eslint-disable-next-line react/forbid-prop-types
  children: PropTypes.any.isRequired,
};
