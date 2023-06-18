import React from "react";
import Form from "./Form";

import Image from "next/image";


function Contact() {
  return (
      <div id='contact'>
      <div className="text-center py-2">
        <h1 className="text-4xl py-4 font-bold">Contactame</h1>
      </div>

    <div 
    className="
    grid 
    grid-cols-2 
    grid-rows-1 
    gap-x-8
    items-center
    text-center
    "
    >
      <div className="">
        <Form />
      </div>


      <div className="flex items-center justify-center">
      <Image src='/developer.webp' alt='logo' width={200} height={30} className='bg-transparent mt-4' />
      </div>

      </div>
      </div>
    
  );
}

export default Contact;
