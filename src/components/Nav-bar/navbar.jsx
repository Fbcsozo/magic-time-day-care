import React from "react";
import "./navbar.css";
import { MdEmail } from "react-icons/md";
import { ImInstagram } from "react-icons/im";

function Navbar({ toggleLanguage }) {
  return (
    <div className="nav-bar">
      {" "}
      <p> HOME</p>
      <p> ESTRUTURA</p>
      <p> QUEM SOMOS</p>
      <p> GALERIA</p>
      <img
        className="logo-navbar "
        src="./images/logos/navbar.png"
        alt="navbar"
      />
      <p> ATIVIDADES</p>
      <p> CONTATO</p>
      <button onClick={toggleLanguage}>TRADUÇÃO</button>
      <p> COMENTARIOS</p>
      <div className="icons">
        <MdEmail />
        <ImInstagram />
      </div>
    </div>
  );
}

export default Navbar;

/* import React from "react";
import "./navbar.css";
import { MdEmail } from "react-icons/md";
import { ImInstagram } from "react-icons/im";

function Navbar({ toggleLanguage }) {
    return (
        <div className="nav-bar">
            <p> HOME</p>
            <p> ESTRUTURA</p>
            <p> QUEM SOMOS</p>
            <p> GALERIA</p>
            <img src="" alt="image" />
            <p> ATIVIDADES</p>
            <p> CONTATO</p>
            <button onClick={toggleLanguage}>TRADUÇÃO</button>
            <div className="icons">
                <MdEmail />
                <ImInstagram />
            </div>
        </div>
    );
}

export default Navbar; */
