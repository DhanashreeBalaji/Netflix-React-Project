import { createSlice } from "@reduxjs/toolkit";


const moviesSlice = createSlice({
    name: "moviesList",
    initialState: {
        nowPlayingMovies: null,
        trailerVideos: null,
        popularMovies: null,
    },
    reducers:{
        addNowPlayingMovies : (state,action) => {
            state.nowPlayingMovies = action.payload;
        },
        addTrailerVideo : (state,action) => {
            state.trailerVideos = action.payload;
        },
        addPopularMovies : (state,action) => {
            state.popularMovies = action.payload;
        },
    },
});

export const { addNowPlayingMovies,addTrailerVideo ,addPopularMovies} = moviesSlice.actions;

export default moviesSlice.reducer;