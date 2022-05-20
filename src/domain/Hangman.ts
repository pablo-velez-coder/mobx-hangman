import {makeAutoObservable} from 'mobx'

import {alphabet, Alphabet} from './alphabet'
import { Word } from './Word'

type LetterStatus = "correct" | "wrong" | "notSelected"
export type GameState = "started" | "finished"
export type GameResult = "none" | "win" | "lose"

type HangmanConfig = {
    word:string;
    maxWrongDecisions?: number;
}

export class Hangman { 

    public alphabet = alphabet
    public wordToGuess:Word
    private readonly selectedLetters: Map<Alphabet, LetterStatus> = new Map()
    private maxWrongDecisions: number;

    public constructor(config:HangmanConfig){
        makeAutoObservable(this)
        const { word, maxWrongDecisions = 6} = config
        this.wordToGuess = new Word(word)
        this.maxWrongDecisions = maxWrongDecisions
    }

    public selectLetter(letter: Alphabet){
        const status = this.wordToGuess.contains(letter) ? "correct" : "wrong";
        this.selectedLetters.set(letter, status)
    }

    public getLetterStatus(letter:string): LetterStatus {
        return this.selectedLetters.get(letter.toUpperCase() as Alphabet) ?? "notSelected"
    }

    public isSelected(letter: Alphabet): boolean {
        return !!this.selectedLetters.get(letter)
    }

    public get gameResult(): GameResult {
        if(this.wrongLetterCount>= this.maxWrongDecisions){
            return 'lose'
        }

/*         if (this.wordToGuess.containsAllLetters([...this.selectedLetters.keys()])){
            return 'win'
        } */

        return 'none'
    }

    public get gameState(): GameState {
        if(this.gameResult !== 'none'){
            return 'finished'
        }
        return 'started'
    }

    public get wrongLetterCount(): number {
        const count = this.getCountByStatus('wrong')

        return Math.min(count, this.maxWrongDecisions)
    }

    private getCountByStatus(statustoCount: string): number {
        let count = 0;
        this.selectedLetters.forEach((status:LetterStatus)=>{
            if(status ===statustoCount){
                count++
            }
        })
        return count
    }
}