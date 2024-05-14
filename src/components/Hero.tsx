import React from "react";
import Particle from "./Particle";
import Presentation from "./Presentation";
import Image from "next/image";

function Hero() {
  return (
    <div className="h-[100vh] w-[100%] bg-cover bg-center bg-[url('/banner.jpg')]">
      <div className="flex justify-evenly items-center h-full">
        <Particle />
          <div>
            <Presentation />
          </div>
          <div className="flex items-center justify-center  sm:mt-10 md:m-0">
            <Image
              src="/human.webp"
              alt="human"
              width={450}
              height={400}
              quality={100}
            />
          </div>
        
      </div>
    </div>
  );
}

export default Hero;
