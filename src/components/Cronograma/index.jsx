import React from "react";
import "./cronograma.css";
import { Participante } from "./Participante";

export function Cronograma(){
  return (
    <section className="cronograma" id="cronograma">
      <div className="crono_box">
          <h1>Cronograma</h1>

          <div className="crono_dias">
            <button>Dia 10</button>
            <button>Dia 11</button>
            <button>Dia 12</button>
            <button>Dia 13</button>
            <button>Dia 14</button>
          </div>

          <div className="crono_participantes">
            <Participante />
          </div>
      </div>
    </section>
  )
}