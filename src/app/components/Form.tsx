import React from "react";
import useForm from "@/hooks/useForm";
const Form = () => {

  const {handleSubmit, handleChange, data} = useForm();
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
      
      <form 
      onSubmit={handleSubmit}
      className="flex flex-col w-3/4">
        <div className=" mb-3">
          <input
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
        </div>

        <div className="mt-2">
          <input
          onChange={handleChange}
            name="email"
            type="text"
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
        </div>

        <div className="mt-4">
          <textarea
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
          ></textarea>
        </div>

        <button
          className="
        border
        border-gray-500
        bg-transparent
        cursor-pointer
        transition
        hover:opacity-50
        w-full
        rounded
        py-4
        "
        >
          Enviar
        </button>
      </form>
    </div>
  );
};

export default Form;
