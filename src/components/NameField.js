import React, { useContext } from 'react';
import { GameContext } from '../contexts';
import NameInput from './NameInput';
import UserName from './UserName';
import Game from '../game';

export default function NameFiled() {
  const { gameState } = useContext(GameContext);
  const nameInputStyle = {
    position: "relative",
    marginTop: 360,
    textAlign: "center",
    display: Game.IamReady(gameState) ? "none" : "block",
  };
  const nameElemStyle = {
    position: "relative",
    marginTop: 380,
    textAlign: "center",
    display: Game.IamReady(gameState) ? "block" : "none",
  };

  let component;
  if (gameState.isSingleMode) {
    const players = gameState.players
    if (players.length === 0) {
      component = <NameInput style={nameInputStyle} />
    } else {
      const name = players[0].name;
      component = <UserName style={nameElemStyle} name={name} />
    }
  } else {
    component = <div>みんなで遊ぶ</div>;
  }
  return component;
}
