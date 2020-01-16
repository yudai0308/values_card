import React, { useContext, useRef } from 'react';
import { sleep } from '../libs';
import { GameContext } from '../contexts';
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
  const { gameState, gameDispatch } = useContext(GameContext);
  const inputRef = useRef();
  const classes = useStyles();
  const handleSubmit = async e => {
    e.preventDefault();
    const name = inputRef.current.value;
    gameDispatch({ type: "createDeck" });
    gameDispatch({ type: "addPlayer", name: name });
    gameDispatch({ type: "distributeCards" })
    await sleep(2500); // 配り終わるまで待機
    gameDispatch({ type: "startGame" });
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

