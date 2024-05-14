import React from "react";
import inicio_panel from '../assets/inicio_panel.png'
export const Monitoreo = () => {

  return (
    <section id="about">
      <div className="container flex px-10 py-20 md:flex-row flex-col items-center">

      
         <iframe  style={{width: 'inherit'}}
         src="https://sm-engine.atalait.com.mx:5601/"
         height="700" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade" allowFullScreen={true}></iframe>


      </div>
    </section>
  );
}