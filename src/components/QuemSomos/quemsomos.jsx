import React from "react";
import "./quemsomos.css";

function Whoweare({ language }) {
  const texts = {
    pt: {
      title: "Sobre",
      paragraph1:
        "Meu nome é Nathany Cris Rezende, e minha jornada é uma mistura apaixonante de cuidado, dedicação e aprendizado contínuo. Nascida no Brasil, minha formação em enfermagem abriu as portas para uma carreira que une minha paixão pela saúde e pelo cuidado infantil. Ao longo dos anos, adquiri experiência valiosa tanto como mãe de dois filhos, quanto como profissional dedicada, meus mais de 5 anos de experiência moldaram minha abordagem, combinando conhecimento técnico com compaixão e empatia. Minha jornada no cuidado infantil vai além do profissionalismo; é uma expressão do meu amor e dedicação às crianças que tenho a honra de cuidar.",
      paragraph2:
        "Certificações em Primeiros Socorros, CPR e Urgência e Emergência Pediátrica complementam minha formação, proporcionando as habilidades necessárias para garantir um ambiente seguro e acolhedor para as crianças que cuido. Acredito firmemente que cada criança merece uma base sólida para crescer e prosperar, e me esforço para proporcionar isso em cada interação.",
      paragraph3:
        "Além do aspecto técnico, sou apaixonada por estimular a criatividade ea imaginação das crianças. Atividades como artes, música e crafts não apenas entretêm, mas também educam e inspiram, criando experiências enriquecedoras que contribuem para o desenvolvimento integral de cada criança.",
      /* paragraph4: "Cada sorriso, cada abraço, cada pequena conquista é uma lembrança constante do poder transformador do cuidado e da importância de investir no futuro de nossas crianças.", */
    },
    en: {
      title: "About",
      paragraph1:
        "My name is Nathany Cris Rezende, and my journey is a passionate blend of care, dedication, and continuous learning. Born in Brazil, my nursing education opened doors to a career that combines my passion for health and childcare. Over the years, I have gained valuable experience both as a mother of two and as a dedicated professional. My more than 5 years of experience have shaped my approach, blending technical knowledge with compassion and empathy. My journey in childcare goes beyond professionalism; it is an expression of my love and dedication to the children I have the honor to care for.",
      paragraph2:
        "Certifications in First Aid, CPR, and Pediatric Emergency Care complement my training, providing the necessary skills to ensure a safe and welcoming environment for the children I care for. I firmly believe that every child deserves a solid foundation to grow and thrive, and I strive to provide that in every interaction.",
      paragraph3:
        "Beyond the technical aspect, I am passionate about stimulating children's creativity and imagination. Activities like arts, music, and crafts not only entertain but also educate and inspire, creating enriching experiences that contribute to the holistic development of each child.",
      /* paragraph4: "Every smile, every hug, every little achievement is a constant reminder of the transformative power of care and the importance of investing in the future of our children.", */
    },
  };
  return (
    <div id="about" className="whoweare-1">
      <div className="whoweare-2">
        <h1>{texts[language].title}</h1>
        <p>
          {texts[language].paragraph1}
          <br />
          <br />
          {texts[language].paragraph2}
          <br />
          <br />
          {texts[language].paragraph3}
          <br />
          <br />
          <br />
          {texts[language].paragraph4}
        </p>
      </div>
      <div className="row-images">
        <img
          className="img-whoweare"
          src="/images/content/nathanyOnly.jpeg"
          alt="Nathany"
        />
        <img
          className="img-whoweare"
          src="/images/content/nathanyAndBoys.jpeg"
          alt="boys"
        />
        <img
          className="img-whoweare"
          src="/images/content/allFamily.jpeg"
          alt="All family"
        />
      </div>
    </div>
  );
}

export default Whoweare;
