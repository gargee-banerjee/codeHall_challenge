import React from "react";
import MovieCard from "./MovieCard";
import  {useSelector} from 'react-redux';

const MovieContainer = () => {
  let movieList = useSelector((state)=>state.movie.movieList);
  const searchTerm = useSelector((state)=>state.movie.searchTerm);
  

  movieList= movieList.filter((movie)=>{return searchTerm === ""  ? movie : movie === (Number(searchTerm))});

  return (
    <div>
      {movieList.map((movie) => 
        <MovieCard movie={movie}/>
      )}
    </div>
  );
};

export default MovieContainer;
