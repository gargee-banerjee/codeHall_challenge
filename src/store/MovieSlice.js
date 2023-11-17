import { createSlice } from "@reduxjs/toolkit";

const movieSlice = createSlice({
  name: "movie",
  initialState: { movieList: [], searchTerm: "" },
  reducers: {
    refreshMovieList: function (state, action) {
      console.log(action.payload.Search);
      state.movieList = action.payload.Search;
    },
    updateSearchItem: function (state, action) {
      state.searchTerm = action.payload;
    },
  },
});

export const movieActions = movieSlice.actions;
export default movieSlice.reducer;
