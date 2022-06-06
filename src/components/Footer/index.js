import React from "react";
import {footer, center, left, right, logo, map, text, email, email_text, redes, fb, ig, tt, simbolos, up, links} from './footer.module.css'

export function Footer(){
  return(
    <footer className={footer}>
      <div className={center}>
        <div className={left}>
          <div className={logo}></div>
          <ul className={links}>
            <li><p>Informações</p></li>
            <li><p>Patrocinadores</p></li>
            <li><p>Equipe</p></li>
            <li><p>Cronograma</p></li>
          </ul>
        </div>
        <div className={right}>
          <div className={map}></div>
          <div className={text}>
            <div className={email}>
              <p>Nosso e-mail para contato</p>
              <p className={email_text}>contatosempad@email.com</p>
            </div>
            <div className={redes}>
              <p>Nos siga nas redes</p>
              <ul className={simbolos}>
                <li className={fb}></li>
                <li className={ig}></li>
                <li className={tt}></li>
              </ul>
            </div>
            <div className={up}></div>
          </div>
        </div>
      </div>
    </footer>
  )
}