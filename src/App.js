import { useEffect } from "react";
import "./App.css";
import { Search, MovieContainer } from "./components/index";
import { useDispatch } from "react-redux";
import { movieActions } from "./store/MovieSlice";

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    getMovies();
  }, []);

  async function getMovies() {
    const response = await fetch(
      "https://www.omdbapi.com/?s=star&apikey=bda1a80c"
    );
    const responseJson = await response.json();
    dispatch(movieActions.refreshMovieList(responseJson));
  }

  return (
    <div className="App">
      <Search />
      <MovieContainer />
    </div>
  );
}

export default App;
