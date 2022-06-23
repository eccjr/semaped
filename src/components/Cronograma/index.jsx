import React, { useState, useEffect } from "react";
import "./cronograma.css";
import { Participante } from "./Participante";

const jsonData = require('./cronograma.json'); 

export function Cronograma(){

  const [ dias, setDias ] = useState(0);
  const [ participantes, setParticipantes] = useState([]);

  useEffect(() => {
    switch (dias) {
      case 0:
        setDias(0);
        setParticipantes(jsonData.dia19);
        break;
      case 1:
        setDias(1);
        setParticipantes([]);
        setParticipantes(jsonData.dia20);
        break;
      case 2:
        setDias(2);
        setParticipantes([]);
        setParticipantes(jsonData.dia21);
        break;
      case 3:
        setDias(3);
        setParticipantes([]);
        setParticipantes(jsonData.dia22);
        break;
      case 4:
        setDias(4);
        setParticipantes([]);
        setParticipantes(jsonData.dia23);
        break;
      default:
        break;
    }
  }, [dias]);
 

  return (
    <section className="cronograma" id="cronograma">
      <div className="crono_box">
          <h2>Cronograma</h2>

          <div className="crono_dias">
            <button onClick={() => setDias(0)} className={ dias===0 ? "crono_dias_active" : "" } >Dia 19</button>
            <button onClick={() => setDias(1)} className={ dias===1 ? "crono_dias_active" : "" } >Dia 20</button>
            <button onClick={() => setDias(2)} className={ dias===2 ? "crono_dias_active" : "" } >Dia 21</button>
            <button onClick={() => setDias(3)} className={ dias===3 ? "crono_dias_active" : "" } >Dia 22</button>
            <button onClick={() => setDias(4)}className={ dias===4 ? "crono_dias_active" : "" } >Dia 23</button>
          </div>

          <div className="crono_participantes">
            {participantes.map((participante) => (
              <Participante
                nome={participante.nome}
                image_url={participante.image_url}
                titulo={participante.titulo}
                horario_loc={participante.horario_loc}
                descricao={participante.descricao}
                instagram={participante.instagram}
                linkedin={participante.linkedin}
              />
              
            )
            )}
          </div>
      </div>
    </section>
  )
}