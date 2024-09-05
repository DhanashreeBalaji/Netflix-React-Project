import React from 'react'
import MovieList from './MovieList'
import { useSelector } from 'react-redux'

const SecondaryContainer = () => {
  const movies = useSelector((store) => store.movies);
  // movies will be a array of objects
  return (
    movies.nowPlayingMovies && (
    <div className='bg-black'>
      <div className=' mt-0 md:-mt-52 pl-4 md:pl-12 relative z-20'>
   <MovieList category={"Now Playing"} movies = {movies.nowPlayingMovies} />
   <MovieList category={"Trending"} movies={movies.nowPlayingMovies} />
   <MovieList category={"Popular Movies"} movies = {movies.popularMovies} />
    <MovieList
            category={"Upcoming Movies"}
            movies={movies.nowPlayingMovies}
          />
          <MovieList category={"Horror"} movies={movies.nowPlayingMovies} />
    </div>
    </div>
    )
  );
};
export default SecondaryContainer