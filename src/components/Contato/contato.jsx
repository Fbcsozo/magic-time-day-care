import React, { useState, useEffect, useRef, useMemo } from "react";
import { GoogleMap, LoadScript } from "@react-google-maps/api";
import "./contato.css";

function Contact({ language }) {
  const texts = {
    pt: {
      title1: "DADOS PARA CONTATO",
      title2: "NOSSA LOCALIZAÇÃO",
      paragraph1: "Whatsapp: (650) 686-0026",
      paragraph2: "Email: magictimedaycare@gmail.com",
      paragraph3: "Instagram: magictimedaycare",
      paragraph4: "Código postal:",
    },
    en: {
      title1: "CONTACT INFORMATION",
      title2: "OUR LOCATION",
      paragraph1: "Whatsapp: (650) 686-0026",
      paragraph2: "Email: magictimedaycare@gmail.com",
      paragraph3: "Instagram: magictimedaycare",
      paragraph4: "Zip code:",
    },
  };

  const mapStyles = {
    height: "250px",
    width: "70%",
  };

  const defaultCenter = useMemo(() => {
    return {
      lat: 37.55614756641862, 
      lng: -122.26327041866297, 
    };
  }, []); // Esta dependência vazia garante que defaultCenter seja calculado apenas uma vez

  const mapRef = useRef(null);

  useEffect(() => {
    if (mapRef.current) {
      new window.google.maps.Marker({
        position: defaultCenter,
        map: mapRef.current,
      });
    }
  }, [mapRef, defaultCenter]);

  const scriptOptions = {
    googleMapsApiKey: "AIzaSyB_Eq00MJznd01Yt-FH7F7H2yXhg3TD2Fg",
    libraries: ["maps"],
  };

  return (
    <div id="contact" className="data-info">
      <img
        className="logo-final"
        src="./images/logos/location.png"
        alt="final-img"
      />
      <div className="content">
        <div className="infos">
          <h1>{texts[language].title1}</h1>
          <ul>
            <li>{texts[language].paragraph1}</li>
            <li>{texts[language].paragraph2}</li>
            <li>{texts[language].paragraph3}</li>
          </ul>
          <br />
          <h1>{texts[language].title2}</h1>
          <p>
            716 bounty dr ap 1617, Foster City - CA <br />
            {texts[language].paragraph4} 94404
          </p>
        </div>
       
        <img
          className="twolines"
          src="./images/content/twolines-page7.png"
          alt="twolines"
        />
         <div className="location">
          <LoadScript
            googleMapsApiKey={scriptOptions.googleMapsApiKey}
            libraries={scriptOptions.libraries}
            loadingElement={<div>Loading...</div>}
          >
            <GoogleMap
              mapContainerStyle={mapStyles}
              zoom={13}
              center={defaultCenter}
              onLoad={(map) => {
                mapRef.current = map;
              }}
            />
          </LoadScript>
        </div>
      </div>
      <img className="test" src="./images/content/test.png" alt="test" />
    </div>
  );
}

export default Contact;
