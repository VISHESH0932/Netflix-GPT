import React from 'react'
import MovieList from './MovieList'
import { useSelector } from 'react-redux';

const SecondaryContainer = () => {
  const movies = useSelector((store)=> store.movies);
  console.log(movies);
  return (
    movies.nowPlayingMovies && (
    <div className='bg-black text-white'>
    <div className='-mt-52 relative z-20'>
      <MovieList title={"Now Playing"} movies={movies.nowPlayingMovies}/>
      <MovieList title={"Upoming"} movies={movies.UpcomingMovies}/>
      <MovieList title={"Top Rated"} movies={movies.TopRatedMovies}/>
      <MovieList title={"Popular"} movies={movies.PopularMovies}/>
      </div>
    </div>)
  )
}

export default SecondaryContainer
