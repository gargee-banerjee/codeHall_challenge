import { createSlice } from "@reduxjs/toolkit";

const movieSlice = createSlice({
  name: "movie",
  initialState: { movieList: [1, 2, 3, 4, 5], searchTerm: "" },
  reducers: {
    updateSearchItem: function (state, action) {
      console.log(action.payload)
      state.searchTerm = action.payload;
    },
  },
});

export const movieActions = movieSlice.actions;
export default movieSlice.reducer;
