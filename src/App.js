// components
import MovieList from './components/MovieList';
import WatchedList from './components/WatchedList';
// styles
import { MoviesContainer } from './styles';

function App() {
  return (
    <MoviesContainer>
      <MovieList />
      <WatchedList />
    </MoviesContainer>
  );
}

export default App;
