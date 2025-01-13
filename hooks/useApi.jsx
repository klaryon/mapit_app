import { useState, useEffect } from "react";

const useApi = (fn) => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    getBaseData();
  }, []);

  const getBaseData = async () => {
    try {
      const response = await fn();
      setData(response);
    } catch (err) {
      setError(err.message || "An error occurred");
    } finally {
      setLoading(false);
    }
  };

  return { data, loading, error };
};

export default useApi;
