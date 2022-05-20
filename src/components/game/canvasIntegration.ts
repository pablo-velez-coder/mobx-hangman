import { reaction } from "mobx"

export function createCanvasIntegration(game: GameStore, hangman: HangmanCanvas){
    const wrongLetterDisposer = reaction(()=> game.hangman.wrongLetterCount, (count:number)=>{
        hangman.drawElement(count)
    }, {fireInmediately: true})
    return ()=>{
        wrongLetterDisposer()
    }
}