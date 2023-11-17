import React, { useRef } from "react";
import InputBase from "@material-ui/core/InputBase";
import Button from "@material-ui/core/Button";
import { useDispatch } from "react-redux";
import {movieActions} from "../../store/MovieSlice";

const Search = () => {
  const dispatch = useDispatch();
  const searchTerm = useRef();
  function handleSearch() {
    console.log(searchTerm.current.value)
    dispatch(movieActions.updateSearchItem(searchTerm.current.value));
  }
  return (
    <div>
      <input type="search" placeholder="Movie Name..." ref={searchTerm}></input>
      <Button onClick={handleSearch} variant="contained">
        SEARCH
      </Button>
    </div>
  );
};

export default Search;
