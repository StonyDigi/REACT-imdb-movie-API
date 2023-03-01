
import './App.css';
import { useState } from 'react';
import axios from 'axios';
import Movie from './components/Movie';

/*
  name - offical
  currencies - huf -> name
  capital
  region
  subregion
  languages
  borders
  flags - kép


*/

function App() {

    const [movie, setMovie] = useState([]);
    const [search, setSearch] = useState("");

    const getMovie = () => {
        axios.get(`https://www.omdbapi.com/?t=${search}&apikey=caada9e`)
        .then(res => setMovie(res.data))
    
      }

  return (
    <div className="App">
      
    <div className="search-header">
        
      <h1>OMDB Movie API</h1>

      <input type="text" placeholder='Írd be a film címét' onChange={(e) => {setSearch(e.target.value)}}/>

      <button onClick={getMovie}>Keresés</button>
        
      </div>
      
      <div className='movie-container'>
      <Movie poster={movie.Poster} title={movie.Title} year={movie.Year} actors={Movie.Actors} genre={movie.Genre} imdb={movie.imdbRating} metascore={movie.Metascore} plot={movie.Plot} />
    </div>

    <footer>&copy; Created by Somossy László</footer>

</div>
  );
}

export default App;