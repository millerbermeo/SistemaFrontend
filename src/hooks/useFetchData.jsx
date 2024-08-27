import { useState, useEffect } from "react";
import axiosClient from "../services/axiosClient";

const useFetchData = (endpoint) => {
  const [data, setData] = useState([]);
  
  const fetchData = async () => {
    try {
      const response = await axiosClient.get(endpoint);
      setData(response.data);
    } catch (error) {
      console.error(`Error fetching data from ${endpoint}:`, error);
    }
  };

  useEffect(() => {
   

    fetchData();
  }, [endpoint]);

  return { data, setData, fetchData };
};

export default useFetchData;
