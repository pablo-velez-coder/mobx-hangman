import { useEffect, useRef } from "react";
import { Letters } from "./Letters";
import { Word } from "./Word";

export const GameLayout = ({children}:{children: React.ReactNode}) => <div>{children}</div>

export function Game(){
    const canvas = useRef<HTMLCanvasElement | null>(null)
    
    useEffect(() => {
        if(canvas.current){
            canvas.current.width = 500;
            canvas.current.height = 500;
            const  {hangmanCanvas, dispose} = createCanvasGame(canvas.current)

            return ()=>{
                dispose()
            }
        }
    }, []);

    return (
        <GameLayout>
            <>
            <canvas ref={canvas} />
            <Word />
            <Letters />
            <GameResult />
            </>
        </GameLayout>
    )
}