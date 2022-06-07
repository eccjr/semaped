import React, { useState, useEffect } from "react";
import "./cronograma.css";
// import { Participante } from "./Participante";

const jsonData = require('./cronograma.json'); 

export function Cronograma(){

  const [ dias, setDias ] = useState(0);
  const [ participantes, setParticipantes] = useState([]);

  useEffect(() => {
    switch (dias) {
      case 0:
        setDias(0);
        setParticipantes(jsonData.dia10);
        break;
      case 1:
        setDias(1);
        setParticipantes([]);
        setParticipantes(jsonData.dia11);
        break;
      case 2:
        setDias(2);
        setParticipantes([]);
        setParticipantes(jsonData.dia12);
        break;
      case 3:
        setDias(3);
        setParticipantes([]);
        setParticipantes(jsonData.dia13);
        break;
      case 4:
        setDias(4);
        setParticipantes([]);
        setParticipantes(jsonData.dia14);
        break;
      default:
        break;
    }
  }, [dias]);
 

  return (
    <section className="cronograma">
      <div className="crono_box">
          <h1>Cronograma</h1>

          <div className="crono_dias">
            <button onClick={() => setDias(0)}>Dia 10</button>
            <button onClick={() => setDias(1)}>Dia 11</button>
            <button onClick={() => setDias(2)}>Dia 12</button>
            <button onClick={() => setDias(3)}>Dia 13</button>
            <button onClick={() => setDias(4)}>Dia 14</button>
          </div>

          <div className="crono_participantes">
            {participantes.map((participante) => console.log(participante))}
          </div>
      </div>
    </section>
  )
}