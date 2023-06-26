import React from "react";
import { Formik, FormikErrors } from 'formik'

import useForm from "@/hooks/useForm";

interface FormValues {
  email: string;
  password: string;
  message: string;
}

const Form = () => {
  const { handleData, SignupSchema} = useForm()
  return (
    <div
      className="
    flex
    items-center
    flex-col
     py-2
    "
    >
      <div className="flex items-start w-3/4 py-5">
        <h3 className="text-2xl pb-5">Enviame un mensaje</h3>
      </div>
      <Formik
        initialValues={{
          subject: '', email: '', message: ''
        }}
        validationSchema={SignupSchema}
        onSubmit={(values, { setSubmitting, resetForm }) => {
          setTimeout(() => {
            handleData(values)
            resetForm()
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
            className="flex flex-col w-3/4">
            <div className=" mb-3">
              <input
                value={values.subject}
                onChange={handleChange}
                name="subject"
                type="text"
                className="
            border-x-2
            border-b-2
            border-gray-500
            shadow-lg
            rounded-lg
            px-2
            py-2
            w-full

            "
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
                type="email"
                className="
            border-x-2
            border-b-2
           border-gray-500
            shadow.lg
            rounded-lg
            px-2
            py-2
            w-full
        "
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
                className="
            border-x-2
            border-b-2
          rounded 
          border 
          border-gray-500 
          shadow-lg 
          w-full
          px-2
          "
              >
              </textarea>
              {errors.message && touched.message ? (
                <span>{errors.message}</span>
              ) : null}
            </div>

            <button
              type="submit"
              disabled={isSubmitting}
              className="
        border
        border-[#88ffcc]
        bg-transparent
        cursor-pointer
        transition
        hover:opacity-50
        w-full
        rounded
        py-4
        font-semibold
        "
            >
              Enviar
            </button>
          </form>
        )}
      </Formik>
    </div>
  );
};

export default Form;
