// styled
import { ListWrapper } from "../styles";
//
import productStore from "../stores/productsStore";
//
import { observer } from "mobx-react";

const MovieItem = ({ movie }) => {
  const handleUpdate = () => {
    productStore.updateMovie(movie);
  };

  const handleDelete = () => {
    productStore.deleteMovie(movie.id);
  };

  return (
    <ListWrapper>
      <h2>The title is: {movie.title}</h2>
      <h2>Release date: {movie.released}</h2>
      <h2>Genre: {movie.genre}</h2>
      <button onClick={handleUpdate}>Watched</button>
      <button onClick={handleDelete}>Delete</button>
    </ListWrapper>
  );
};

export default observer(MovieItem);
