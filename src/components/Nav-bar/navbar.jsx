import React, { useState } from "react";
import "./navbar.css";
import { MdEmail } from "react-icons/md";
import { ImInstagram } from "react-icons/im";
import { FaBars } from "react-icons/fa";
import { AiOutlineClose } from "react-icons/ai";
import { FaSquareWhatsapp } from "react-icons/fa6";

function Navbar({ toggleLanguage, language }) {
  const [isOpen, setIsOpen] = useState(false);

  const texts = {
    en: {
      title1: "HOME",
      title2: "STRUCTURE",
      title3: "ABOUT",
      title4: "GALERY",
      title5: "SCHEDULE",
      title6: "COMMENTS",
      title7: "CONTACT",
      title8: "TRADUÇÃO",
    },
    pt: {
      title1: "INÍCIO",
      title2: "ESTRUTURA",
      title3: "SOBRE",
      title4: "GALERIA",
      title5: "ROTINA",
      title6: "COMENTÁRIOS",
      title7: "CONTATO",
      title8: "TRANSLATE",
    },
  
  };

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };
  const openGmail = () => {
    window.location.href = "mailto:magictimedaycare@gmail.com";
  };
  const openWhatsApp = () => {
    window.open("https://wa.me/+16506860026", "_blank");
  };
  return (
    <div className="navbar-container">
      <div className="nav-bar">
        <a href="#home">{texts[language].title1}</a>
        <a href="#structure">{texts[language].title2}</a>
        <a href="#about">{texts[language].title3}</a>
        <a href="#activity">{texts[language].title5}</a>
        <img
          className="logo-navbar"
          src="./images/logos/navbar.png"
          alt="navbar"
        />
        <a href="#gallery">{texts[language].title4}</a>
        <a href="#comments">{texts[language].title6}</a>
        <a href="#contact">{texts[language].title7}</a>
        <button className="translate-button" onClick={toggleLanguage}>
          {texts[language].title8}
        </button>
        <div className="icons">
          <MdEmail onClick={openGmail} />
          <ImInstagram
            onClick={() =>
              window.open(
                "https://www.instagram.com/magictimedaycare",
                "_blank"
              )
            }
          />
          <FaSquareWhatsapp onClick={openWhatsApp} />
        </div>
        <button className="menu-toggle" onClick={toggleMenu}>
          {isOpen ? <AiOutlineClose /> : <FaBars />}
        </button>
      </div>
      {isOpen && (
        <div className="mobile-menu">
          <a href="#home" onClick={toggleMenu}>
            {texts[language].title1}
          </a>
          <a href="#structure" onClick={toggleMenu}>
            {texts[language].title2}
          </a>
          <a href="#about" onClick={toggleMenu}>
            {texts[language].title3}
          </a>
          <a href="#activity" onClick={toggleMenu}>
            {texts[language].title5}
          </a>
          <a href="#gallery" onClick={toggleMenu}>
            {texts[language].title4}
          </a>
          <a href="#comments" onClick={toggleMenu}>
            {texts[language].title6}
          </a>
          <a href="#contact" onClick={toggleMenu}>
            {texts[language].title7}
          </a>
          <button className="translate-button" onClick={toggleLanguage}>
            {texts[language].title8}
          </button>
          <div className="icons">
            <MdEmail onClick={openGmail} />
            <ImInstagram
              onClick={() =>
                window.open("https://www.instagram.com/seuinstagram", "_blank")
              }
            />
            <FaSquareWhatsapp onClick={openWhatsApp} />
          </div>
        </div>
      )}
    </div>
  );
}

export default Navbar;
