import React from "react";
import Form from "./Form";

import Image from "next/image";

function Contact() {
  return (
    <div className="flex flex-col justify-center items-center w-full">
      <h1 className="text-4xl font-bold text-center">CONTACTAME</h1>

      <div className="flex flex-row items-center w-full justify-evenly md:justify-center sm:justify-center">
        <Form />

        <div className="mt-11 w-[40%] lg:flex justify-center md:hidden sm:hidden hidden">
          <Image
            src="/developer.webp"
            alt="human"
            width={200}
            height={30}
            quality={100}
          />
        </div>
      </div>
    </div>
  );
}

export default Contact;
