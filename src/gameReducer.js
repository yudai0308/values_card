import { defaultPlayerState, values } from "./conf";
import { shuffle } from "./libs";
import Game from "./game";

export default function gameReducer(gameState, action) {
  switch (action.type) {
    case "createDeck":
      {
        // みんなで遊ぶ場合は firebase からカード情報を取得
        const shuffled = shuffle(values);
        return { ...gameState, deck: [...shuffled] };
      }
    case "addPlayer":
      {
        const player = {
          ...defaultPlayerState,
          name: action.name,
          isMyState: true,
          isReady: true,
        };
        const players = [...gameState.players, player];
        return { ...gameState, players: players };
      }
    case "distributeCards":
      {
        const deck = gameState.deck;
        const players = gameState.players;
        players.map(player => {
          for (let i = 0; i < 5; i++) {
            player.hand.push(deck.shift());
          }
          return player;
        });
        return { ...gameState, wasStarted: true, deck: deck, players: players };
      }

    case "startGame":
      {
        const players = gameState.players;
        const index = Math.floor(Math.random() * players.length);
        players[index].canDraw = true;
        return { ...gameState, turn: 1, players: players };
      }

    case "drawCardFromDeck":
      {
        const deck = gameState.deck;
        if (deck.length === 0) {
          console.log("山札にカードがありません。");
          return gameState;
        }

        let me = Game.getMyState(gameState);
        if (!gameState.wasStarted || !me.canDraw) {
          return gameState;
        }

        const drew = gameState.deck.shift();
        if (gameState.isSingleMode) {
          me = { ...me, hand: [...me.hand, drew], canDraw: false, canDiscard: true, };
          return { ...gameState, players: [me] };
        } else {
          return;
        }
      }

    case "drawCardFromDiscards":
      {
        if (gameState.discards.length === 0) {
          console.log("捨て札にカードがありません。");
          return gameState;
        }

        const cardId = action.cardId;
        if (gameState.isSingleMode) {
          const drew = gameState.discards.find(card => card.id === cardId);
          if (!drew) {
            console.log("カード情報が確認できませんでした。");
            return gameState;
          }
          let me = Game.getMyState(gameState);
          me.hand.push(drew);
          me = { ...me, canDraw: false, canDiscard: true, };
          console.log(gameState.discards)
          const discards = gameState.discards.filter(card => card.id !== cardId);
          console.log(discards)
          return { ...gameState, discards: discards, players: [me], };
        } else {
          return gameState;
        }
      }
    case "discard":
      {
        console.log(111)

        let me = Game.getMyState(gameState);
        if (!me.canDiscard) return gameState;

        if (gameState.isSingleMode) {
          const cardId = action.cardId;
          const discard = me.hand.find(card => card.id === cardId);
          gameState.discards.push(discard);
          gameState.turn++
          me = {
            ...me,
            hand: me.hand.filter(card => card.id !== cardId),
            canDiscard: false,
            canDraw: true,
          }
          return { ...gameState, players: [me] };
        } else {
          return gameState;
        }
      }
    case "5":
      {
        return true;
      }
    case "6":
      {
        return true;
      }
    case "7":
      {
        return true;
      }
    default:
      {
        throw new Error(`${action.type} アクションは定義されていません。`);
      }
  }
}
