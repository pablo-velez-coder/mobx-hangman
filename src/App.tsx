import './App.css';
import { HangmanGame } from './HangmanGame';
import { GameStore } from './store/GameStore';
import { GameContext } from './useGame';

const store = new GameStore();

function App() {
  return (
    <GameContext.Provider value={store}>
      <HangmanGame />
    </GameContext.Provider>
  );
}

export default App;
