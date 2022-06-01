import axios from 'axios';
import React, {
  useState, useContext, useRef, useEffect,
} from 'react';
import RegionList from '../components/home/regionList';
import Context from '../utils/theme';
import ToggleTheme from '../components/generic/toggleTheme';
import LoadingSpinner from '../components/generic/loadingSpinner';
import ERROR from '../components/generic/error';

export default function Home() {
  const [location, setLocation] = useState(null);
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [disable, setDisble] = useState(true);

  const inputRef = useRef();
  useEffect(() => {
    inputRef.current.focus();
  });

  const { theme, setTheme } = useContext(Context);

  const handleChange = (e) => {
    if (!e.target.value) setDisble(true);
    else setDisble(false);
    setLocation(e.target.value);
  };

  const handleClick = () => {
    setDisble(true);
    setLoading(true);
    setData(null);
    setError(null);
    setTimeout(async () => {
      try {
        const url = `http://api.positionstack.com/v1/forward?access_key=${process.env.REACT_APP_KEY || '204c80f743244d04a55f6ba57ea493e3'}&query=${location}`;
        const res = await axios.get(url);
        if (res.data) setData(res.data);
        setError(false);
      } catch (e) {
        if (!e.response) { setError('An Error Occurred'); return; }

        switch (e.response.status) {
          case 422: setError('could not find that place, try another one...');
            break;
          case 404: setError('could not find this page');
            break;
          case 429:
            setError('rate limit reached, contact the owner of the website');
            break;
          default:
            setError('an unexpected error occurred, try again later...');
            break;
        }
      } finally {
        setLoading(false);
        setDisble(false);
      }
    }, 2500);
  };
  return (
    <div>
      <div className={`flex flex-col items-center ${theme === 'light' ? 'bg-slate-100' : 'bg-slate-600 text-white'} min-h-screen overflow-x-hidden`}>
        <div className="w-screen flex justify-center sm:flex sm:justify-end sm:pr-48">
          <ToggleTheme theme={theme} setTheme={setTheme} />
        </div>
        <input
          type="text"
          ref={inputRef}
          placeholder="start searching..."
          onChange={(e) => handleChange(e)}
          className=" mt-36 p-1 text-lg  border-transparent outline-none w-52 bg-transparent
       focus:border-indigo-500  border-b-2 transition duration-300 md:w-1/5"
        />
        <button
          onClick={handleClick}
          type="button"
          disabled={disable}
          className="bg-indigo-400 mt-6 w-40 p-2 hover:cursor-pointer hover:bg-indigo-500
      text-white text-lg rounded-md transition duration-300 flex justify-center"
        >
          {loading && (
            <LoadingSpinner width="24" height="24" />
          )}

          {loading ? <div className={`font-medium ${theme === 'light' ? 'text-black' : 'text-white'}`}>loading</div> : <div className={`font-medium ${theme === 'light' ? 'text-black' : 'text-white'}`}>search</div>}
        </button>
        {data && <RegionList items={data.data} />}
        {error && <ERROR theme={theme} description={error} />}
      </div>
    </div>
  );
}
