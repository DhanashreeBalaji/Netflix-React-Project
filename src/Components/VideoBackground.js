import {  useSelector } from 'react-redux'
import useMovieTrailer from '../hooks/useMovieTrailer'


const VideoBackground = ({movieId}) => {

// Using the movie id we need the api from TMDB which will get all the videos associated with this movie and from that we get the trailer video object from the custom hook

  useMovieTrailer(movieId);

  const trailerVideo = useSelector((store) => store.movies?.trailerVideos);
//   Remember trailerVideo is a object and this object has a key named "key: "BId1AMHzItQ" for example. we need to get the video using this key from youtube
 
  return (
    <div className='w-screen'>
      <iframe
        className="w-screen aspect-video"
        src={
          "https://www.youtube.com/embed/" +
          trailerVideo?.key +
          "?&autoplay=1&mute=1"
        }
        title="YouTube video player"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
      ></iframe>
    </div>
  )
}

export default VideoBackground