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
            {/* <a href="#home" className={up}></a> */}
                    <a href="https://eccjr.com.br/">
                    <svg fill="white" viewBox="0 0 315 119">
                    <g filter="url(#A)">
                    <path d="M141.072 90.96c-14.208 0-21.312-4.736-21.312-14.208V58.416c0-5.632 1.6-9.664 4.8-12.096 3.264-2.496 8.512-3.744 15.744-3.744 6.848 0 11.776 1.184 14.784 3.552 3.072 2.368 4.608 6.464 4.608 12.288v10.272h-31.2v7.008c0 3.2 1.12 5.504 3.36 6.912s5.696 2.112 10.368 2.112c4.416 0 9.632-.768 15.648-2.304v6.624c-5.888 1.28-11.488 1.92-16.8 1.92zm9.984-27.936v-7.296c0-2.816-.864-4.736-2.592-5.76-1.664-1.088-4.544-1.632-8.64-1.632-3.968 0-6.848.544-8.64 1.632-1.792 1.024-2.688 2.944-2.688 5.76v7.296h22.56zm40.527 27.936c-3.2 0-5.536-.064-7.008-.192-1.408-.128-3.04-.448-4.896-.96-1.984-.512-3.52-1.28-4.608-2.304s-2.016-2.528-2.784-4.512c-.768-1.92-1.152-4.32-1.152-7.2V58.704c0-5.184.992-8.896 2.976-11.136 1.088-1.28 2.176-2.24 3.264-2.88 1.152-.704 2.624-1.184 4.416-1.44s3.392-.416 4.8-.48c1.408-.128 3.392-.192 5.952-.192a62.2 62.2 0 0 1 13.248 1.44v6.336c-5.12-1.28-9.888-1.92-14.304-1.92-3.328 0-5.792.256-7.392.768-1.536.448-2.624 1.312-3.264 2.592-.576 1.216-.864 3.104-.864 5.664v19.008c0 2.368.32 4.128.96 5.28.704 1.152 1.92 1.984 3.648 2.496 1.792.448 4.416.672 7.872.672 4.672 0 9.344-.608 14.016-1.824v6.528c-4.352.896-9.312 1.344-14.88 1.344zm44.531 0c-3.2 0-5.536-.064-7.008-.192-1.408-.128-3.04-.448-4.896-.96-1.984-.512-3.52-1.28-4.608-2.304s-2.016-2.528-2.784-4.512c-.768-1.92-1.152-4.32-1.152-7.2V58.704c0-5.184.992-8.896 2.976-11.136 1.088-1.28 2.176-2.24 3.264-2.88 1.152-.704 2.624-1.184 4.416-1.44s3.392-.416 4.8-.48c1.408-.128 3.392-.192 5.952-.192a62.2 62.2 0 0 1 13.248 1.44v6.336c-5.12-1.28-9.888-1.92-14.304-1.92-3.328 0-5.792.256-7.392.768-1.536.448-2.624 1.312-3.264 2.592-.576 1.216-.864 3.104-.864 5.664v19.008c0 2.368.32 4.128.96 5.28.704 1.152 1.92 1.984 3.648 2.496 1.792.448 4.416.672 7.872.672 4.672 0 9.344-.608 14.016-1.824v6.528c-4.352.896-9.312 1.344-14.88 1.344zm25.908-64.224h8.64v9.024h-8.64v-9.024zm-6.816 84.384c-1.793 0-3.425-.128-4.897-.384v-5.664c1.344.256 2.56.384 3.648.384 2.817 0 4.865-.576 6.145-1.728 1.28-1.088 1.92-3.104 1.92-6.048V43.536h8.64v53.472c0 5.184-1.216 8.832-3.648 10.944s-6.368 3.168-11.808 3.168zm30.438-67.584h8.16v7.584c0-1.472.64-2.848 1.92-4.128 1.28-1.344 2.912-2.4 4.896-3.168 1.984-.832 3.936-1.248 5.856-1.248h4.224v7.392h-4.8c-4.096 0-7.072.544-8.928 1.632-1.792 1.024-2.688 2.912-2.688 5.664V90h-8.64V43.536z" /></g><g filter="url(#B)">
                    <path d="M4.32 70.2v-5.184L31.68 49.68v5.832L9.936 67.824l21.744 11.88v5.832L4.32 70.2zm55.728-27.72h5.544L42.264 90.72H36.72l23.328-48.24zm10.577 37.224l21.744-11.88-21.744-12.312V49.68l27.36 15.336V70.2l-27.36 15.336v-5.832z" /></g><defs><filter id="A" x="115.76" y="25.736" width="198.94" height="92.384" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB"><feFlood flood-opacity="0" result="A" /><feColorMatrix in="SourceAlpha" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" /><feOffset dy="3" /><feGaussianBlur stdDeviation="2" /><feColorMatrix values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.6 0" /><feBlend in2="A" /><feBlend in="SourceGraphic" /></filter><filter id="B" x=".32" y="42.48" width="101.665" height="56.24" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB"><feFlood flood-opacity="0" result="A" /><feColorMatrix in="SourceAlpha" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" /><feOffset dy="4" /><feGaussianBlur stdDeviation="2" /><feColorMatrix values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.6 0" /><feBlend in2="A" /><feBlend in="SourceGraphic" /></filter></defs></svg></a>

          </div>
        </div>
      </div>
    </footer>
  );
}
