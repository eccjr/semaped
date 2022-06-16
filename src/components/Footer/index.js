import React from "react";
import {
  footer,
  center,
  left,
  divider,
  right,
  logo,
  map,
  text,
  email_text,
  fb,
  ig,
  tt,
  simbolos,
  up,
  links,
} from "./footer.module.css";

export function Footer() {
  return (
    <footer className={footer}>
      <div className={center}>
        <div className={left}>
          <div className={logo}></div>
          <ul className={links}>
            <li>
              <a href="#informacoes">Informações</a>
            </li>
            <li>
              <a href="#patrocinadores">Patrocinadores</a>
            </li>
            <li>
              <a href="#equipe">Cronograma</a>
            </li>
            <li>
              <a href="#cronograma">Equipe</a>
            </li>
          </ul>
        </div>
        <div className={divider}></div>
        <div className={right}>
          <div className={map}>
            <iframe
              title="Localização do Evento - SEMAPED"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d932.5417681326228!2d-49.35963917083305!3d-20.78452774530526!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x1eae6fa860f7fc8c!2zMjDCsDQ3JzA0LjMiUyA0OcKwMjEnMzIuNyJX!5e0!3m2!1spt-BR!2sbr!4v1655062218622!5m2!1spt-BR!2sbr"
              allowfullscreen=""
              loading="lazy"
              referrerpolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
          <div className={text}>
            <div>
              <p>Nosso e-mail para contato</p>
              <a
                href="mailto:contatosempad@email.com"
                target="_blank"
                className={email_text}
              >
                contatosempad@email.com
              </a>
            </div>
            <div>
              <p>Nos siga nas redes</p>
              <ul className={simbolos}>
                <li className={fb}></li>
                <li className={ig}></li>
                <li className={tt}></li>
              </ul>
            </div>
            <a href="#home" className={up}></a>
          </div>
        </div>
      </div>
    </footer>
  );
}
