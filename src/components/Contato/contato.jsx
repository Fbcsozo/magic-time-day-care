import React, { useState } from "react";
import { GoogleMap, LoadScript, Marker } from "@react-google-maps/api";
import "./contato.css";

const mapStyles = {
  height: "250px",
  width: "50%",
  left: "40vh",
  top: "15vh",
};

const defaultCenter = {
  lat: 37.556175,
  lng: -122.263565,
};

const CustomMap = ({ center, zoom, children }) => {
  const [map, setMap] = useState(null);

  const onLoad = (mapInstance) => {
    setMap(mapInstance);
  };

  return (
    <GoogleMap
      mapContainerStyle={mapStyles}
      zoom={zoom}
      center={center}
      onLoad={onLoad}
      mapId="DEMO_MAP_ID"
    >
      {children}
    </GoogleMap>
  );
};

function Contact({ language }) {
  const texts = {
    pt: {
      title1: "DADOS PARA CONTATO",
      title2: "NOSSA LOCALIZAÇÃO",
      paragraph1: "Whatsapp: (650) 686-0026",
      paragraph2: "Email: magictimedaycare@gmail.com",
      paragraph3: "Instagram:magictimedaycare",
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

  return (
    <div id="contact" className="data-info">
      <img
        className="logo-final"
        src="./images/logos/location.png"
        alt="final-img"
      />
      {/* <img
        className="loc-image"
        src="./images/content/location-img.png"
        alt="location"
      /> */}
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
      <img className="test" src="./images/content/test.png" alt="test" />

      <div className="location">
        <LoadScript
          googleMapsApiKey="AIzaSyD_h2fFbdD_PIX3I0n-q1N--1Y32ILY32Q"
          libraries={["maps", "places"]}
        >
          <CustomMap center={defaultCenter} zoom={14}>
            <Marker position={defaultCenter} title="My location" />
          </CustomMap>
        </LoadScript>
      </div>
    </div>
  );
}

export default Contact;
