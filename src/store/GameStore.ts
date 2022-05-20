import { Hangman } from "../domain/Hangman";

export type GameView = 'menu' | "game" | "history" | "preferences" | "result";
const fetchWord = async() => await 'pipol'
export class GameStore {
  private _currentView: GameView = "menu"
  private _hangman: Hangman | undefined = undefined  

  public goTo(view: GameView){
      this._currentView = view
  }

  public start(){
    fetchWord().then(word =>{
        const hangman = new Hangman({
            word
        })
        this._hangman = hangman
    })
    this.goTo("game")
  }

  public get isRunning(){
    return this._hangman && this._hangman.gameState === "started"
  }

  public get currentView(): GameView{
    return this._currentView
  }

  public get hangman(){
    if(!this._hangman){
      throw new Error('Hangman instance should be created')
    }

    return this._hangman
  }
}