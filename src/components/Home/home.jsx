import React from "react";
import "./home.css";

function Home() {
  return (
    <div className="home-1">
      <img className="cloud" src="./images/backgrounds/page-navbar.png" />

      <div className="home-2">
        <p>
          {" "}
          UM LUGAR DE ACOLHIMENTO E SEGURANÇA PARA NOSSAS CRIANÇAS, INCENTIVANDO
          O DESENVOLVIMENTO SAUDÁVEL E FELIZ. <br />
          <br />
          VENHA NOS CONHECER!{" "}
        </p>
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
