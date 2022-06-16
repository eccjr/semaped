import React, { useRef } from "react";
import { Link } from "gatsby";
import "./style.css";
import "../reset.css";

export function Header() {
  const mobileMenu = useRef();
  const headerMenu = useRef();

  function toggleNavbar() {
    mobileMenu.current.classList.toggle("active");
    headerMenu.current.classList.toggle("active");
  }

  return (
    <header className="header">
      <div className="container2">
        <Link to="/">
          <img className="header-logo" src="./logo.svg" alt="Logo" />
        </Link>
        <nav>
          <ul ref={headerMenu} className="header-menu" id="header-menu">
            <li>
              <Link to="/#informacoes">Informações</Link>
            </li>
            <li>
              <Link to="/#patrocinadores">Patrocinadores</Link>
            </li>
            <li>
              <Link to="/#cronograma">Cronograma</Link>
            </li>
            <li>
              <Link to="/#equipe">Equipe</Link>
            </li>
          </ul>
        </nav>
        <div className="button-and-menu">
          <div
            className="mobile-menu"
            onClick={toggleNavbar}
            ref={mobileMenu}
            role="button"
          >
            <div className="line1"></div>
            <div className="line2"></div>
            <div className="line3"></div>
          </div>
          <a className="header-botao" href="#">
            Inscreva-se
          </a>
        </div>
      </div>
    </header>
  );
}
