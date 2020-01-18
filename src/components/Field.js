import React, { useReducer } from "react";
import CardTable from "./CardTable";
import ResultPage from './ResultPage';
import { defaultGameState } from '../conf';
import { GameContext } from '../contexts';
import gameReducer from '../gameReducer';

export default function Field(props) {
  const [gameState, gameDispatch] = useReducer(gameReducer, defaultGameState);

  return (
    <GameContext.Provider value={{ gameState: gameState, gameDispatch: gameDispatch }}>
      {
        !gameState.ended
        ? <CardTable props={props} />
        : <ResultPage />
      }
    </GameContext.Provider>
  );
}
