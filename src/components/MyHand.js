import React, { useContext } from "react";
import { GameContext } from '../contexts';
import { Box, Paper, Zoom } from '@material-ui/core';
import { useHandStyles } from '../styles';
import Game from '../game';

export default function MyHand(/*{ hand, isVirtical = true, centering = true }*/) {
  const { gameState } = useContext(GameContext);
  const handClasses = useHandStyles();
  const me = Game.getMyState(gameState);
  const getHandCards = hand => {
    const cards = hand.map((card, i) => {
      return (
        <Zoom key={card.id} in={gameState.wasStarted} style={{
          transitionDelay: gameState.wasStarted ? `${500 * i}ms` : '0ms'}}
        >
          <Paper key={card.id} elevation={3} p={2} >{card.name}</Paper>
        </Zoom>
      );
    });
    return cards;
  };

  const getDrewCard = drew => {
    return(
      drew
        ? <Paper key={me.drew.id} elevation={3} p={2} >{me.drew.name}</Paper>
        : null
    )
  }

  return (
    <Box
      className={handClasses.vCards}
      display="flex"
      justifyContent="center"
      flexDirection="row"
    >
      {getHandCards(me.hand)}
      {getDrewCard(me.drew)}
    </Box>
  )
}
