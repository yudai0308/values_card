import React, { useContext, useRef } from 'react';
import Game from '../game';
import { sleep } from '../libs';
import { GameContext } from '../contexts';
import { defaultPlayerState } from '../conf';
import {
  makeStyles,
  Box,
  Button,
  TextField,
} from '@material-ui/core';

const useStyles = makeStyles(theme => ({
  textField: {
    marginRight: theme.spacing(1),
    position: "relative",
  },
  submitButton: {
    position: "absolute",
    top: 10,
  }
}));

export default function NameInput({ style }) {
  const { gameState, setGameState } = useContext(GameContext);
  const inputRef = useRef();
  const classes = useStyles();
  const handleSubmit = async e => {
    e.preventDefault();
    const name = inputRef.current.value;
    let deck = await Game.createDeck();
    let hand = [];
    for (let i = 0; i < 5; i++) { hand.push(deck.shift()) }
    const myState = {
      ...defaultPlayerState, name: name, hand: hand,
      isReady: true, isMyState: true,
    };
    if (gameState.isSingleMode) {
      setGameState(prev => {
        return { ...prev, wasStarted: true, deck: deck, players: [myState] };
      });
      await sleep(2500);
      myState.canDraw = true;
      setGameState(prev => ({ ...prev, players: [myState] }));
    } else {
      // みんなで遊ぶ場合
      return;
    }
  }
  return (
    <Box style={{ ...style, position: "relative" }}>
      <form onSubmit={handleSubmit}>
        <TextField className={classes.textField} label="名前を入力" inputRef={inputRef} required />
        <Button type="submit" className={classes.submitButton} variant="contained">
          開始
        </Button>
      </form>
    </Box>
  )
}

