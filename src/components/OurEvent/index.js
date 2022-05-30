import React from "react";

import { Cronograma } from "../Cronograma"

import "./style.css";

export function OurEvent(){
  return(
    <section className="ourEvents">
      <h2>Nossos Eventos</h2>

      <Cronograma />
    </section>
  )
}