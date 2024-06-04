import React from "react";
import "./estrutura.css";

function Structure() {
  return (
    <div className="structure-1">
      <img className="star-1 " src="./images/content/star.png" alt="star1" />
      <img className="star-2 " src="./images/content/star.png" alt="star2" />
      <img className="star-3 " src="./images/content/star.png" alt="star3" />

      <div className="structure-2">
        <h1> NOSSA ESTRUTURA </h1>

        <p className="text-structure">
          {" "}
          Localizado em Foster City, o Magic Time Daycare oferece um ambiente
          tranquilo e acolhedor para as crianças em um ambiente caseiro. Situado
          dentro de nossa própria casa, proporcionamos um espaço seguro e
          familiar onde os pequenos podem se sentir confortáveis e protegidos.
          Nosso lar se transformou em um ambiente dedicado ao cuidado e à
          educação infantil, com áreas especialmente projetadas para estimular o
          desenvolvimento físico, cognitivo e emocional das crianças. <br />
          <br />
          Nosso compromisso com o bem-estar e o desenvolvimento integral das
          crianças é evidente em tudo o que fazemos. Além disso, acreditamos no
          poder do brincar como uma ferramenta fundamental para o aprendizado e
          o desenvolvimento. De atividades artísticas e musicais à jogos
          educativos e tempo ao ar livre, cada momento na Magic Time é uma
          oportunidade para as crianças explorarem, descobrirem e se divertirem.{" "}
        </p>
      </div>
      <img
        className="img-structure"
        src="./images/content/green-link.png"
        alt="link"
      />
    </div>
  );
}

export default Structure;
