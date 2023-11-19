import React from "react";
import styles from "./Style.module.css";

const MovieCard = ({ movie }) => {
  return (
    <div className={styles.cardContainer}>
      <div className={styles.posterContainer}>
        <img src={movie.poster} alt="Poster"></img>
      </div>
      <div className={styles.titleContainer}>{movie.title}</div>
    </div>
  );
};

export default MovieCard;
