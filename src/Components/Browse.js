import React from 'react'
import Header from './Header'
import useNowPlayingMovies from '../hooks/useNowPlayingMovies'
import MainContainer from './MainContainer';
import SecondaryContainer from './SecondaryContainer';
import useMovieTrailer from '../hooks/useMovieTrailer';
import usePopularMovies from '../hooks/usePopularMovies';


const Browse = () => {


useNowPlayingMovies();
useMovieTrailer();
usePopularMovies();

  return (
    <div >
        <Header/>
        <MainContainer/>
        <SecondaryContainer/>
    </div>
  );
};

export default Browse;