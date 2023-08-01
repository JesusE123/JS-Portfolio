import React, { forwardRef } from "react";
import Form from "./Form";

import Image from "next/image";

function Contact() {
  return (
    <div className="flex flex-col justify-center items-center w-full">
      <h1 className="text-4xl font-bold text-center">Contactame</h1>

      <div className="flex flex-row items-center w-full justify-evenly">
        <Form />

        <div className="mt-5 w-[360px] flex justify-center">
          <Image
            src="/developer.webp"
            alt="logo"
            width={200}
            height={30}
            quality={100}
          />
        </div>
      </div>
    </div>
  );
}

export default forwardRef(Contact);
