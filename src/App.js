import Main from "./components/Main/Main";
import {FilmProvider} from "./context/GlobalState";

function App() {
  return (
    <FilmProvider>
      <Main/>
    </FilmProvider>
  );
}

export default App;
