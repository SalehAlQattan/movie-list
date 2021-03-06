// Store
import productStore from '../stores/productsStore';
//components
import MovieItem from './MovieItem';
// mobx
import { observer } from 'mobx-react';
// hook
import { useState } from 'react';

const WatchedList = () => {
  // search state
  const [query, setQuery] = useState('');
  // search function
  const handleChange = (event) => {
    setQuery(event.target.value);
  };

  const watchedList = productStore.movies
    .filter((movie) => movie.status === true)
    .filter((movie) => movie.title.toLowerCase().includes(query.toLowerCase()))
    .map((movie) => {
      return <MovieItem movie={movie} key={movie.id} />;
    });

  return (
    <div>
      <h2>Watched {watchedList.length}</h2>
      <input onChange={handleChange} placeholder="Search..." type="text" />
      {watchedList}
    </div>
  );
};

export default observer(WatchedList);
