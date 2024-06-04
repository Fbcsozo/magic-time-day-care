import React from "react";
import "./contato.css";

function Contact({ language }) {
  const texts = {
    pt: {
      title1:"DADOS PARA CONTATO",
      title2:"NOSSA LOCALIZAÇÃO",
      paragraph1:"WHATSAPP",
      paragraph2:"EMAIL:",
      paragraph3:"INSTAGRAM:",
      paragraph4:"Código postal:",

    },
    en: {
      title1:"CONTACT INFORMATION",
      title2:"OUR LOCATION",
      paragraph1:"WHATSAPP",
      paragraph2:"EMAIL:",
      paragraph3:"INSTAGRAM:",
      paragraph4:"Zip code:",
    },
  };
  return (
    <div className="data-info">
      <img
        className="logo-final"
        src="./images/logos/location.png"
        alt="final-img"
      />
      <div className="infos">
        <h1> {texts[language].title1} </h1>
        <ul>
          <li> {texts[language].paragraph1} </li>
          <li> {texts[language].paragraph2} </li>
          <li> {texts[language].paragraph3} </li>
        </ul>
        <br />
        <br />
        <br />
        <br />

        <h1> {texts[language].title2} </h1>
        <p>
          {" "}
          716 bounty dr ap 1617, Foster City - CA <br /> {texts[language].paragraph4} 94404{" "}
        </p>
      </div>
      <img
        className="twolines"
        src="./images/content/twolines-page7.png"
        alt="twolines"
      />
      <img className="test" src="./images/content/test.png" alt="test" />

      <div className="location">
        <a
          href="https://maps.app.goo.gl/nSVVccDf7bHFdKAz5?g_st=iw"
          target="_blank"
          rel="noopener noreferrer"
        >
          Location
        </a>
        {/* <p> Link da localização </p> */}
        <img className="loc-image" src="" alt="location" />
      </div>
    </div>
  );
}

export default Contact;
