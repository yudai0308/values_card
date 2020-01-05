import React, { useState } from "react";
import { Box, } from '@material-ui/core';
import NameFiled from './NameField';
import Deck from './Deck';
import HandBack from './HandBack';
import HandFront from './HandFront';
import Discard from './Discard';
import Game from '../game';
import { useFieldStyles } from '../styles';
import { defaultGameState, fieldFrame, cardFrame } from '../conf';
import { GameContext } from '../contexts';

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
  const [gameState, setGameState] = useState({
    ...defaultGameState,
    isSingleMode: isSingleMode,
  });
  const deckPosition = { top: 220, left: 300 }
  const me = Game.getMyState(gameState);
  console.log(gameState)

  return (
    <GameContext.Provider value={{ gameState: gameState, setGameState: setGameState }}>
      <Box display="flex" justifyContent="center">
        <Deck style={deckPosition} />
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
                <NameFiled />
              </Box>
              <Box style={{ width: 86, height: 420 }}>
                {gameState.isSingleMode ? null : <HandBack cardNum={5} isVirtical={false} centering={false} />}
              </Box>
            </Box>
          </Box>
          <Box style={{ width: 700, height: 90 }}>
            {me ? <HandFront texts={me.hand} /> : null}
          </Box>
        </Box>
        <Box className={fieldClasses.sideField}>
          <Discard />
        </Box>
      </Box>
    </GameContext.Provider>
  );
}
