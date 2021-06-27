// components
import MovieList from "./components/MovieList";
import WatchedList from "./components/WatchedList";

function App() {
  return (
    <div style={{ display: "flex" }}>
      <MovieList />
      <WatchedList />
    </div>
  );
}

export default App;
