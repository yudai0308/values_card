import React, { useContext } from "react";
import { GameContext } from '../contexts';
import { Box, Paper } from '@material-ui/core';
import { useHandStyles } from '../styles';
import { fieldFrame, cardFrame } from '../conf';
import Game from '../game';

export default function Discord() {
  const handClasses = useHandStyles();
  const { gameState, setGameState } = useContext(GameContext);
  const clickDiscardHandle = cardId => {
    const me = Game.getMyState(gameState);
    if (me.canDraw) {
      const newGameState = Game.drawCardFromDiscards(gameState, cardId);
      setGameState(newGameState);
    }
  }
  const left = (fieldFrame.sideWidth - cardFrame.width) / 2;
  const discards = gameState.discards.map((card, i) => {
    const top = i * 30 + 30;
    const style = { position: "absolute", left: left, top: top, cursor: "pointer" };
    return (
      <Paper key={card.id} elevation={5} p={2} style={style} onClick={() => clickDiscardHandle(card.id)}>
        {card.name}
      </Paper>
    );
  })

  return (
    <Box
      className={handClasses.vCards}
      display="flex"
      flexDirection="column"
      position="relative"
      style={{ width: "100%" }}
    >
      {discards}
    </Box>
  )
}
