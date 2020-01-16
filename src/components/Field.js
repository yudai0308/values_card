import React, { useReducer } from "react";
import { Box } from '@material-ui/core';
import NameFiled from './NameField';
import Deckset from './Deckset';
import HandBack from './HandBack';
import MyHand from './MyHand';
import Discard from './Discard';
import Game from '../game';
import { useFieldStyles } from '../styles';
import { defaultGameState, fieldFrame, cardFrame } from '../conf';
import { GameContext } from '../contexts';
import gameReducer from '../gameReducer';

/*
1. 「開始」ボタンを押す => wasStarted を true に変更
2. deck にシャッフルしたカード情報を保存
3. deck の頭から５枚手札に配布
4. 山札か捨て札をクリック => 手札を１枚増やす
5. 手札から１枚選んで捨てる => 捨てたカードはサイドフィールドへ
6. ４、５を繰り返して deck が０になったら終了 => wasEnded を true に変更
7. 結果表示画面を表示

※ひとりプレーの場合、firestore にデータを保存する必要はない
*/

export default function Field({ isSingleMode }) {
  const fieldClasses = useFieldStyles();
  const [gameState, gameDispatch] = useReducer(gameReducer, defaultGameState);
  const deckPosition = { top: 150, left: 220 }
  const me = Game.getMyState(gameState);

  return (
    <GameContext.Provider value={{ gameState: gameState, gameDispatch: gameDispatch }}>
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
    </GameContext.Provider>
  );
}
