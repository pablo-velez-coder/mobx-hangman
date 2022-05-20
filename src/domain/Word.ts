import { Alphabet } from "./alphabet";

export class Word {

    private chars: Alphabet[] = []
    public wordParts: string[][];

    public constructor(word:string){
        const wordParts = word.split(' ')
        this.chars =  word.toUpperCase().split("").filter(Boolean) as unknown as Alphabet[];

        this.wordParts = wordParts.map((part:string)=> part.split(""))

    }

    public contains(char: Alphabet):boolean{
        return true
    }
    public containsAllLetters(char: Alphabet):boolean{
        return true
    }


}

