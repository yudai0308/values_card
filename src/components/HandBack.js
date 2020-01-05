import React, { useContext } from "react";
import { GameContext } from '../contexts';
import { Box, Paper, Zoom } from '@material-ui/core';
import { useHandStyles } from '../styles';

export default function HandBack({ cardNum, isVirtical = true, centering = true }) {
  const { gameState } = useContext(GameContext);
  const handClasses = useHandStyles();

  const getCards = n => {
    let cards = [];
    for (let i = 1; i <= n; i++) {
      cards.push(
        <Zoom key={i} in={gameState.wasStarted} style={{
          transitionDelay: gameState.wasStarted ? `${500 * i}ms` : '0ms'
        }}>
          <Paper key={i} elevation={3} p={2} ></Paper>
        </Zoom>
      );
    }
    return cards;
  };

  return (
    <Box
      className={isVirtical ? handClasses.vCards : handClasses.hCards}
      display="flex"
      justifyContent={centering ? "center" : ""}
      flexDirection={isVirtical ? "row" : "column"}
    >
      {getCards(cardNum)}
    </Box>
  )
}
