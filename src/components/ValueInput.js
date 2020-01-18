import React, { useRef, useContext } from 'react';
import { Box, Button, TextField, makeStyles } from "@material-ui/core";
import { GameContext } from '../contexts';
import Game from '../game';

const useStyles = makeStyles(theme => ({
  textField: {
    width: "100%",
    overflow: "scroll",
  },
  textInputField: { width: 320 },
}));

export default function ValueInput() {
  const { textField, textInputField } = useStyles();
  const { gameState, gameDispatch } = useContext(GameContext);
  const me = Game.getMyState(gameState);
  const inputRef = useRef();
  const submitHandle = e => {
    e.preventDefault();
    gameDispatch({
      type: "setComment",
      comment: inputRef.current.value,
    });
  }

  const commentForm = (
    <form onSubmit={e => submitHandle(e)}>
      <Box mt={2} display="flex" alignItems="flex-end">
        <Box mr={1}>
          <TextField
            label="自分の価値観を説明しよう"
            multiline
            rows="4"
            variant="outlined"
            inputRef={inputRef}
            className={textInputField}
            required
          />
        </Box>
        <Box>
          <Button type="submit" variant="contained">
            完了
          </Button>
        </Box>
      </Box>
    </form>
  );

  const comment = (
    <Box
      className={textField}
      p={2}
      border={1}
      borderColor="grey.500"
      borderRadius={10}
    >
      {me.result.comment}
    </Box>
  )

  return (
    <>
      {
        me.result.comment
          ? comment
          : commentForm
      }
    </>
  )
}
