import React from "react";
import CardContainer from "./CardContainer";
import { TbBrandNextjs } from "react-icons/tb";
import { SiReact, SiTailwindcss, SiRedux, SiMysql } from "react-icons/si";
import { TiHtml5 } from "react-icons/ti";
import { BsFillBootstrapFill } from "react-icons/bs";
import { IoLogoJavascript } from "react-icons/io";
import { SiSequelize } from "react-icons/si";
import { DiNetmagazine } from "react-icons/di";
import { CarouselP } from "./Carousel";
import Net from "./Net";

export const Cards = () => {
  const projects = [

    {
      id: 1,
      name: "Mercado Calculator",
      path: "https://mercado-calculator.vercel.app",
      description:"Aplicacion de calculadora de mercado, es una herramienta personal que te permite poder llevar un control de tus compras, logrando manipular los productos que has comprado, y poder ver el total de tu compra.",
      img: "./mercado-app.png",
      technologies: [
        { name: "React", icon: <SiReact  size={50}/> },
        { name: "Tailwind CSS", icon:  <SiTailwindcss size={50}  /> },
        
      ],
    },
    {
      id: 2,
      name: "Portfolio web",
      path: "https://github.com/JesusE123/JS-Portfolio",
      description:"Portfolio personal realizado para mostrar los trabajos previamente echos junto a las experiencias laborales y todo mi camino como desarrollador.",
      img: "./portfolio.png",
      technologies: [
        
        { name: "Next.js", icon: <TbBrandNextjs size={50}/>  },
        { name: "Tailwind CSS", icon: <SiTailwindcss size={50} /> },
        
      ],
    },
    {
      id: 3,
      name: "Coco Panaderia",
      path: "https://github.com/LuisRon27/Panaderia_coco",
      description:" Web creada para una panaderia el cual le permitio a la empresa poder tomar pedidos online,poder gestionar a sus cadetes para las entregas y permitir ver a los clientes la variedad de los productos que ofrecen.",
      img: "./coco.jpeg",
      technologies: [
        { name: "Html", icon: <TiHtml5 size={50} /> },
        { name: "Bootstrap", icon: <BsFillBootstrapFill size={50} /> },
        { name: "Javascript", icon: <IoLogoJavascript  size={50}/> },
       
      ],
    },
    {
      id: 4,
      name: "Nexus Gestion",
      path: "https://nexus-gestion.vercel.app/",
      description:" Sistema desarrollado para un comercio de venta mayorista,permitiendo la gestión de inventarios, ventas, clientes y proveedores, con un enfoque centrado en la eficiencia y la                optimización de procesos.",
      img: "./nexus.png",
      technologies: [
        
        { name: "Next.js", icon: <TbBrandNextjs  size={50}/>  },
        { name: "Tailwind CSS", icon: <SiTailwindcss  size={50}/> },
        { name: "Redux", icon: <SiRedux size={50} /> },
        { name: "Sql Server", icon: <SiMysql size={50} /> },
        { name: ".NET", icon: <Net/> },
        
      ],
    },
  ];
  return (
    <>
    <div className="h-full w-full">
     
        {projects.map((element, index) => (
          <CardContainer
            key={index}
            name={element.name}
            path={element.path}
            image={element.img}
            description={element.description}
            tecnologies={element.technologies}
          />
        ))}
     

      
    </div>
    {/* <CarouselP data={projects} /> */}
    </>
  );
};
