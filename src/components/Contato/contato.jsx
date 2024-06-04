import React from "react";
import "./contato.css";

function Contact() {
  return (
    <div className="data-info">
      <img
        className="logo-final"
        src="./images/logos/location.png"
        alt="final-img"
      />
      <div className="infos">
        <h1> DADOS PARA CONTATO </h1>
        <ul>
          <li> WHATSAPP: </li>
          <li> EMAIL: </li>
          <li> INSTAGRAM: </li>
        </ul>
        <br />
        <br />
        <br />
        <br />

        <h1> NOSSA LOCALIZAÇÃO </h1>
        <p>
          {" "}
          716 bounty dr ap 1617, Foster City - CA <br /> ZIP CODE: 94404{" "}
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
        <img className="loc-image" src="" alt="" />
      </div>
    </div>
  );
}

export default Contact;
