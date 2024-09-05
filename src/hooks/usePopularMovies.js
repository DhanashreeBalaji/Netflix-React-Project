import { API_OPTIONS } from '../utils/constants'
import { useDispatch, useSelector } from 'react-redux'
import { addPopularMovies } from '../utils/slice/moviesSlice'
import { useEffect } from 'react';

const usePopularMovies = () => {
//  Fetch data from TMDB API and update global store. (Nothing to return from here)

    const dispatch = useDispatch();
    const nowPlayingMovies = useSelector(
        (store) => store.movies.nowPlayingMovies
    );

    const getNowPlayingMovies = async () => {
       const data = await fetch("https://api.themoviedb.org/3/movie/popular?page=1", API_OPTIONS);
       const json = await data.json();
      //  console.log(json);
     dispatch(addPopularMovies(json.results));
    };
  
  useEffect(() => {
   !nowPlayingMovies && getNowPlayingMovies();
  },[]);
};

export default usePopularMovies;
