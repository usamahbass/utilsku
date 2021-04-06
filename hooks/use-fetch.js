import { useState, useEffect } from "react";
import PropTypes from "prop-types";

export const useFetch = (url, options) => {
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        const response = await fetch(url, options);
        const json = await response.json();

        setData(json);
      } catch (err) {
        setError(err);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  return { data, error, loading };
};

useFetch.propTypes = {
  url: PropTypes.string,
  options: PropTypes.object,
  error: PropTypes.any,
  loading: PropTypes.bool,
  data: PropTypes.any,
};
