import React from "react";
import Slider from "react-slick";
import "./galeria.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const images = [
  "./images/content/arthurDrawingPeople.jpeg",
  "./images/content/boysInBallPool.jpeg",
  "./images/content/nathanyOnly2.jpeg",
  "./images/content/packedLunch.jpeg",
  "./images/content/samuelDirtyHand.jpeg",
  "./images/content/samuelRice.jpeg",
  "./images/content/samuelwithdraws.jpeg",
  "./images/content/gallerymedia1.jpeg",
  "./images/content/gallerymedia2.jpeg",
  "./images/content/gallerymedia3.jpeg",
  "./images/content/gallerymedia4.jpeg",
  "./images/content/gallerymedia5.jpeg",
  "./images/content/gallerymedia6.jpeg",
  "./images/content/gallerymedia7.jpeg",
  "./images/content/gallerymedia8.jpeg",
  "./images/content/playground1.jpeg",
  "./images/content/playground2.jpeg",
  "./images/content/playground3.jpeg",
  "./images/content/playground4.jpeg",
  "./images/content/playground5.jpeg",
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
