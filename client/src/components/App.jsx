import React from 'react';
import movies from '../data/exampleMovieData.js';
import MovieList from './MovieList.jsx';
import SearchBar from './SearchBar.jsx'

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      searchtext: '',
      searchMovies: movies,
      allMovies: movies
    }

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({searchtext: event.target.value})
    console.log(event.target);
  }

  handleSubmit(event) {

    console.log('text was submitted' + this.state.searchtext);

    event.preventDefault();
    // take our searchtext, check to see if it is contained in allMovies
    // if it is, then we want to set searchMovies to what was contained
  }

  render() {
    return (
      <div>
        <h2>Movie List</h2>
        <SearchBar value={this.state.value} handleChange={this.handleChange} handleSubmit={this.handleSubmit}/>
        <MovieList movies={this.state.allMovies} />
      </div>
    )
  }
}

export default App;