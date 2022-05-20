import { Alphabet } from "../../domain/alphabet";
import { useGame } from "../../useGame";

type LetterProps = {
    letter: Alphabet;
}
export const Letter = observer((props: LetterProps)=>{
    const {letter} = props;

    const { hangman} = useGame()

    return (
        <div>
            {hangman.isSelected(letter)? "": letter}
        </div>
    )
})