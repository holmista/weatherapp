import React from 'react';
import PropTypes from 'prop-types';

export default function ToggleTheme({ theme, setTheme }) {
  const oppositeTheme = () => {
    if (theme === 'light') return 'dark';
    return 'light';
  };
  return (
    <button type="button" onClick={() => setTheme(oppositeTheme())} className="flex items-center p-1 ml-2 shrink-0 mt-10 bg-indigo-400 w-16 h-14 rounded-lg">
      {oppositeTheme() === 'light' ? (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          enableBackground="new 0 0 24 24"
          viewBox="0 0 24 24"
        >
          <path d="M7 12c0 2.8 2.2 5 5 5s5-2.2 5-5-2.2-5-5-5S7 9.2 7 12zM12 9c1.7 0 3 1.3 3 3s-1.3 3-3 3-3-1.3-3-3S10.3 9 12 9zM13 5V3c0-.6-.4-1-1-1s-1 .4-1 1v2c0 .6.4 1 1 1S13 5.6 13 5zM19.1 4.9c-.4-.4-1-.4-1.4 0l-1.4 1.4c-.4.4-.4 1 0 1.4.2.2.5.3.7.3s.5-.1.7-.3l1.4-1.4C19.5 6 19.5 5.3 19.1 4.9zM21 11h-2c-.6 0-1 .4-1 1s.4 1 1 1h2c.6 0 1-.4 1-1S21.6 11 21 11zM17.7 16.2c-.4-.4-1-.4-1.4 0s-.4 1 0 1.4l1.4 1.4c.2.2.5.3.7.3s.5-.1.7-.3c.4-.4.4-1 0-1.4L17.7 16.2zM11 19v2c0 .6.4 1 1 1s1-.4 1-1v-2c0-.6-.4-1-1-1S11 18.4 11 19zM4.9 19.1c.2.2.5.3.7.3s.5-.1.7-.3l1.4-1.4c.4-.4.4-1 0-1.4s-1-.4-1.4 0l-1.4 1.4C4.5 18 4.5 18.7 4.9 19.1zM2 12c0 .6.4 1 1 1h2c.6 0 1-.4 1-1s-.4-1-1-1H3C2.4 11 2 11.4 2 12zM6.3 4.9c-.4-.4-1-.4-1.4 0s-.4 1 0 1.4l1.4 1.4C6.5 8 6.8 8.1 7.1 8.1S7.6 8 7.8 7.8c.4-.4.4-1 0-1.4L6.3 4.9z" />
        </svg>
      ) : (
        <svg xmlns="http://www.w3.org/2000/svg" enableBackground="new 0 0 24 24" viewBox="0 0 24 24">
          <path d="M12,22C6.5,22,2,17.5,2,12c0-4.7,3.4-8.9,8-9.8c0.4-0.1,0.9,0.1,1.1,0.5c0.2,0.4,0.1,0.9-0.2,1.2C9.7,5.1,9,6.8,9,8.5
      c0,3.6,2.9,6.5,6.5,6.5c1.7,0,3.4-0.7,4.6-1.9c0.3-0.3,0.8-0.4,1.2-0.2c0.4,0.2,0.6,0.6,0.5,1.1C20.9,18.6,16.7,22,12,22z
       M7.6,5.3C5.4,6.8,4,9.2,4,12c0,4.4,3.6,8,8,8c2.8,0,5.2-1.4,6.7-3.6c-1,0.4-2.1,0.6-3.2,0.6C10.8,17,7,13.2,7,8.5
      C7,7.4,7.2,6.3,7.6,5.3z"
          />
        </svg>
      )}
    </button>
  );
}

ToggleTheme.propTypes = {
  theme: PropTypes.string.isRequired,
  setTheme: PropTypes.func.isRequired,
};
