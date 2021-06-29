// components
import UnWatchedList from './components/UnWatchedList';
import WatchedList from './components/WatchedList';
import CreateMovie from './components/CreateMovie';
// styles
import { MoviesContainer } from './styles';

function App() {
  return (
    <MoviesContainer>
      <CreateMovie />
      <UnWatchedList />
      <WatchedList />
    </MoviesContainer>
  );
}

export default App;
