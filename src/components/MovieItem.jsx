import productStore from "../stores/productsStore";
// styled
import { ListWrapper } from "../styles";

const MovieItem = ({ movie }) => {
  const handleClick = () => {
    // Move the original array to the new array
    console.log(movie.id);
  };
  return (
    <ListWrapper>
      <h2>The title is: {movie.title}</h2>
      <h2>Release date: {movie.released}</h2>
      <h2>Genre: {movie.genre}</h2>
      <button onClick={handleClick}> ADD</button>
    </ListWrapper>
  );
};

export default MovieItem;
