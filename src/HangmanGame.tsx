import { GameMenu } from "./components/gameMenu/GameMenu";
import { GameView } from "./store/GameStore";
import { useGame } from "./useGame";

function getCurrentView(view: GameView){
    switch (view) {
        case "menu":
            return <GameMenu /> 
        case "game":
            return <Game />
        case "result":
            return <Game />
        case "history":
            return <GameHistory />
        case "preferences":
            return <GamePreferences />
    }
}


export const HangmanGame = () => {

const {currentView} = useGame()

  return <div >{getCurrentView(currentView)}</div>;
};