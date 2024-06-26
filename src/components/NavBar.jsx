import { ArrowRightIcon } from "@heroicons/react/solid";
import React from "react";
import { useState } from "react";

export const NavBar = ({ onOpcionSeleccionada }) => {

  const handleClick = (opcion) => {
    onOpcionSeleccionada(opcion);
  };

  const [language, setLanguage] = useState('ES');

  const smoothScroll = (e, id) => {
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
          {/*   <a href="https://atalait.sharepoint.com/:f:/r/sites/panelsari2p1/Otra%20informacin/04%20Monitoreo%20y%20control/Inventarios?csf=1&web=1&e=Db3NPq" target="_blank" className="mr-5 hover:text-white">
            Repositorio de Información
          </a> */}
          <ul class="menu">
            <li class="menu-item dropdown">
              <a href="#">Repositorio</a>
              <ul class="dropdown-menu">
                <li><a href="https://atalait.sharepoint.com/sites/panelsari2p1/Repositorio%20de%20informacin/Forms/AllItems.aspx?viewid=f20b7d40%2D3bd8%2D48bf%2D8488%2D6e183c5e8085" target="_blank">Repositorio de Información</a></li>
                <li><a href="https://atalait.sharepoint.com/sites/panelsari2p1/Otra%20informacin/Forms/AllItems.aspx?csf=1&web=1&e=Db3NPq&cid=4209bcc8%2D81e9%2D4705%2Db94e%2D6d376eb3a3c9&FolderCTID=0x012000F022AB04352F8E49A32528F5807B4D24&id=%2Fsites%2Fpanelsari2p1%2FOtra%20informacin%2F04%20Monitoreo%20y%20control%2FInventarios" target="_blank">Inventarios</a></li>
                <li><a href="https://atalait.sharepoint.com/sites/panelsari2p1/Otra%20informacin/Forms/AllItems.aspx?viewid=93c323ea%2D0274%2D4b99%2Db68c%2D5d426003803f" target="_blank">Otra información</a></li>
              </ul>
            </li>

            <li class="menu-item dropdown">
              <a href="#">Monitoreo</a>
              <ul class="dropdown-menu">
                <li>
                  <a href="#monitoreo" onClick={() => handleClick('monitoreo')} className="mr-5 hover:text-white">
                    Infraestructura
                  </a>
                </li>
                <li><a href="https://10.24.113.237/" target="_blank">Enlace de terceros</a></li>
                <li><a href="https://atalait.sharepoint.com/sites/panelsari2p1/Monitoreo%20y%20Mesa%20de%20Ayuda/Forms/AllItems.aspx?viewid=7eb3a40d%2Ddde6%2D457f%2Dbb30%2D846a18447a53" target="_blank">Monitoreo y Mesa de Ayuda</a></li>              </ul>
            </li>

          </ul>



          {/*  <a href="https://atalait.sharepoint.com/sites/panelsari2p1/Otra%20informacin/Forms/AllItems.aspx?viewid=93c323ea%2D0274%2D4b99%2Db68c%2D5d426003803f" target="_blank" className="mr-5 hover:text-white">
            Otra Información
          </a> */}
          <a href="#heatmap" onClick={() => handleClick('heatmap')} className="mr-5 hover:text-white">
            HeatMap
          </a>
          <a href="#controldeinventario" onClick={() => handleClick('inventarios')} className="mr-5 hover:text-white">
            Control de Inventario
          </a>
          <a href="https://msi.sat.gob.mx/" target="_blank" className="mr-5 hover:text-white">
            Mesa de Servicio
          </a>
          <a href="https://atalait.service-now.com/navpage.do" target="_blank" className="mr-5 hover:text-white">
            Service Now
          </a>
          {/* <a href="#testimonials" className="mr-5 hover:text-white">
            Testimonios
          </a> */}
        </nav>
        <a onClick={(e) => smoothScroll(e, "contact")}
          href="#contact"
          className="inline-flex items-center bg-gray-800 border-0 py-1 px-3 focus:outline-none hover:bg-gray-700 rounded text-base mt-4 md:mt-0">
          Salir
          <ArrowRightIcon className="w-4 h-4 ml-1" />
        </a>
      </div>
    </header>
  );
}