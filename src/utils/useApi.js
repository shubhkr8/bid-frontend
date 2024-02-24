import { useState, useEffect } from "react";
import axios from "axios";

const useApi = (url) => {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true);

      try {
        const response = await axios.get(url);
        setData(response.data);
      } catch (error) {
        setError(error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchData();
  }, [url]);

  const postData = async (postData) => {
    setIsLoading(true);

    try {
      const response = await axios.post(url, postData);
      setData(response.data);
    } catch (error) {
      setError(error);
    } finally {
      setIsLoading(false);
    }
  };

  return { data, isLoading, error, postData };
};

export default useApi;
