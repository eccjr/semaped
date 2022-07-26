import React from "react";
import {patrocinadores, small, large} from './patrocinadores.module.css'

export function Patrocinadores(){
  return(
    <section className={patrocinadores} id="patrocinadores">
      <h2>Patrocinadores</h2>
      <ul className={large}>
        <img src="./GBD.png" alt=""></img>
        <img src="./geci.png" alt=""></img>
        <img alt=""></img>
      </ul>
      <ul className={small}>
        <img alt=""></img>
        <img alt=""></img>
        <img alt=""></img>
        <img alt=""></img>
      </ul>
    </section>
  )
}