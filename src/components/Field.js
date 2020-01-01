import React from "react";
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import Paper from '@material-ui/core/Paper';
// import { useStyles } from "../styles";
import blueGray from '@material-ui/core/colors/blueGrey';
import Deck from './Deck'
import { field } from '../conf';

const useStyles = makeStyles(theme => ({
  mainField: {
    backgroundColor: blueGray[100],
    minWidth: field.width - field.sideWidth,
    height: field.height,
  },
  sideField: {
    backgroundColor: blueGray[200],
    minWidth: field.sideWidth,
    height: field.height,
  },
  vCards: {
    display: 'flex',
    '& > *': {
      margin: 3,
      width: theme.spacing(8),
      height: theme.spacing(10),
      padding: 3,
    },
  },
  hCards: {
    display: 'flex',
    '& > *': {
      margin: 3,
      width: theme.spacing(10),
      height: theme.spacing(8),
      padding: 3,
    },
  },
}));

export default function Field() {
  const classes = useStyles();
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
      <Box className={classes.mainField}>
        <Box
          className={classes.vCards}
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
            className={classes.hCards}
            display="flex"
            flexDirection="column"
          >
            {getCards(6)}
          </Box>
          <Box
            className={classes.hCards}
            display="flex"
            flexDirection="column"
          >
            {getCards(6)}
          </Box>
        </Box>
        <Box
          className={classes.vCards}
          display="flex"
          justifyContent="center"
        >
          {getCards(6)}
        </Box>
      </Box>
      <Box className={classes.sideField}>
        SIDE
      </Box>
    </Box>
  );
}
