// src/components/Article.js
import React from "react";

function Article({ title, date = "January 1, 1970", preview, minutes }) {
  const coffeeCup = "☕️";
  const bentoBox = "🍱";

  const renderReadingTime = (minutes) => {
    if (minutes < 30) {
      return `${coffeeCup.repeat(Math.ceil(minutes / 5))} ${minutes} min read`;
    } else {
      return `${bentoBox.repeat(Math.ceil(minutes / 10))} ${minutes} min read`;
    }
  };

  return (
    <article>
      <h3>{title}</h3>
      <small>{date}</small>
      <p>{preview}</p>
      <small>{renderReadingTime(minutes)}</small>
    </article>
  );
}

export default Article;
