// productStore
import productStore from '../stores/productsStore';
// hook
import { useState } from 'react';

const CreateMovie = () => {
  // carete movie state
  const [movieTitle, setMovieTitle] = useState({
    title: '',
    slug: '',
    released: '',
    runtime: '',
    genre: '',
    plot: '',
    poster: '',
    status: false,
  });
  // carete movie function
  const handleSubmit = (event) => {
    event.preventDefault();
    productStore.createMovie(movieTitle);
  };
  // getting data from form
  const handleChange = (event) => {
    setMovieTitle({ ...movieTitle, [event.target.name]: event.target.value });
  };
  return (
    <form onSubmit={handleSubmit}>
      <input
        placeholder="Movie Title"
        name="title"
        onChange={handleChange}
        type="text"
      ></input>
      <input
        onChange={handleChange}
        name="poster"
        type="text"
        placeholder="Enter Movie Image"
      />
      <button type="submit">Add +</button>
    </form>
  );
};

export default CreateMovie;
