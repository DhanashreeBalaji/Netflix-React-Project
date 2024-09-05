import  { useEffect } from 'react'
import { API_OPTIONS } from '../utils/constants'
import { useDispatch } from 'react-redux';
import { addTrailerVideo } from '../utils/slice/moviesSlice';
import { useSelector } from 'react-redux';

const useMovieTrailer = (movieId) => {

    
    const dispatch = useDispatch();
    const trailerVideo = useSelector((store) => store.movies?.trailerVideos);

    const getMovieVideos = async () => {
     
    const data = await fetch ("https://api.themoviedb.org/3/movie/"+ movieId +"/videos?language=en-US", API_OPTIONS);
    const json = await data.json();
 //    console.log(json);  We got the API Result. 
 //  Getting that single object with video details and keep in redux store

    const filteredVideo = json.results.filter((video) => video.type === "Trailer");
    const trailer = filteredVideo.length ? filteredVideo[0] : json.results[0];
    dispatch(addTrailerVideo(trailer));
    };
    
    useEffect(() => {
     !trailerVideo && movieId && getMovieVideos();
    },[]);
}

export default useMovieTrailer