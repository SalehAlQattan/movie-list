// data
import productStore from '../stores/productsStore';
// components
import MovieItem from './MovieItem';
// mobx
import { observer } from 'mobx-react';
// hook
import { useState } from 'react';

const UnWatchedList = () => {
  // search state
  const [query, setQuery] = useState('');
  // search function
  const handleChange = (event) => {
    setQuery(event.target.value);
  };

  const unWatchedList = productStore.movies
    .filter((movie) => movie.status === false)
    .filter((movie) => movie.title.toLowerCase().includes(query.toLowerCase()))
    .map((movie) => {
      return <MovieItem movie={movie} key={movie.id} />;
    });

  return (
    <div>
      <h2>Watch List {unWatchedList.length}</h2>
      <input onChange={handleChange} placeholder="Search..." type="text" />
      {unWatchedList}
    </div>
  );
};

export default observer(UnWatchedList);
