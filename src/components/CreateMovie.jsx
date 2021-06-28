// productStore
import productStore from "../stores/productsStore";

// state
import { useState } from "react";

const CreateMovie = () => {
  const [movieTitle, setMovieTitle] = useState({
    title: "",
    slug: "",
    released: "",
    runtime: "",
    genre: "",
    plot: "",
    poster: "",
    status: false,
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    productStore.createMovie(movieTitle);
    console.log(movieTitle.id);
  };

  const handleChange = (e) => {
    setMovieTitle({ ...movieTitle, [e.target.name]: e.target.value });
    // productStore.createMovie(movieTitle);
    console.log(movieTitle);
  };
  return (
    <form onSubmit={handleSubmit}>
      <button type="submit">Add</button>
      <input name="title" onChange={handleChange} type="text"></input>
    </form>
  );
};

export default CreateMovie;
