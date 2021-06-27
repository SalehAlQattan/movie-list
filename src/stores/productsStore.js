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

  // make a function to delete a movie
  deleteMovie = (movieId) => {
    // here
  };
  // make a function to add a movie
  createMovie = (newMovie) => {
    // here
  };
}
// creating new instance of the class
const productStore = new ProductsStore();
// export the new instsnce
export default productStore;
