import React from "react";
import MovieCard from "./MovieCard";
import { useSelector } from "react-redux";
import styles from "./Style.module.css";

const MovieContainer = () => {
  let movieList = useSelector((state) => state.movie.movieList);
  const movieName = useSelector((state) => state.movie.searchTerm);
  const genre = useSelector((state) => state.movie.genre);

  movieList = movieList.filter((movie) => {
    return genre === "" ? movie : movie.genres.includes(genre);
  });
  movieList = movieList.filter((movie) => {
    return movieName === ""
      ? movie
      : movie.title.toLowerCase().includes(movieName.toLowerCase());
  });

  return (
    <div className={styles.cardsContainer}>
      {movieList.map((movie) => (
        <MovieCard key={movie.imdbID} movie={movie} />
      ))}
    </div>
  );
};

export default MovieContainer;
