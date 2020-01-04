import React, { useContext, useRef } from 'react';
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
  const handleSubmit = e => {
    e.preventDefault();
    const name = inputRef.current.value;
    // inputRef.current.value = "";
    const playerState = {
      ...defaultPlayerState, name: name,
      isReady: true, isMyState: true,
    };
    setGameState({ ...gameState, players: [playerState] });
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

