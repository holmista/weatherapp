import axios from 'axios';
import React, { useState } from 'react';
import RegionList from './regionList';

export default function Home() {
  const [location, setLocation] = useState(null);
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [disable, setDisble] = useState(true);

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
        const url = `http://api.positionstack.com/v1/forward?access_key=${process.env.REACT_APP_KEY}&query=${location}`;
        const res = await axios.get(url);
        if (res.data) setData(res.data);
        setError(false);
      } catch (e) {
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
        }
      } finally {
        setLoading(false);
        setDisble(false);
      }
    }, 2500);
  };
  return (
    <div>
      <input placeholder="start searching..." onChange={(e) => handleChange(e)} />
      <button onClick={handleClick} type="button" disabled={disable}>search</button>
      {data && <RegionList items={data.data} />}
      {error && <div>{error}</div>}
      {loading && <div>loading</div>}
    </div>
  );
}
