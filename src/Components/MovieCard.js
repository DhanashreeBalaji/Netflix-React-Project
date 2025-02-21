import React from 'react'
import { IMG_CDN_URL } from '../utils/constants'

const MovieCard = ({posterPath}) => {
    if(!posterPath) return (
        <div>
            <h1>Posterpath is null</h1>
        </div>
    ); 

  return (
    <div className='w-48 pr-4 md:w-48'>
        <img alt='Movie Card' src={IMG_CDN_URL + posterPath} />
    </div>
  )
}

export default MovieCard