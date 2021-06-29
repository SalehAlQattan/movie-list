// styled
import { ListWrapper } from '../styles';
// importing the class
import productStore from '../stores/productsStore';
// mobx
import { observer } from 'mobx-react';

const MovieItem = ({ movie }) => {
  // updat movie status
  const handleUpdate = () => {
    productStore.updateMovie(movie);
  };
  // delete movie
  const handleDelete = () => {
    productStore.deleteMovie(movie.id);
  };

  return (
    <ListWrapper>
      <h2>The title is: {movie.title}</h2>
      <h2>Release date: {movie.released}</h2>
      <h2>Genre: {movie.genre}</h2>
      <img style={{ width: '200px' }} src={movie.poster} alt={movie.title} />
      <button onClick={handleUpdate}>
        {movie.status ? 'UnWatched' : 'Watched'}
      </button>
      <button onClick={handleDelete}>Delete</button>
    </ListWrapper>
  );
};

export default observer(MovieItem);
