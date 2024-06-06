import React from "react";
import "./navbar.css";
import { MdEmail } from "react-icons/md";
import { ImInstagram } from "react-icons/im";

function Navbar({ toggleLanguage, language }) {
  const texts = {
    pt: {
      title1: "INÍCIO",
      title2: "ESTRUTURA",
      title3: " QUEM SOMOS",
      title4: "GALERIA",
      title5: "ATIVIDADES",
      title6: "COMENTÁRIOS",
      title7: "CONTATO",
      title8: "TRANSLATE",
    },
    en: {
      title1: "HOME",
      title2: "STRUCTURE",
      title3: "WHO ARE WE",
      title4: "GALERY",
      title5: "ACTIVITYS",
      title6: "COMMENTS",
      title7: "CONTACT",
      title8: "TRADUÇÃO",
    },
  };
  return (
    <div className="nav-bar">
      <a href="#home"> {texts[language].title1}</a>
      <a href="#structure"> {texts[language].title2}</a>
      <a href="#about"> {texts[language].title3}</a>
      <a href="#activity"> {texts[language].title5}</a>

      <img
        className="logo-navbar "
        src="./images/logos/navbar.png"
        alt="navbar"
      />
      <a href="#gallery"> {texts[language].title4}</a>
      <a href="#comments"> {texts[language].title6}</a>
      <a href="#contact"> {texts[language].title7}</a>
      <button className="translate-button" onClick={toggleLanguage}>
        {texts[language].title8}
      </button>
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
