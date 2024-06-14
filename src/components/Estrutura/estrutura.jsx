import React from "react";
import "./estrutura.css";

function Structure({ language }) {
  const texts = {
    pt: {
      title1: "NOSSA ESTRUTURA",
      paragraph1:
        "Localizado em Foster City, a Magic Time Daycare oferece um ambiente tranquilo e acolhedor para crianças em um ambiente caseiro. Situado dentro de nossa própria casa, proporcionamos um espaço seguro e familiar onde os pequenos podem se sentir confortáveis e protegidos. Nosso lar foi transformado em um ambiente dedicado ao cuidado e à educação infantil, com áreas especialmente projetadas para estimular o desenvolvimento físico, cognitivo e emocional das crianças.",
      paragraph2:
        "Nosso compromisso com o bem-estar e o desenvolvimento integral das crianças é evidente em tudo o que fazemos. Além disso, acreditamos no poder do brincar como uma ferramenta fundamental para o aprendizado e o desenvolvimento. De atividades artísticas e musicais a jogos educativos e tempo ao ar livre, cada momento na Magic Time é uma oportunidade para as crianças explorarem, descobrirem e se divertirem.",
    },
    en: {
      title1: "OUR STRUCTURE",
      paragraph1:
        "Located in Foster City, Magic Time Daycare offers a peaceful and welcoming environment for children in a home-like setting. Nestled within our own home, we provide a secure and familiar space where little ones can feel comfortable and protected. Our home has been transformed into a dedicated environment for childcare and education, with areas specially designed to encourage the physical, cognitive, and emotional development of children.",
      paragraph2:
        "Our commitment to the well-being and comprehensive development of children is evident in everything we do. Additionally, we believe in the power of play as a fundamental tool for learning and development. From artistic and musical activities to educational games and outdoor time, every moment at Magic Time is an opportunity for children to explore, discover, and have fun.",
    },
  };
  return (
    <div id="structure" className="structure-1">
      <img className="star-1 " src="./images/content/star.png" alt="star1" />
      <img className="star-2 " src="./images/content/star.png" alt="star2" />
      <img className="star-3 " src="./images/content/star.png" alt="star3" />
      <h1> {texts[language].title1} </h1>

      <div className="structure-2">
        <video
          width="250"
          controls
          autoPlay
          loop
          poster="/images/content/structure-1.jpeg"
        >
          <source src="/video/daycare.mp4" type="video/mp4" />
          Seu navegador não suporta a tag de vídeo.
        </video>
        <p className="text-structure">
          {texts[language].paragraph1} <br />
          <br />
          {texts[language].paragraph2}
        </p>
        <img
          className="img-structure"
          src="./images/content/green-link.png"
          alt="link"
        />
      </div>
    </div>
  );
}

export default Structure;
