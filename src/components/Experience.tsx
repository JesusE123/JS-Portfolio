"use client";

import * as React from "react";
import ScrollReveal from "./ScrollReveal";
import Section from "./Section";

export default function Experience() {
  return (
    <>
      <ScrollReveal>
        <Section id="experiencia">
          <div className="flex flex-col mx-auto max-w-3xl">
            <h2 className="text-4xl py-3 text-center font-bold">
              EXPERIENCIA 👜{" "}
            </h2>

            <div className="mt-10 shadow-lg p-8">
              <ol className="relative border-s border-gray-200 dark:border-gray-700">
                <li className="mb-10 ms-4">
                  <div className="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -start-1.5 border border-white dark:border-gray-900 dark:bg-gray-700"></div>
                  <p className="mb-1 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">
                    Noviembre 2022 - Freelance
                  </p>
                  <h3 className="text-lg font-semibold text-white dark:text-white">
                    Panadería COCO
                  </h3>
                  <p className="text-base font-normal text-white dark:text-gray-400 mt-2">
                    Colaboré en la maquetación de los módulos del sistema en el
                    frontend, integrando funcionalidad mediante JavaScript.
                    Participé en el diseño y elaboración de la base de datos,
                    así como en reuniones para definir los requisitos del
                    sistema.
                  </p>
                </li>

                <li className="mb-10 ms-4">
                  <div className="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -start-1.5 border border-white dark:border-gray-900 dark:bg-gray-700"></div>
                  <p className="mb-1 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">
                    Enero 2024 - Freelance
                  </p>
                  <h3 className="text-lg font-semibold text-white dark:text-white">
                    KioskoCity 24/7
                  </h3>
                  <p className="text-base font-normal text-white dark:text-gray-400 mt-2">
                    Trabajé en el desarrollo del módulo de punto de venta (TPV),
                    implementando la funcionalidad del sistema utilizando
                    Next.js. Además, realicé pruebas unitarias para garantizar
                    la calidad y el correcto funcionamiento del módulo.
                  </p>
                </li>

                <li className="mb-10 ms-4">
                  <div className="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -start-1.5 border border-white dark:border-gray-900 dark:bg-gray-700"></div>
                  <p className="mb-1 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">
                    Agosto 2024 - Freelance
                  </p>
                  <h3 className="text-lg font-semibold text-white dark:text-white">
                    Nexus Gestion
                  </h3>
                  <p className="text-base font-normal text-white dark:text-gray-400 mt-2">
                    Estuve a cargo del proyecto en general, abarcando tanto el
                    backend como el frontend. El frontend fue desarrollado con
                    Next.js y el backend con .NET. Diseñé la API y la base de
                    datos, maqueté los componentes siguiendo un diseño en Figma
                    propuesto por el equipo, y realicé pruebas unitarias para
                    garantizar la calidad del sistema. Además, estuve encargado
                    del despliegue completo de la aplicación.
                  </p>
                </li>
              </ol>
            </div>
          </div>
        </Section>
      </ScrollReveal>
    </>
  );
}
