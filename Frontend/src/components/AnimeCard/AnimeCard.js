import React from "react";
import "./animeCard.css";

function AnimeCard({ anime }) {
  return (
    <a className="cardBody" href={anime.url} alt={anime.title}>
      <figure className="cardFig">
        <img
          className="cardImage"
          src={anime.images.jpg.image_url}
          alt="Anime Image"
        />
      </figure>
      <div className="cardInfo">
        <h3 className="cardTitle">{anime.title}</h3>
        <h4 className="score">{`Score :${anime.score}`}</h4>
      </div>
    </a>
  );
}

export default AnimeCard;
