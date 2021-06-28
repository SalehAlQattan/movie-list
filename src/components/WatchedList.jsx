// Store
import productStore from "../stores/productsStore";
//components
import MovieItem from "./MovieItem";
//
import { observer } from "mobx-react";

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

export default observer(WatchedList);
