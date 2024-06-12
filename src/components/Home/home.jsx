import React from "react";
import "./home.css";

function Home({ language }) {
  const texts = {
    pt: {
      paragraph1: "UM LUGAR DE ACOLHIMENTO E SEGURANÇA PARA NOSSAS CRIANÇAS.",
      paragraph2: "VENHA NOS CONHECER!",
    },
    en: {
      paragraph1: "A WELCOMING AND SAFE PLACE FOR OUR CHILDREN.",
      paragraph2: "COME AND VISIT US!",
    },
  };

  return (
    <div id="home" className="home-1">
      <div className="home-2">
        <img
          className="only-title"
          src="./images/logos/only-title.png"
          alt="onlyTitle"
        />
        <p>{texts[language].paragraph1}</p>
        <p>{texts[language].paragraph2}</p>
      </div>
      <div className="images-mobile">
        <img
          className="rainbow"
          src="./images/content/image-rainbow.png"
          alt="raibow"
        />
        <img
          className="arthuresamu"
          src="./images/content/Arthur-Samu.png"
          alt="arthuresamuel"
        />
        <img
          className="samuelzin"
          src="./images/content/samuelzin.jpeg"
          alt="samuelzin"
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
