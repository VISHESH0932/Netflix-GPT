import React from 'react'
import MovieCard from './MovieCard'

const MovieList = ({title, movies}) => {
  return (
    <div className='p-6'>
        <h1 className='text-3xl py-2'>{title}</h1>
      <div className="flex overflow-x-scroll scrollbar-hide"> 
        <div className='flex'>{
            movies.map((movie) => {
              return <MovieCard key={movie.id} posterPath={movie.poster_path}/>
            })
        }
        </div>
      </div>
    </div>
  )
}

export default MovieList
