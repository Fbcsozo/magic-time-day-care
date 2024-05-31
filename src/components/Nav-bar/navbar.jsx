import React from "react";
import "./navbar.css";
import { MdEmail } from "react-icons/md";
import { ImInstagram } from "react-icons/im";

function Navbar() {
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
        alt="image"
      />
      <p> ATIVIDADES</p>
      <p> CONTATO</p>
      <p> TRADUÇÃO</p>
      <p> COMENTARIOS</p>
      <div className="icons">
        <MdEmail />
        <ImInstagram />
      </div>
    </div>
  );
}

export default Navbar;
