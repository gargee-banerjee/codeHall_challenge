import React, { useRef } from "react";
import Button from "@material-ui/core/Button";
import { useDispatch } from "react-redux";
import style from "./Style.module.css";
import Dropdown from "react-dropdown";
import { movieActions } from "../../store/MovieSlice";
import "react-dropdown/style.css";

const Search = () => {
  const dispatch = useDispatch();
  const searchTerm = useRef();
  const options = [
    "",
    "Adventure",
    "Science Fiction",
    "Action",
    "Fantasy",
    "Comedy",
    "Mystery",
    "Family",
  ];
  const defaultOption = options[0];
  function handleSearch() {
    dispatch(movieActions.updateSearchItem(searchTerm.current.value));
  }
  function onGenreChange(e) {
    dispatch(movieActions.updateGenre(e.value));
  }
  return (
    <div className={style.searchHeader}>
      <Dropdown
        options={options}
        onChange={onGenreChange}
        value={defaultOption}
        placeholder="Select Genre"
        className={style.genreField}
      />
      <div>
        <input
          type="search"
          placeholder="Movie Name..."
          ref={searchTerm}
          className={style.searchField}
        ></input>
        <Button
          onClick={handleSearch}
          variant="contained"
          className={style.searchButton}
        >
          SEARCH
        </Button>
      </div>
    </div>
  );
};

export default Search;
