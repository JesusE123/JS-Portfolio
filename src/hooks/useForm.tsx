import React, { useState } from "react";
import axios from "axios";
import * as Yup from 'yup';
const useForm = () => {
  const [data, setData] = useState({});
  


  const SignupSchema = Yup.object().shape({
    subject: Yup.string()
      .min(2, 'No puedo descifrar el asunto con 1 solo caracter :(')
      .max(50, 'Su asunto es demasiado largo')
      .required('Este campo no puede estar vacio'),
    message: Yup.string()
      .min(3, 'No puedo descifrar su mensaje :(')
      .max(120, 'Su mensaje es demasiado largo, no me queda mas espacio :(')
      .required('Este campo no puede estar vacio'),
      
    email: Yup.string()
    .required('Este campo no puede estar vacio'),
  });

    
  const handleData = async (values) => {
    axios.post("/api/contact", values)
      .then((res) => setData(res.data))
      .catch((error) => {
          console.log(error)
      });
      setData({});
  };
  return { handleData, SignupSchema};
};

export default useForm;
