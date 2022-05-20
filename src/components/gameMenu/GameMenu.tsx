import { useGame } from "../../useGame";
import { GameLayout } from "../game/Game";


export function GameMenu(){
    const game = useGame()

    return (
        <GameLayout>
<div>
    <div>
        <button onClick={()=> game.start()}>
            New game
        </button>
        <button onClick={()=> game.goTo("history")}>
            History
        </button>
        <button onClick={()=> game.goTo("preferences")}>
            Preferences
        </button>
    </div>
</div>
        </GameLayout>
    )
}