import React from "react";
import styles from "./Style.module.css";
import logo from '../../resources/images/movieLogo.png';

const MovieCard = ({ movie }) => {
  const random = Math.random()
  // const url = `https://picsu m.photos/200/300?random=${random}`;
  const url = `https://banner2.cleanpng.com/20190730/shy/kisspng-…service-5d3fc924ce3b33.8538265315644613488447.jpg`;
  return (
    <div className={styles.cardContainer}>
      <div className={styles.posterContainer}>
        <img src={logo} alt="Poster"></img>
      </div>
      <div className={styles.titleContainer}>{movie.title}</div>
    </div>
  );
};

export default MovieCard;
