import React from "react";
import "./atividades.css";

function Activity({ language }) {
  const texts = {
    pt: {
      title1: "NOSSA MISSÃO",
      title2: "Rotina Diária",
      paragraph1:
        "No agitado mundo de hoje, encontrar um ambiente seguro e acolhedor para o cuidado das crianças é essencial. Na Magic Time Daycare, nosso compromisso é proporcionar não apenas um lugar para as crianças ficarem, mas um lar longe de casa, onde o bem-estar e a felicidade de cada criança são prioridades máximas.",
      activity1: "7:30 - 9:00 - Chegada / hora de brincar",
      /* activity2: "8:30 - 9:00 - Café da manhã, limpeza/lavagem", */
      activity3: "9:00 - 9:30 - Café da manhã",
      activity4: "9:30 - 10:00 - Dinâmica do grupo",
      activity5: "10:00 - 10:30 - Hora de arte",
      activity6: "10:30 - 12:00 - Hora de brincar",
      activity7: "12:00 - 12:30 - Brincar ao ar livre",
      activity8: "12:30 - 1:00 - Almoço",
      activity9: "1:00 - 3:00 - Hora da soneca",
      activity10:"3:00 - 4:00 - Hora de brincar",
      activity11: "4:00 - 4:30 - Hora do lanche",
      activity12: "4:30 - 5:00 - Horário de saída",
      
    },
    en: {
      title1: "OUR MISSION",
      title2: "Schedule",
      paragraph1:
        "In today's hectic world, finding a safe and welcoming environment for child care is essential. At Magic Time Daycare, our commitment is to provide not just a place for children to stay, but a home away from home, where the well-being and happiness of each child are top priorities.",
      activity1: "7:30 - Drop-off",
      /* activity2: "8:30 - 9:00am Breakfast, clean-up/wash-up", */
      activity3: "9:00 - 9:30am Breakfast",
      activity4: "9:30 - 10:00am Circle time",
      activity5: "10:00 - 10:30am Crafts time",
      activity6: "10:30 - 11:00am Free play",
      activity7: "11:00 - 12:00pm Outside play",
      activity8: "12:00 - 1:00pm Lunch time",
      activity9: "1:00 - 3:00pm Rest time",
      activity10: "3:00 - 4:00pm Free play",
      activity11: "4:00 - 4:30pm Snack time",
      activity12: "4:30 - 5:00pm Pick-up time",
    },
  };
  return (
    <div id="activity" className="activity-1">
      <div className="activity-2">
        <img
          className="img-activity"
          src="./images/content/activity-1.png"
          alt=""
        />
        <h1> {texts[language].title1} </h1>

        <p>{texts[language].paragraph1}</p>
      </div>

      <div className="activity-3">
        <img
          className="img-activity"
          src="./images/content/activity-2.png"
          alt="activity"
        />
        <img
          className="img-flower"
          src="./images/content/page5-flowers.png"
          alt="flower"
        />
        <img
          className="img-pencils"
          src="./images/content/pencils.png"
          alt="pencil"
        />
        <img
          className="gram-img"
          src="./images/backgrounds/gram.png"
          alt="gram"
        />
        <h1> {texts[language].title2}</h1>

        <div className="order-list">
          <div>
            <ul className="ulone">
              <li> {texts[language].activity1} </li>
              {/* <li> {texts[language].activity2} </li> */}
              <li> {texts[language].activity3}</li>
              <li> {texts[language].activity4}</li>
              <li> {texts[language].activity5}</li>
              <li> {texts[language].activity6}</li>
              <li> {texts[language].activity7}</li>
            </ul>
          </div>

          <div>
            <ul className="ultwo">
              <li> {texts[language].activity8}</li>
              <li> {texts[language].activity9} </li>
              <li> {texts[language].activity10} </li>
              <li> {texts[language].activity11}</li>
              <li> {texts[language].activity12} </li>
             
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Activity;

/* atividades.jsx:

import React from "react";
import "./atividades.css";

function Activity({ language }) {

  const texts = {
    pt: {
      title1:"NOSSA MISSÃO",
      title2:"ATIVIDADES",
      paragraph1:"No agitado mundo de hoje, encontrar um ambiente seguro e acolhedor para o cuidado das crianças é essencial. Na Magic Time Daycare, nosso compromisso é proporcionar não apenas um lugar para as crianças ficarem, mas um lar longe de casa, onde o bem-estar e a felicidade de cada criança são prioridades máximas.",
      activity1:"7:30 - Chegada",
      activity2:"8:30 - 9:00 - Café da manhã, limpeza/lavagem",
      activity3:"9:00 - 9:30 - Hora do círculo",
      activity4:"9:30 - 10:00 - Artes e artesanato",
      activity5:"10:00 - 10:30 - Hora da música",
      activity6:"10:30 - 12:00 - Tempo de brincar ao ar livre",
      activity7:"12:00 - 12:30 - Brincadeira livre e dentro da creche",
      activity8:"12:30 - 1:00 - Almoço, limpeza/lavagem",
      activity9:"1:00 - 3:00 - Hora de descanso e/ou tempo tranquilo",
      activity10:"3:00 - 4:00 - Brincadeira ao ar livre (dependendo da estação)",
      activity11:"4:00 - 4:30 - Lanche da tarde, limpeza/lavagem",
      activity12:"4:30 - 5:00 - Brincadeira livre dentro da creche",
      activity13:"5:00 - Saídas (20 minutos de tolerância)",

    },
    en: {
      title1:"OUR MISSION",
      title2:"ACTIVITIES",
      paragraph1:"In today's hectic world, finding a safe and welcoming environment for child care is essential. At Magic Time Daycare, our commitment is to provide not just a place for children to stay, but a home away from home, where the well-being and happiness of each child are top priorities.",
      activity1:"7:30 - Drop-off",
      activity2:"8:30 - 9:00am Breakfast, clean-up/wash-up",
      activity3:"9:00 - 9:30am Circle-time",
      activity4:"9:30 - 10:00am Arts and crafts",
      activity5:"10:00 - 10:30am Music time",
      activity6:"10:30 - 12:00am Outside play-time",
      activity7:"12:00 - 12:30pm Free-play and inside daycare",
      activity8:"12:30 - 1:00pm Lunch time, clean-up/wash-up",
      activity9:"1:00 - 3:00pm Rest-time and/or quiet-time",
      activity10:"3:00 - 4:00pm Outside play-time (weather permitting)",
      activity11:"4:00 - 4:30pm Snack time, clean-up/wash-up",
      activity12:"4:30 - 5:00pm Free-play inside daycare",
      activity13:"5:00 - Pick-ups (20-minute grace period)",

    }
  };
  return (
    <div id="activity" className="activity">
      <img className="star-1 " src="./images/content/star.png" alt="star1" />
      <img className="star-2 " src="./images/content/star.png" alt="star2" />
      <img className="star-3 " src="./images/content/star.png" alt="star3" />
      <div className="activity-2">
        <div className="mission">
          <h1> {texts[language].title1} </h1>
          <p> {texts[language].paragraph1} </p>
        </div>
        <div className="grid-activity">
          <div>
            <h1>{texts[language].title2}</h1>
            <div className="activity-text">
              <ul>
                <li>{texts[language].activity1}</li>
                <li>{texts[language].activity2}</li>
                <li>{texts[language].activity3}</li>
                <li>{texts[language].activity4}</li>
                <li>{texts[language].activity5}</li>
                <li>{texts[language].activity6}</li>
                <li>{texts[language].activity7}</li>
                <li>{texts[language].activity8}</li>
                <li>{texts[language].activity9}</li>
                <li>{texts[language].activity10}</li>
                <li>{texts[language].activity11}</li>
                <li>{texts[language].activity12}</li>
                <li>{texts[language].activity13}</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Activity;
 */
