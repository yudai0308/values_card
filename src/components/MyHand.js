import React, { useContext } from "react";
import { GameContext } from '../contexts';
import { Box, Paper, Zoom } from '@material-ui/core';
import { useHandStyles } from '../styles';
import Game from '../game';

export default function MyHand() {
  const { gameState, gameDispatch } = useContext(GameContext);
  const handClasses = useHandStyles();
  const me = Game.getMyState(gameState);
  const getHandCards = hand => {
    return hand.map((card, i) => {
      return (
        <Zoom key={card.id} in={gameState.wasStarted}
          style={{ transitionDelay: gameState.turn > 0 ? '200ms' : `${500 * i}ms` }}
        >
          <Paper key={card.id} elevation={3} p={3}
            style={i === 5 ? { marginLeft: "20px" } : null}
            onClick={() => gameDispatch({ type: "discard", cardId: card.id })}
          >
            {card.name}
          </Paper>
        </Zoom>
      );
    });
  };
  return (
    <Box
      className={handClasses.vCards}
      display="flex"
      justifyContent="center"
      flexDirection="row"
    >
      {getHandCards(me.hand)}
    </Box>
  )
}
