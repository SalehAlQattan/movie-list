const MovieItem = ({ title, released, genre }) => {
  return (
    <div>
      <h2>The title is: {title}</h2>
      <h2>Release date: {released}</h2>
      <h2>Genre: {genre}</h2>
    </div>
  );
};

export default MovieItem;
