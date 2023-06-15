import React from "react";

const Form = () => {
  return (
    <div
      className="
    flex
    items-center
    flex-col
     border
     border-dashed
     border-gray-500
     rounded
     py-2
    "
    >
      <h3 className="text-2xl pb-5 ">Enviame un mensaje</h3>
      <form className="flex flex-col">
        <div className=" mb-3">
          <input
            type="text"
            className="
            border
            border-gray-500
            shadow-lg
            rounded-lg
            px-2
            py-1
            "
            placeholder="Asunto"
          />
        </div>

        <div className="mt-2">
          <input
            type="text"
            className="
        border
        border-gray-500
        shadow.lg
        rounded-lg
        px-2
        py-1

        "
            placeholder="Email"
          />
        </div>

        <div className="mt-4">
          <textarea placeholder="Mensaje" className="
          rounded 
          border 
          border-gray-500 
          shadow-lg 
          w-full
          px-2
          ">
          </textarea>
        </div>

        <button className="
        border
        border-gray-500
        bg-transparent
        cursor-pointer
        transition
        hover:opacity-50
        w-full
        ">
          Enviar
        </button>
      </form>
    </div>
  );
};

export default Form;
