import React from "react";
import "./style.css";


// dar margin-top ;)
export function MainSection(){
  return(
    <main id="home" className="mainSection">
            <img src="./banner.png" alt="Logo da Semana da Pedagogia"></img>

            <div className="semaped-text">
                <h2>Dias 19 a 23 de Setembro</h2>
                <p>Sejam bem-vindos a XIX semana da Pedagogia UNESP-IBILCE, nesta edição retrataremos sobre o olhar crítico, reflexivo e representativo a etapa da educação infantil e anos iniciais do ensino fundamental ao longo de duas conferências, oito minicursos, além da primeira mostra pedagógica, junto de diversas atividades culturais.
                <br/>Vai perder essa? Eu aposto que não! Então clique aqui e faça parte da nossa família unespiana.</p>
                <a href="http://www.geci.ibilce.unesp.br/site/semaped2022">Inscreva-se</a>
            </div>
    </main>
  )
}