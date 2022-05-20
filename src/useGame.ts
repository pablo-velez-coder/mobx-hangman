import React from 'react'
import { useContext } from "react";
import { GameStore } from "./store/GameStore";

export const GameContext = React.createContext<GameStore | null>(null)

export function useGame(){
    const game = useContext(GameContext)
    if(!game){
        throw new Error('Game should be provided')
    }

    return game
}