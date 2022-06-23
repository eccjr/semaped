import React from "react";
import "./style.css";


// dar margin-top ;)
export function MainSection(){
  return(
    <main id="home" className="mainSection">
            <img src="./banner.png" alt="Logo da Semana da Pedagogia"></img>

            <div className="semaped-text">
                <h2>Dias 07, 08 e 09 de Setembro</h2>
                <p>Sejam bem-vindos a XIX semana de pedagogia UNESP-IBILCE, nesta edição retrataremos sobre o olhar crítico, reflexivo e representativo a etapa da educação infantil e anos iniciais do ensino fundamental ao longo de três conferências, oito minicursos, além da primeira mostra pedagógica, junto de diversas atividades culturais, sem falar nos deliciosos Coffee Breaks.
                <br/>Vai perder essa? Eu aposto que não! Então clique aqui e faça parte da nossa família unespiana.</p>
                <button>Inscreva-se</button>
            </div>
    </main>
  )
}