import React from "react";
import "./comments.css";

function Comments({ language }) {
    const texts = {
        pt: {
          title1:"COMENTÁRIOS",
        },
        en: {
            title1:"COMMENTS",
        },
      };
    return(
        <div className="comment">

            <h1 className="title"> {texts[language].title1} </h1>

        </div>
    )
}

export default Comments;