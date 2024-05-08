import { ArrowRightIcon } from "@heroicons/react/solid";
import React from "react";
import { useState } from "react";

export const NavBar = ({ onOpcionSeleccionada }) => {

    const handleClick = (opcion) => {
    onOpcionSeleccionada(opcion);
    };

    const [language, setLanguage] = useState('ES');

    const smoothScroll = (e, id) =>{
        e.preventDefault();
        const element = document.getElementById(id);
    
        window.scrollTo({
          behavior: "smooth",
          top: element.offsetTop
        });
      }

  return (
    <header className="bg-gray-800 md:sticky top-0 z-10">
      <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
        <a className="title-font font-medium text-white mb-4 md:mb-0">
          <a href="#about" className="ml-3 text-xl">
          Panel Único de Servicio
          </a>
        </a>
        <nav className="md:mr-auto md:ml-4 md:py-1 md:pl-4 md:border-l md:border-gray-700	flex flex-wrap items-center text-base justify-center">
          <a href="#projects" className="mr-5 hover:text-white">
            Repositorio de Información
          </a>
          <a href="#skills" className="mr-5 hover:text-white">
            Monitoreo
          </a>
          <a href="#skills" className="mr-5 hover:text-white">
             Mesa de Ayuda
          </a>
          <a href="#skills" className="mr-5 hover:text-white">
            Otra Información
          </a>
          <a onClick={() => handleClick('heatmap')} href="#skills" className="mr-5 hover:text-white">
            HeatMap
          </a>
          <a onClick={() => handleClick('monitoreo')} href="#skills" className="mr-5 hover:text-white">
            Monitoreo
          </a>
          <a onClick={() => handleClick('inventarios')} href="#skills" className="mr-5 hover:text-white">
            Inventarios
          </a>
          {/* <a href="#testimonials" className="mr-5 hover:text-white">
            Testimonios
          </a> */}
        </nav>
        <a onClick={(e) => smoothScroll(e,"contact")}
          href="#contact"
          className="inline-flex items-center bg-gray-800 border-0 py-1 px-3 focus:outline-none hover:bg-gray-700 rounded text-base mt-4 md:mt-0">
          Salir
          <ArrowRightIcon className="w-4 h-4 ml-1" />
        </a>
      </div>
    </header>
  );
}