import React from "react";
import Slider from "react-slick";
import "./galeria.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const images = [
  "./images/content/allFamily.jpeg",
  "./images/content/arthurDrawingPeople.jpeg",
  "./images/content/boysInBallPool.jpeg",
  "./images/content/nathanyAndboys.jpeg",
  "./images/content/nathanyOnly.jpeg",
  "./images/content/nathanyOnly2.jpeg",
  "./images/content/packedLunch.jpeg",
  "./images/content/samuelDirtyHand.jpeg",
  "./images/content/samuelRice.jpeg",
  "./images/content/samuelwithdraws.jpeg",
];

function Galery({ language }) {
  const settings = {
    centerMode: true,
    centerPadding: "0",
    slidesToShow: 5,
    focusOnSelect: true,
    infinite: true,
    speed: 500,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  const texts = {
    pt: {
      title1: "GALERIA",
    },
    en: {
      title1: "GALLERY",
    },
  };

  return (
    <div className="container" id="gallery">
      {/*    <img
        className="yellow"
        src="./images/content/page5-big-yellow.png"
        alt="yellow"
      />
      <img
        className="stars5"
        src="./images/content/page-5-stars.png"
        alt="stars"
      />
      <img
        className="purplebot"
        src="./images/content/page5-6.png"
        alt="purple"
      /> */}

      <div className="galery">
        <h1 className="title-galery">{texts[language].title1}</h1>
        <div className="slider-container">
          <Slider {...settings}>
            {images.map((src, index) => (
              <div key={index} className="slide">
                <img className="images-line" src={src} alt={`slide-${index}`} />
              </div>
            ))}
          </Slider>
        </div>
      </div>
    </div>
  );
}

export default Galery;
