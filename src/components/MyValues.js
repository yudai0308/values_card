import React, { useContext } from 'react';
import { GameContext } from '../contexts';
import { Box, Paper } from "@material-ui/core";
import { useHandStyles } from '../styles';
import Game from "../game";

export default function MyValues() {
  const { gameState, gameDispatch } = useContext(GameContext);
  const me = Game.getMyState(gameState);
  const handClasses = useHandStyles();
  // const cards = [
  //   { id: 1, name: "ロジック・論理" }, { id: 2, name: "エモーション・感情" },
  //   { id: 3, name: "グローバル" }, { id: 4, name: "ドメスティック" },
  //   { id: 5, name: "リーダーシップ" }
  // ];
  const getHand = cards => {
    return cards.map(card => {
      return (
        <Paper key={card.id} elevation={3} p={3}>
          {card.name}
        </Paper>
      );
    })
  }
  console.log(me.result.values)
  return (
    <Box mr={2}>
      <Box mb={1} p={1}>testさんの価値</Box>
      <Box
        className={handClasses.vCards}
        display="flex"
        flexDirection="row"
      >
        {getHand(me.result.values)}
      </Box>
    </Box>
  )
}
