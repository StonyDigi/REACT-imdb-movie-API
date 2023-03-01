import React from 'react'
import './Movie.css'

const Movie = ( { poster, title, year, actors, genre, imdb, metascore, plot } ) => {
  return (
    <div className='movie'>
        <div className="movie-poster">
            <img src={poster} alt={title} />
        </div>

        <div className="movie-info">
            <h3>Cím: {title}</h3>
            <p>Megjelenés éve: {year}</p>
            <p>Szereplők: {actors}</p>
            <p>Kategória: {genre}</p>
            <p><small><strong> IMDB: {imdb} | Metascore: {metascore} </strong></small></p>
            <hr />
            <h4>Leírás:</h4>
            <p>{plot}</p>
        </div>
    </div>
  )
}

export default Movie