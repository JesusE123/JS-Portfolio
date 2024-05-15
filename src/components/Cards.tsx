import React from "react";
import CardContainer from "./CardContainer";
import {  CarouselP } from "./Carousel";

export const Cards = () => {
  const projects = [
    {
      id: 1,
      name: "E-Commerce next js",
      path: "https://fake-commerce-next.vercel.app/",
      img: "./commerce.jpeg",
      description:"E-commerce realizado, utilizando la API de Fakestore.com, permitiendo obtener productos, filtrarlos y simular un carrito de compras"
},
    {
      id: 2,
      name: "Rick & Morty",
      path: "https://github.com/JesusE123/Rick-and-Morty",
      img: "./rickandmorty.png",
      description:"Uso de la api rick and morty, podremos buscar los personajes de la serie. Filtrarlos por nombre y specie"
      
    },
    {
      id: 3,
      name: "Todo App",
      path: "https://github.com/JesusE123/Article-APP",
      img: "./todo.png",
      description:
      "Proyecto famoso para practicar conocimientos, podremos adaptarlo a nuestros gustos y necesidades"
    },
    {
      id: 4,
      name: "Mercado Calculator",
      path: "https://mercado-calculator.vercel.app",
      img: "./mercado-app.png",
      description:
      "Proyecto realizado con el fin personal de llevar un control al momento de realizar las compras en el super mercado, permitiendo dar el total de la compra y manipular los productos"
    },
    {
      id: 5,
      name: "Portfolio web",
      path: "https://github.com/JesusE123/JS-Portfolio",
      img: "./Portfolio.png",
      description:
      "Portfolio personal realizado para mostrar los trabajos previamente echos junto a las experiencias laborales y todo mi camino como desarrollador"
    },
    {
      id: 6,
      name: "Coco Panaderia",
      path: "https://github.com/LuisRon27/Panaderia_coco",
      img: "./coco.jpeg",
      description:
      "Sistema realizado a cliente para su comercio, el mismo cuenta con panel de admin, control de pedidos y base de datos para el registro de sus empleados y cadetes"
    },
  ];
  return (
    <div className="h-full w-full">
      <div className="xl:grid grid-cols-3 gap-6 hidden">
        {projects.map((element, index) => (
          <CardContainer
            key={index}
            name={element.name}
            path={element.path}
            image={element.img}
            description={element.description}
          />
        ))}
      </div>

      <CarouselP data={projects} />
    </div>
  );
};
