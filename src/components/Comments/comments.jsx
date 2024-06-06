/* import React from "react";
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
        <div id="comments"className="comment">

            <h1 className="title"> {texts[language].title1} </h1>

        </div>
    )
}

export default Comments; */

import React from "react";
import "./comments.css";

const exampleComments = [
  {
    name: "Alice Johnson",
    comment:
      "Amazing daycare! My kids love it here and always come home with a smile.",
  },
  {
    name: "Mark Smith",
    comment: "Great environment and friendly staff. Highly recommend!",
  },
  {
    name: "Sarah Brown",
    comment:
      "My daughter has learned so much and made great friends. Fantastic place!",
  },
  {
    name: "David Lee",
    comment:
      "Safe and nurturing place for children. Couldn't be happier with the care provided.",
  },
];

function Comments({ language }) {
  const texts = {
    pt: {
      title1: "COMENTÁRIOS",
    },
    en: {
      title1: "COMMENTS",
    },
  };

  return (
    <div id="comments" className="comment">
      <h1 className="title"> {texts[language].title1} </h1>
      <div className="comments-container">
        {exampleComments.map((comment, index) => (
          <div key={index} className="comment-box">
            <p className="comment-name">{comment.name}</p>
            <p className="comment-text">"{comment.comment}"</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Comments;
