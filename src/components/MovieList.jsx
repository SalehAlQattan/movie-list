// data
import productStore from '../stores/productsStore';
// components
import MovieItem from './MovieItem';

const MovieList = () => {
  const moviesList = productStore.movies.map((movie) => {
    return (
      <MovieItem
        title={movie.title}
        released={movie.released}
        genre={movie.genre}
      />
    );
  });

  return <div>{moviesList}</div>;
};

export default MovieList;
