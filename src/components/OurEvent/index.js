import React from "react";
import "./style.css";

export function OurEvent(){
  return(
    <section className="ourEvents" id="informacoes">
      <div class="container">
        <h2>Conheça nosso evento</h2>
        <div class="flex-container ">
          <div class="event-card purple">
            <img src="./calendario.png"></img>
            <h4>De 10 a 15 de setembro</h4>
            <p>Das 19:30 às 23:00</p>
          </div>
          <div class="event-card yellow">
            <img src="./lapis.png"></img>
            <h4>08 minicursos / oficinas</h4>
            <p>e 3 conferências</p>
          </div>
          <div class="event-card blue">
            <img src="./xicara.png"></img>
            <h4>Coffee breaks</h4>
            <p>Momento de interação entre os participantes</p>
          </div>
        </div>
      </div>
    </section>
  )
}