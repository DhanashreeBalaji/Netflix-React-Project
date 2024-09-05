import React from 'react'
import { useSelector } from 'react-redux'
import VideoBackground from './VideoBackground';
import VideoTitle from './VideoTitle';

const MainContainer = () => {

   const movies = useSelector((store) => store.movies?.nowPlayingMovies);
//    What if there is no movies in the store in nowPlayingMovies. Handle that case
   if(!movies) return;
   const mainMovie = movies[0];
   const {original_title, overview, id} = mainMovie;

  return (
    <div className='pt-[30%] bg-black md:pt-0 md:m-0'>
   <VideoTitle title = {original_title} desc={overview} />
   <VideoBackground movieId = {id}/>
   </div>
  )
}

export default MainContainer