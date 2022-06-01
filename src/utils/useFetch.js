import axios from 'axios';
import { useState, useEffect } from 'react';

const useFetch = (url, delay) => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (data) setData(null);
    const fetchData = async () => {
      setLoading(true);
      const source = axios.CancelToken.source();
      try {
        const res = await axios.get(url, { cancelToken: source.token });
        if (res.data) setData(res.data);
      } catch (e) {
        setError(e);
      } finally {
        console.log('here');
        setLoading(false);
      }
      return () => {
        source.cancel();
      };
    };
    setTimeout(() => fetchData(), delay);
  }, [url]);
  return { data, loading: !data && !error, error };
};

export default useFetch;
