import React, { useState } from "react";
import axios from "axios";
const useForm = () => {
  const [data, setData] = useState({
    subject: "",
    email: "",
    message: "",
  });

  const handleChange = (e: any) => {
    setData({
      ...data,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    axios
      .post("/api/contact", data)
      .then((res) => setData(res.data))
      .catch((error) => console.log(error));
    setData({
      subject: "",
      email: "",
      message: "",
    });
  };
  return { handleChange, data, handleSubmit };
};

export default useForm;
