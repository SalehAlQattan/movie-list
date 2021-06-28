// styled
import { ListWrapper } from '../styles';
//
import productStore from '../stores/productsStore';
//
import { observer } from 'mobx-react';

const MovieItem = ({ movie }) => {
  const handleClick = () => {
    productStore.updateMovie(movie);
  };

  return (
    <ListWrapper>
      <h2>The title is: {movie.title}</h2>
      <h2>Release date: {movie.released}</h2>
      <h2>Genre: {movie.genre}</h2>
      <button onClick={handleClick}>Watched</button>
    </ListWrapper>
  );
};

export default observer(MovieItem);
