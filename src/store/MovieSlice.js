import { createSlice } from "@reduxjs/toolkit";

const movieSlice = createSlice({
  name: "movie",
  initialState: { movieList: [], searchTerm: "", genre: "" },
  reducers: {
    refreshMovieList: function (state, action) {
      console.log(action.payload);
      state.movieList = action.payload;
    },
    updateSearchItem: function (state, action) {
      state.searchTerm = action.payload;
    },
    updateGenre: function (state, action) {
      state.genre = action.payload;
    },
  },
});

export const movieActions = movieSlice.actions;
export default movieSlice.reducer;
