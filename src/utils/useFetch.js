import axios from 'axios';
import { useState, useEffect } from 'react';

const useFetch = (url, delay) => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      const source = axios.CancelToken.source();
      try {
        const res = await axios.get(url, { cancelToken: source.token });
        if (res.data) setData(res.data);
        throw Error('dunno');
      } catch (e) {
        setError(e);
      } finally {
        setLoading(false);
        setData(null);
      }
      return () => {
        source.cancel();
      };
    };
    setTimeout(() => fetchData(), delay);
    // fetchData();
  }, [url]);

  return { data, loading, error };
};

export default useFetch;
