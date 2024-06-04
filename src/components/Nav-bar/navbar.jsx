import React from "react";
import "./navbar.css";
import { MdEmail } from "react-icons/md";
import { ImInstagram } from "react-icons/im";

function Navbar({ toggleLanguage }) {
  const texts = {
    pt: {
      title1:"INÍCIO",
      title2:"ESTRUTURA",
      title3:" QUEM SOMOS",
      title4:"GALERIA",
      title5:"ATIVIDADES",
      title6:"COMENTÁRIOS",
      title7:"CONTATO",
      title8:"TRANSLATE",
    },
    en: {
      title1:"HOME",
      title2:"STRUCTURE",
      title3:"WHO ARE WE",
      title4:"GALERY",
      title5:"ACTIVITYS",
      title6:"COMMENTS",
      title7:"CONTACT",
      title8:"TRADUÇÃO",
    },
  };
  return (
    <div className="nav-bar">
      <p> {texts.title1}</p>
      <p> {texts.title2}</p>
      <p> {texts.title3}</p>
      <p> {texts.title4}</p>
      <img
        className="logo-navbar "
        src="./images/logos/navbar.png"
        alt="navbar"
      /><p> {texts.title5}</p>
      <p> {texts.title6}</p>
      <p> {texts.title7}</p>
      <button onClick={toggleLanguage}>{texts.title8}</button>
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
