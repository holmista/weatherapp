import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

export default function Error({ theme, description, renderLink }) {
  return (
    <div>
      <div className={`${theme === 'light' ? 'bg-slate-100' : 'bg-slate-600 text-white'} min-h-full px-4 py-16 sm:px-6 sm:py-24 md:grid md:place-items-center lg:px-8`}>
        <main className="flex flex-col items-center justify-center max-w-max mx-auto">
          <p className="text-sm font-extrabold text-indigo-400 sm:text-xl">{description}</p>
          {renderLink && <Link to="/" className="inline-flex items-center px-4 py-2 mt-10 border border-transparent text-sm font-medium rounded-md shadow-sm text-black bg-indigo-400 hover:bg-indigo-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"> Go back home </Link>}
        </main>
      </div>
    </div>
  );
}

Error.propTypes = {
  theme: PropTypes.string.isRequired,
  description: PropTypes.string,
  renderLink: PropTypes.bool.isRequired,
};

Error.defaultProps = {
  description: 'An Error Occurred',
};
