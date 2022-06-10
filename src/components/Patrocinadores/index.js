import React from "react";
import {patrocinadores, small, large} from './patrocinadores.module.css'

export function Patrocinadores(){
  return(
    <section className={patrocinadores}>
      <h2>Patrocinadores</h2>
      <ul className={large}>
        <img></img>
        <img></img>
        <img></img>
      </ul>
      <ul className={small}>
        <img></img>
        <img></img>
        <img></img>
        <img></img>
      </ul>
    </section>
  )
}