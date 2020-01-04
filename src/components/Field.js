import React, { useState } from "react";
import { Box } from '@material-ui/core';
import NameFiled from './NameField';
import Deck from './Deck';
import Hand from './Hand';
import Game from '../game';
import { useFieldStyles } from '../styles';
import { defaultGameState } from '../conf';
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

  return (
    <GameContext.Provider value={{ gameState: gameState, setGameState: setGameState }}>
      <Box display="flex" justifyContent="center">
        <Deck style={{ left: 350 - 40, top: 300 - 56 }} />
        <Box className={fieldClasses.mainField}>
          <Hand cardNum={6} />
          <Box
            display="flex"
            flexDirection="row"
            justifyContent="space-between"
          >
            <Hand cardNum={6} isVirtical={false} centering={false} />
            <NameFiled />
            <Hand cardNum={6} isVirtical={false} centering={false} />
          </Box>
          <Hand cardNum={6} />
        </Box>
        <Box className={fieldClasses.sideField}>
          SIDE
      </Box>
      </Box>
    </GameContext.Provider>
  );
}
