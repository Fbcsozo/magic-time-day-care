import React, { useState } from "react";
import Navbar from "./components/Nav-bar/navbar";
import Home from "./components/Home/home";
import Whoweare from "./components/QuemSomos/quemsomos";
import Galery from "./components/Galeria/galeria";
import Contact from "./components/Contato/contato";
import Structure from "./components/Estrutura/estrutura";
import "./App.css";
import Activity from "./components/Atividades/atividades";
import Comments from "./components/Comments/comments";

function App() {
  const [language, setLanguage] = useState("pt"); // Estado de idioma (português por padrão)

  const toggleLanguage = () => {
    setLanguage((prevLanguage) => (prevLanguage === "pt" ? "en" : "pt"));
  };

  return (
    <div className="conteiner">
      <Navbar toggleLanguage={toggleLanguage}
              language={language} />
      <Home language={language} />
      <Structure language={language} />
      <Whoweare language={language} />
      <Activity language={language} />
      <Galery language={language} /> 
      <Comments language={language} />
      <Contact language={language} />
    </div>
  );
}

export default App;

/* APP. JS:

import React, { useState } from 'react';
import Navbar from "./components/Nav-bar/navbar";
import Home from "./components/Home/home";
import Whoweare from "./components/QuemSomos/quemSomos";
import Gallery from "./components/Galeria/galeria";
import Contact from "./components/Contato/contato";
import Structure from "./components/Estrutura/estrutura";
import Activity from "./components/Atividades/atividades";
import Comments from "./components/Comments/comments";
import "./App.css";

function App() {
  const [language, setLanguage] = useState('pt'); // Estado de idioma (português por padrão)

  const toggleLanguage = () => {
    setLanguage(prevLanguage => (prevLanguage === 'pt' ? 'en' : 'pt'));
  };

  return (
    <div>
      <Navbar toggleLanguage={toggleLanguage} />
      <Home language={language} />
      <Structure language={language} />
      <Whoweare language={language} />
      <Activity language={language} />
      <Gallery language={language} />
      <Comments language={language} />
      <Contact language={language} />
    </div>
  );
}

export default App; */
