import React, { useContext } from "react";
import Deck from "./Deck";
import { GameContext } from '../contexts';
import { makeStyles } from "@material-ui/core/styles";
import { Box, Chip } from "@material-ui/core";
import Game from '../game';

const useStyles = makeStyles(theme => ({
  cardNum: {
    position: "absolute",
    top: -30,
    left: 34,
  },
}));

export default function Deckset({ style }) {
  const { cardNum } = useStyles();
  const { gameState } = useContext(GameContext);
  return (
    <Box style={{ ...style, position: "relative" }} >
      <Deck />
      {
        gameState.wasStarted
          ? <Chip color="primary" size="small" className={cardNum}
              label={gameState.deck.length}
            />
          : null
      }
    </Box>
  );
}
