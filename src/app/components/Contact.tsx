import React from "react";
import Form from "./Form";
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
    w-3/4
    mt-5
    min-h-screen
    ">
      <div className="w-full">
        <Form />
      </div>
      <div className="w-full">
        <PersonalInformation />
      </div>
      </div>
    </>
  );
}

export default Contact;
