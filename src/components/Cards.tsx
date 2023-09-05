import React from "react";
import CardContainer from "./CardContainer";
import { CarouselDefault } from "./Carousel";

export const Cards = () => {
  const projects = [
    {
      id: 1,
      name: "Fake Store",
      path: "https://github.com/JesusE123/FakeStore",
      img: "./fakestore.png",
      description:
        "Uso de api para simular una tienda online y poder crear un carrito de compras, haciendo uso de metodos HTTP",
    },
    {
      id: 2,
      name: "Rick & Morty",
      path: "https://github.com/JesusE123/Rick-and-Morty",
      img: "./rickandmorty.png",
      description:
        "Uso de la api rick and morty, podremos buscar los personajes de la serie. Filtrarlos por nombre y specie",
    },
    {
      id: 3,
      name: "Todo App",
      path: "https://github.com/JesusE123/Article-APP",
      img: "./todo.png",
      description:
        "Proyecto famoso para practicar conocimientos, podremos adaptarlo a nuestros gustos y necesidades",
    },
  ];
  return (
    <div>
      <div
        className="
      mt-10
      xl:flex 
      flex-row 
      space-x-8 
      items-center
      md:hidden
      sm:hidden
      "
      >
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

      <CarouselDefault data={projects} />
    </div>
  );
};
