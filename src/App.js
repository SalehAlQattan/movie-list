// components
import MovieList from "./components/MovieList";
import WatchedList from "./components/WatchedList";
import CreateMovie from "./components/CreateMovie";
// styles
import { MoviesContainer } from "./styles";

function App() {
  return (
    <MoviesContainer>
      <CreateMovie />
      <MovieList />
      <WatchedList />
    </MoviesContainer>
  );
}

export default App;
