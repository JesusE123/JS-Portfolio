import Link from "next/link";
import React from "react";
import { AiFillLinkedin, AiFillGithub } from "react-icons/ai";
const SocialContact = () => {
  const paths = [
    {
      icon: <AiFillLinkedin />,
      path: "https://www.linkedin.com/in/jesus-sanchez-b13708159/",
    },
    { icon: <AiFillGithub />, path: "https://github.com/JesusE123" },
  ];

  return (
    <div className=" mt-2">
      <ul
        className="
        flex
        flex-row
        gap-4
        text-4xl
        sm:justify-center
        md:justify-start
        justify-center
        "
      >
        {paths.map((element, index) => (
          <Link
            href={`${element.path}`} target="_blank"
            className="hover:scale-110  transition cursor-pointer"
            key={index}
          >
            {element.icon}
          </Link>
        ))}
      </ul>
    </div>
  );
};

export default SocialContact;
