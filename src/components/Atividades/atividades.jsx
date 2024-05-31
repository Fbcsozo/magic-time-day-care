import React from "react";
import "./atividades.css";
function Activity() {
  return (
    <div className="activity-1">
      <div className="activity-2">
        <img
          className="img-activity"
          src="./images/content/activity-1.png"
          alt=""
        />
        <h1> NOSSA MISSÃO </h1>

        <p>
          {" "}
          No agitado mundo de hoje, encontrar um ambiente seguro e acolhedor
          para o cuidado das crianças é essencial. Na Magic Time Daycare, nosso
          compromisso é proporcionar não apenas um lugar para as crianças
          ficarem, mas um lar longe de casa, onde o bem-estar e a felicidade de
          cada criança são prioridades máximas."
        </p>
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
        <h1> ATIVIDADES </h1>

        <div className="order-list">
          <div>
            <ul className="ul">
              <li> 7:30 - Drop-off </li>
              <li> 8:30 - 9:00am Breakfast, clean-up/wash-up </li>
              <li> 9:00 - 9:30am Circle-time</li>
              <li> 9:30 - 10:00am Arts and crafts</li>
              <li> 10:00 - 10:30am Music time </li>
              <li> 10:30 - 12:00am Outside play-time</li>
              <li> 12:00 - 12:30pm Free-play and inside daycare</li>
            </ul>
          </div>

          <div>
            <ul className="ul">
              <li> 12:30 - 1:00pm Lunch time, clean-up/wash-up </li>
              <li> 1:00 - 3:00pm Rest-time and/or quiet-time </li>
              <li> 3:00 - 4:00pm Outside play (depending on season) </li>
              <li> 4:00 - 4:30pm Afternoon snack, clean-up/wash-up</li>
              <li> 4:30 - 5:00pm Free play inside daycare </li>
              <li> 5:00 - Pickups ( 20 min tolerance)</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Activity;
