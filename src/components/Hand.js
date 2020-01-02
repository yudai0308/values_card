import React from "react";
import Box from '@material-ui/core/Box';
import Paper from '@material-ui/core/Paper';
import { useHandStyles } from '../styles';

export default function Hand({ cardNum, isVirtical = true, centering = true }) {
  const handClasses = useHandStyles();

  const getCards = n => {
    let cards = [];
    for (let i = 0; i < n; i++) {
      cards.push(<Paper key={i} elevation={3} p={2}></Paper>);
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
