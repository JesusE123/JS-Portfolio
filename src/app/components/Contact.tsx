import React from "react";
import Form from "./Form";

import Image from "next/image";
import { PersonalInformation } from "./PersonalInformation";

function Contact() {
  return (
    <>
      <div>
        <h1 className="text-4xl py-4">Contactame</h1>
      </div>

    <div className="
    flex
    flex-row
    justify-between
    items-center
    mt-5
    min-h-screen
    ">
      <div className="">
        <Form />
      </div>

      <Image src='/developer.webp' alt='logo' width={200} height={30} className='bg-transparent' />
      </div>
    </>
  );
}

export default Contact;
