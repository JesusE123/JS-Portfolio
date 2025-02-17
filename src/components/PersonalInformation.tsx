import React from "react";
import { MdLocationOn } from "react-icons/md";
import { BsFillPersonFill } from "react-icons/bs";
import { AiOutlineMail } from "react-icons/ai";

const data = [
  {
    id: 1,
    icon: <MdLocationOn />,
    description: "Buenos aires, Argentina",
  },
  {
    id: 2,
    icon: <BsFillPersonFill />,
    description: "Venezolano",
  },
  {
    id: 3,
    icon: <AiOutlineMail />,
    description: "Jesusan0110@gmail.com",
  },
];

export const PersonalInformation = () => {
  return (
    <div className="">
      <h3 className="text-3xl font-semibold">Información Personal</h3>

      <div>
        <ul className="">
          {data.map((element, index) => (
            <div
              className="flex flex-row items-center space-x-5 sm:space-x-2 md:space-x-5"
              key={index}
            >
              <li key={index} className="text-3xl py-2 flex">
                {element.icon}
              </li>
              <span className="font-medium">{element.description}</span>
            </div>
          ))}
        </ul>
      </div>
    </div>
  );
};
