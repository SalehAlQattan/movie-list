// data
import productStore from '../stores/productsStore';
// components
import MovieItem from './MovieItem';
//
import { observer } from 'mobx-react';

const MovieList = () => {
  const moviesList = productStore.movies
    .filter((movie) => movie.status === true)
    .map((movie) => {
      return <MovieItem movie={movie} key={movie.id} />;
    });

  return (
    <div>
      <h1>Un Watched</h1>
      {moviesList}
    </div>
  );
};

export default observer(MovieList);
