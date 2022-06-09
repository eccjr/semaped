import React from "react";
import "./style.css";
import { Link } from 'gatsby';
import "../reset.css";

export function Header(){
  class MobileNavbar {
    constructor(mobileMenu, navList, navLinks) {
      this.mobileMenu = document.querySelector(mobileMenu);
      this.navList = document.querySelector(navList);
      this.navLinks = document.querySelectorAll(navLinks);
      this.activeClass = "active";
  
      this.handleClick = this.handleClick.bind(this);
    }
    handleClick() {
      this.navList.classList.toggle(this.activeClass);
      this.mobileMenu.classList.toggle(this.activeClass);
    }
  
    addClickEvent() {
      this.mobileMenu.addEventListener("click", this.handleClick);
    }
  
    init() {
      if (this.mobileMenu) {
        this.addClickEvent();
      }
      return this;
    }
  }
  
  const mobileNavbar = new MobileNavbar(
    ".mobile-menu",
    ".header-menu",
    ".header-menu li",
  );
  mobileNavbar.init();

  return (
    <header className="header">
      <div className="container">
        <Link to="/"><img className="header-logo" src="./logo.svg" alt="Logo" /></Link> 
          <nav>
            <ul className="header-menu" id="header-menu">
              <li><Link to="/#informacoes">Informações</Link></li>
              <li><Link to="/#patrocinadores">Patrocinadores</Link></li>
              <li><Link to="/#cronograma">Cronograma</Link></li>
              <li><Link to="/#equipe">Equipe</Link></li>
            </ul>
          </nav>
          <div className="button-and-menu">
            <div className="mobile-menu">
                <div className="line1"></div>
                <div className="line2"></div>
                <div className="line3"></div>
            </div>
            <a className="header-botao" href="#">Inscreva-se</a>
          </div>
        </div>
    </header>
  )
}