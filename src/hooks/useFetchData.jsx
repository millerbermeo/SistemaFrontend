import { useState, useEffect } from "react";
import axiosClient from "../services/axiosClient";

const useFetchData = (endpoint) => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axiosClient.get(endpoint);
        setData(response.data);
      } catch (error) {
        console.error(`Error fetching data from ${endpoint}:`, error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [endpoint]);

  return { data, loading };
};

export default useFetchData;
