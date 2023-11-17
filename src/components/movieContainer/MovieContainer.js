import React from "react";
import MovieCard from "./MovieCard";
import { useSelector } from "react-redux";
import styles from './Style.module.css';

const MovieContainer = () => {
  let movieList = useSelector((state) => state.movie.movieList);
  const searchTerm = useSelector((state) => state.movie.searchTerm);

  movieList = movieList.filter((movie) => {
    return searchTerm === ""
      ? movie
      : movie.Title.toLowerCase().includes(searchTerm.toLowerCase());
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
