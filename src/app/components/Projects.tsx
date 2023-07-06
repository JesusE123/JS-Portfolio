import React from "react";
import Cards from "./Cards";

const Projects = () => {
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
      <h1 className="text-4xl text-center py-4">Proyectos</h1>

      <div
        className="
      flex 
      flex-row 
      space-x-8 
      mt-10
      max-sm:px-3
      max-sm:space-x-2
      "
      >
        {projects.map((element, index) => (
          <Cards
            key={index}
            name={element.name}
            path={element.path}
            image={element.img}
            description={element.description}
          />
        ))}
      </div>
    </div>
  );
};

export default Projects;
