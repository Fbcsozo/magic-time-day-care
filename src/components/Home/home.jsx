import React from "react";
import "./home.css";

function Home({ language }) {
  const texts = {
    pt: {
      paragraph1:
        "UM LUGAR DE ACOLHIMENTO E SEGURANÇA PARA NOSSAS CRIANÇAS, INCENTIVANDO O DESENVOLVIMENTO SAUDÁVEL E FELIZ",
      paragraph2: "VENHA NOS CONHECER!",
    },
    en: {
      paragraph1:
        "A WELCOMING AND SAFE PLACE FOR OUR CHILDREN, ENCOURAGING HEALTHY AND HAPPY DEVELOPMENT",
      paragraph2: "COME AND VISIT US!",
    },
  };

  return (
    <div className="home-1">
      <img
        className="cloud"
        src="./images/backgrounds/page-navbar.png"
        alt="cloud"
      />

      <div className="home-2">
        <p>{texts[language].paragraph1}</p> <br />
        <p>{texts[language].paragraph2}</p>
        <img
          className="rainbow"
          src="./images/content/image-rainbow.png"
          alt="raibow"
        />
        <img
          className="arthuresamu"
          src="./images/content/Arthur-Samu.jpeg"
          alt="arthuresamuel"
        />
      </div>
    </div>
  );
}
export default Home;

/* function Home({ language }) {
  const texts = {
    pt: {
      title: "Bem-vindo ao nosso site",
      description: "Este é um site de exemplo em português."
    },
    en: {
      title: "Welcome to our website",
      description: "This is a sample website in English."
    }
  };

  return (
    <div>
      <h1>{texts[language].title}</h1>
      <p>{texts[language].description}</p>
    </div>
  );
}

export default Home; */
