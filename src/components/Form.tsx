import React, { useEffect } from "react";
import { Formik } from "formik";
import { useTheme } from "next-themes";

import useForm from "@/hooks/useForm";

const Form = () => {
  const { handleData, SignupSchema, mensaje, setMensaje } = useForm();

  const { theme } = useTheme();
  const light = theme === "light";

  useEffect(() => {
    let timer;
    if (mensaje) {
      timer = setTimeout(() => {
        setMensaje("");
      }, 3000);
    }

    return () => {
      clearTimeout(timer);
    };
  }, [mensaje]);

  return (
    <div className="flex justify-start items-start flex-col lg:w-1/3 sm:w-[350px] md:w-[360px] md:mt-10 sm:mt-10 sm:items-center md:items-center">
      <h3 className="text-2xl pb-5">Enviame un mensaje</h3>

      <Formik
        initialValues={{
          subject: "",
          email: "",
          message: "",
        }}
        validationSchema={SignupSchema}
        onSubmit={(values, { setSubmitting, resetForm }) => {
          setTimeout(() => {
            handleData(values);
            setMensaje("Su mensaje ha sido enviado");
            resetForm();
            setSubmitting(false);
          }, 400);
        }}
      >
        {({
          values,
          errors,
          touched,
          handleChange,
          handleSubmit,
          isSubmitting,
        }) => (
          <form
            onSubmit={handleSubmit}
            className="flex flex-col w-3/4 md:w-full"
          >
            <div className=" mb-3">
              <input
                value={values.subject}
                onChange={handleChange}
                name="subject"
                type="text"
                className={
                  light
                    ? "border-dashed border-2 border-[#0456A9] rounded-lg px-2 py-2 w-full bg-transparent focus:outline-non placeholder:text-black"
                    : "border-dashed border-2 border-[#88ffcc] rounded-lg px-2 py-2 w-full bg-transparent focus:outline-non placeholder:text-white"
                }
                placeholder="Asunto"
              />
              {errors.subject && touched.subject ? (
                <span className="">{errors.subject}</span>
              ) : null}
            </div>

            <div className="mt-2">
              <input
                value={values.email}
                onChange={handleChange}
                name="email"
                type="text"
                className={
                  light
                    ? "border-dashed border-2 border-[#0456A9] rounded-lg px-2 py-2 w-full bg-transparent focus:outline-non placeholder:text-black"
                    : "border-dashed border-2 border-[#88ffcc] rounded-lg px-2 py-2 w-full bg-transparent focus:outline-non placeholder:text-white"
                }
                placeholder="Email"
              />
              {errors.email && touched.email ? (
                <span>{errors.email}</span>
              ) : null}
            </div>

            <div className="mt-4">
              <textarea
                value={values.message}
                onChange={handleChange}
                name="message"
                placeholder="Mensaje"
                className={
                  light
                    ? "border-dashed border-2 border-[#0456A9] rounded-lg px-2 py-2 w-full bg-transparent focus:outline-non placeholder:text-black"
                    : "border-dashed border-2 border-[#88ffcc] rounded-lg px-2 py-2 w-full bg-transparent focus:outline-non placeholder:text-white"
                }
              ></textarea>
              {errors.message && touched.message ? (
                <span>{errors.message}</span>
              ) : null}
            </div>

            <button
              type="submit"
              disabled={isSubmitting}
              className={
                light
                  ? "border-dashed border-2 border-[#0456A9]  bg-transparent  cursor-pointer transition hover:opacity-50  w-full  rounded  py-4 font-semibold mt-3"
                  : "border-dashed border-2 border-[#88ffcc]  bg-transparent  cursor-pointer transition hover:opacity-50  w-full  rounded  py-4 font-semibold mt-3"
              }
            >
              Enviar
            </button>
            {mensaje && <p className="bg-green-500 rounded mt-2">{mensaje}</p>}
          </form>
        )}
      </Formik>
    </div>
  );
};

export default Form;
