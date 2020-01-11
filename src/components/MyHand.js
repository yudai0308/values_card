import React, { useContext } from "react";
import { GameContext } from '../contexts';
import { Box, Paper, Zoom } from '@material-ui/core';
import { useHandStyles } from '../styles';
import Game from '../game';

export default function MyHand() {
  const { gameState, setGameState } = useContext(GameContext);
  const handClasses = useHandStyles();
  const me = Game.getMyState(gameState);
  const discardHandle = cardId => {
    const newGameState = Game.discard(gameState, cardId);
    setGameState(newGameState);
  }
  const getHandCards = hand => {
    return hand.map((card, i) => {
      return (
        <Zoom key={card.id} in={gameState.wasStarted}
          style={{ transitionDelay: gameState.turn > 0 ? '200ms' : `${500 * i}ms` }}
        >
          <Paper key={card.id} elevation={3} p={3}
            style={i === 5 ? {marginLeft: "20px"} : null}
            onClick={() => discardHandle(card.id)}
          >
            {card.name}
          </Paper>
        </Zoom>
      );
    });
  };
/*
  const getDrewCard = drew => {
    const me = Game.getMyState(gameState);
    return (
      drew
        ? (
          <Zoom key={drew.id} in={me.canDiscard} style={{ transitionDelay: '200ms' }}>
            <Paper key={me.drew.id} elevation={3} p={2} onClick={() => discardHandle(me.drew.id)} >
              {me.drew.name}
            </Paper>
          </Zoom>
        )
        : null
    )
  }
*/
  return (
    <Box
      className={handClasses.vCards}
      display="flex"
      justifyContent="center"
      flexDirection="row"
    >
      {getHandCards(me.hand)}
      {/* {getDrewCard(me.drew)} */}
    </Box>
  )
}
