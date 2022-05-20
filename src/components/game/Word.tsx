import { Alphabet } from "../../domain/alphabet"
import { useGame } from "../../useGame"


const WordLetter = observer((props: WordLetterProps)=>{
    const { letter} = props
    const {hangman} = useGame()

    const status = hangman.getLetterStatus(letter)
    const display = status === ' correct' || hangman.gameState ==='finished'

    const letterClassName = classNames({
        [styles.correcty]: status === 'correct',
        [styles.wrong]: status ===' notSelected'
    })

    return (
        <span>
            {display ? <span
            className={letterClassName}
            >
                {letter}
                </span>
               :' - ' }
        </span>
    )
})

export const Word =  observer(()=>{
    const  { hangman} = useGame()

    return (
        <div>
            {hangman.wordToGuess.wordParts.map((part: string[], index:number)=>{
                return (
                    <span key={index}>
                        &nbsp; &nbsp;{" "}
                        {
                            part.map((l:string,i:number)=>(
                        <WordLetter key={l + i} letter={l as Alphabet} />
                            ))
                        }
                    </span>
                )
            })}
        </div>
    )
})