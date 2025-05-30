import React from 'react'
import { useSelector } from 'react-redux';
import useMovieTrailer from '../hooks/useMovieTrailer';


const VideoBackground = ({movieId}) => {
    
    useMovieTrailer({movieId});
    const trailerVideo  = useSelector((store) => store.movies?.trailerVideo);
  
  return (
    <div >
      <div className='w-screen'>
      <iframe 
      className="w-screen aspect-video"
      src={"https://www.youtube.com/embed/"+trailerVideo?.key+"?si=LlVBd21ttD3Zw3Ux&autoplay=1&mute=1&loop=1"}
      title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin"></iframe>
      </div>
    </div>
  )
}

export default VideoBackground
