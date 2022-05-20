import { useGame } from "../../useGame";

export const GameResult = observer(() => {
    const game = useGame()
    const { hangman } = game

    const isLost = hangman.gameResult === 'lose'
    const isWon =  hangman.gameResult === 'win'
    const isGameFinished = game.currentView === 'result'

  return <div
  className={classNames(styles.gameResult, {
      [styles.win]: isWon,
      [styles.lose]: isLost,
      [styles.show]: isGameFinished
  })}
  >
    <div>
        <div>
            {isLost ? 'Game over': "You won"}
        </div>
    </div>
  </div>;
});