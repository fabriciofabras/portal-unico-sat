import React from "react";
import inicio_panel from '../assets/inicio_panel.png'
export const About = () =>{

  const smoothScroll = (e, id) =>{
    e.preventDefault();
    const element = document.getElementById(id);

    window.scrollTo({
      behavior: "smooth",
      top: element.offsetTop
    });
  }

    return (
        <section id="about">
          <div className="container mx-auto flex px-10 py-20 md:flex-row flex-col items-center">
              <img
               
                src={inicio_panel}
              />
          </div>
        </section>
      );
}