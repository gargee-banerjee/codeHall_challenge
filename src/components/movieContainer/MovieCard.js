import React from "react";
import styles from "./Style.module.css";

const MovieCard = ({ movie }) => {
  return (
    <div className={styles.cardContainer}>
      <div className={styles.posterContainer}>
        <img src={movie.Poster} alt="Poster"></img>
      </div>
      <div className={styles.titleContainer}>{movie.Title}</div>
    </div>
  );
};

export default MovieCard;
