// data
import productStore from "../stores/productsStore";
// components
import MovieItem from "./MovieItem";

const MovieList = () => {
  const moviesList = productStore.movies
    .filter((movie) => movie.status === true)
    .map((movie) => {
      return (
        <MovieItem
          movie={movie}
          // title={movie.title}
          // released={movie.released}
          // genre={movie.genre}
          // id={movie.id}
          key={movie.id}
        />
      );
    });

  return (
    <div>
      <h1>Movie</h1>
      {moviesList}
    </div>
  );
};

export default MovieList;
