import React from "react";
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import Paper from '@material-ui/core/Paper';
import blueGray from '@material-ui/core/colors/blueGrey';
import Deck from './Deck'
import { field } from '../conf';
import { useFieldStyles, useHandStyles } from '../styles';

export default function Field() {
  const fieldClasses = useFieldStyles();
  const handClasses = useHandStyles();
  const getCards = n => {
    let cards = [];
    for (let i = 0; i < n; i++) {
      cards.push(<Paper key={i} elevation={3} p={2}></Paper>);
    }
    return cards;
  };
  return (
    <Box display="flex" justifyContent="center">
      <Deck style={{ left: 350 - 40, top: 300 - 56 }} />
      <Box className={fieldClasses.mainField}>
        <Box
          className={handClasses.vCards}
          display="flex"
          justifyContent="center"
        >
          {getCards(6)}
        </Box>
        <Box
          display="flex"
          flexDirection="row"
          justifyContent="space-between"
        >
          <Box
            className={handClasses.hCards}
            display="flex"
            flexDirection="column"
          >
            {getCards(6)}
          </Box>
          <Box
            className={handClasses.hCards}
            display="flex"
            flexDirection="column"
          >
            {getCards(6)}
          </Box>
        </Box>
        <Box
          className={handClasses.vCards}
          display="flex"
          justifyContent="center"
        >
          {getCards(6)}
        </Box>
      </Box>
      <Box className={fieldClasses.sideField}>
        SIDE
      </Box>
    </Box>
  );
}
