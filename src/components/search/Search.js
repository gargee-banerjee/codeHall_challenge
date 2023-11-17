import React, { useRef } from "react";
import Button from "@material-ui/core/Button";
import { useDispatch } from "react-redux";
import { movieActions } from "../../store/MovieSlice";
import style from "./Style.module.css";

const Search = () => {
  const dispatch = useDispatch();
  const searchTerm = useRef();
  function handleSearch() {
    dispatch(movieActions.updateSearchItem(searchTerm.current.value));
  }
  return (
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
  );
};

export default Search;
