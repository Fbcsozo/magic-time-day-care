import React from "react";
import "./comments.css";

const exampleComments = [
  {
    name: "Camylla freitas",
    comment:
      "Nathany has always stayed with my children when I needed to work, and for them, it was always good news since it meant fun times. She is very responsible and caring with my kids. She respects our schedules and is a very experienced nanny. I highly recommend her without hesitation. I am a nurse and a very cautious mother; they only stay with her. 🫶🏼",
  },
  {
    name: "Thais Costa",
    comment:
      "I recommend Magic Time to all parents who want their child to have a reliable, safe, clean place full of games that help their child's development.",
  },
  {
    name: "Anna Ahmed",
    comment:
      "Nathany is the the absolute best person we could have asked to care for our daughter- she started with us when our daughter was 4 months old and has cared for her over the last 14 months. She helped with sleep training, nap transitions, solid food introduction and countless other milestones. We trust her completely with our daughter- I highly recommend her.",
  },
  {
    name: "Lorena Coelho",
    comment:
      "I highly recommend her without hesitation! Besides having extensive experience with children, Nathy is a nurse with several professional courses. Moms in the Bay Area can leave their children with her without worry. 🥰🥰",
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
