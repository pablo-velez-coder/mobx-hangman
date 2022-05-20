import { Letter } from "./Letter";


export function Letters(){
    return (
        <div /* className={styles.letters} */>
            {hangman.alphabet.map((letter, index)=>(
                <Letter key={letter +  index} letter={letter} />
            ))}
        </div>
    )
}