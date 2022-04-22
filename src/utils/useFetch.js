import axios from 'axios';
import { useState, useEffect } from 'react';

const useFetch = (url) => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      const source = axios.CancelToken.source();
      try {
        const res = await axios.get(url, { cancelToken: source.token });
        if (res.data) setData(res.data);
      } catch (e) {
        setError(e);
      } finally {
        setLoading(false);
      }
      return () => {
        source.cancel();
      };
    };
    fetchData();
  }, [url]);

  return { data, loading, error };
};

export default useFetch;
