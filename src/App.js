import React, { useState } from "react";
import { NavBar } from "./components/NavBar";
import { About } from "./components/About";
import { Projects } from "./components/Projects";
import { Skills } from "./components/Skills";
import { Contact } from "./components/Contact";
import { Repositorio } from "./components/Repositorio";
import { HeatMap } from "./components/HeatMap";
import { Monitoreo } from "./components/Monitoreo";
import { Mesa } from "./components/Mesa";
import { Inventarios } from "./components/Inventarios";


export default function App() {

  const [opcionSeleccionada, setOpcionSeleccionada] = useState('default');

  const handleOpcionSeleccionada = (opcion) => {
    setOpcionSeleccionada(opcion);
  };

  return (
    <main className="text-gray-400 bg-gray-900 body-font">
      <NavBar onOpcionSeleccionada={handleOpcionSeleccionada} />
      <div>
      {opcionSeleccionada === 'repositorio' && <Repositorio />}
      {opcionSeleccionada === 'heatmap' && <HeatMap />}
      {opcionSeleccionada === 'monitoreo' && <Monitoreo />}
      {opcionSeleccionada === 'default' && <About />}
      {opcionSeleccionada === 'inventarios' && <Inventarios />}
      {opcionSeleccionada === 'mesa' && <Mesa />}
        {/* Agrega más condiciones según las opciones disponibles */}
      </div>
      <Projects/>
     {/* <Skills/>
      <Contact/> */}
    </main>
  )
}
