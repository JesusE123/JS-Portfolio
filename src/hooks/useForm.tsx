import React, { useState } from "react";
import axios from "axios";
const useForm = () => {
  const [data, setData] = useState({});
    
  const handleData = async (values) => {
    axios.post("/api/contact", values)
      .then((res) => setData(res.data))
      .catch((error) => {
          console.log(error)
      });
      setData({});
  };
  return { handleData};
};

export default useForm;
