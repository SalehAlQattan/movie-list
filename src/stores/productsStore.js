// data
import movies from '../movies';
// mobx
import { makeAutoObservable } from 'mobx';
// store class

class ProductsStore {
  // data
  movies = movies;

  constructor() {
    makeAutoObservable(this);
  }
  // update
  updateMovie = (updatedMovie) => {
    // here
    // updatedMovie.id << status if true >> false
    const movie = this.movies.find((movie) => movie.id === updatedMovie.id);

    movie.status = !movie.status;
  };

  // make a function to delete a movie
  deleteMovie = (movieId) => {
    let newFilterdMovies = this.movies.filter((movie) => movie.id !== movieId);
    this.movies = newFilterdMovies;
  };
  // make a function to add a movie
  createMovie = (newMovie) => {
    newMovie.id = this.movies.length + 1;
    this.movies.push(newMovie);
  };
}
// creating new instance of the class
const productStore = new ProductsStore();
// export the new instsnce
export default productStore;
