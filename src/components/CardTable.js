import React, { useContext } from "react";
import { Box } from '@material-ui/core';
import NameFiled from './NameField';
import Deckset from './Deckset';
import HandBack from './HandBack';
import MyHand from './MyHand';
import Discard from './Discard';
import Game from '../game';
import { useFieldStyles } from '../styles';
import { GameContext } from "../contexts";

export default function CardTable({ isSingleMode }) {
  const fieldClasses = useFieldStyles();
  const { gameState, gameDispatch } = useContext(GameContext);
  const deckPosition = { top: 150, left: 220 }
  const me = Game.getMyState(gameState);

  return (
    <Box display="flex" justifyContent="center">
      <Box className={fieldClasses.mainField}>
        <Box style={{ width: 700, height: 90 }}>
          {gameState.isSingleMode ? null : <HandBack cardNum={5} />}
        </Box>
        <Box style={{ width: 700, height: 420 }}>
          <Box
            display="flex"
            flexDirection="row"
            justifyContent="space-between"
          >
            <Box style={{ width: 86, height: 420 }}>
              {gameState.isSingleMode ? null : <HandBack cardNum={5} isVirtical={false} centering={false} />}
            </Box>
            <Box style={{ width: 528, height: 420 }}>
              <Deckset style={deckPosition} />
              <NameFiled />
            </Box>
            <Box style={{ width: 86, height: 420 }}>
              {gameState.isSingleMode ? null : <HandBack cardNum={5} isVirtical={false} centering={false} />}
            </Box>
          </Box>
        </Box>
        <Box style={{ width: 700, height: 90 }}>
          {me ? <MyHand hand={me.hand} /> : null}
        </Box>
      </Box>
      <Box className={fieldClasses.sideField}>
        <Discard />
      </Box>
    </Box>
  );
}
