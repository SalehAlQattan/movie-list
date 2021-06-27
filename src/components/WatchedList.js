// Store
import productStore from "../stores/productsStore";

// State
import { useState } from "react";

//components
import MovieItem from "./MovieItem";

const WatchedList = () => {
  const watchedList = productStore.movies
    .filter((movie) => movie.status === false)
    .map((movie) => {
      return <MovieItem movie={movie} key={movie.id} />;
    });

  return (
    <div>
      <h1>Watched</h1>
      {watchedList}
    </div>
  );
};

export default WatchedList;
