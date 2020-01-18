import { db } from "./firebase";
import { shuffle } from "./libs";
import { values, defaultGameState, defaultPlayerState } from "./conf";

export default class Game {
  /**
   * firestore に gameState の初期値を登録
   */
  static async init() {
    db.collection("games").add(defaultGameState);
  }

  /**
   * ひとりモードかどうかを確認
   */
  static isSingleMode() {
    const path = window.location.pathname;
    if (path === "/single") {
      return true;
    } else {
      return false;
    }
  }

  static getMyState(gameState) {
    const me = gameState.players.find(p => p.isMyState);
    return me;
  }

  /**
   * 自分が「開始」ボタンを押しているかどうかを確認
   */
  static IamReady(gameState) {
    const players = gameState.players;
    if (players.length === 0) {
      // console.log("プレイヤーが見つかりません。");
      return false;
    }
    const me = this.getMyState(gameState);
    return me.isReady;
  }

  /**
   * firestore からカード情報を取得
   */
  static async getAllValues() {
    /*
    const cardsRef = db.collection("cards").doc("all");
    const doc = await cardsRef.get();
    if (doc.exists) {
      return doc.data()
    } else {
      console.log("カードが登録されていません。")
    }
    */
    return values;
  }

  /**
   * カード情報を取得して配列をシャッフル
   */
  static async createDeck() {
    let values = await this.getAllValues();
    values = shuffle(values);
    return values;
  }

  static drawCardFromDeck(gameState) {
    const deck = gameState.deck;
    if (deck.length === 0) {
      console.log("山札にカードがありません。");
      return gameState;
    }

    let newGameState = { ...gameState };
    const drew = newGameState.deck.shift();
    if (newGameState.isSingleMode) {
      let me = this.getMyState(newGameState);
      // me = { ...me, drew: drew, canDraw: false, canDiscard: true, };
      me = { ...me, hand: [...me.hand, drew], canDraw: false, canDiscard: true, };
      newGameState.players = [me];
      return newGameState;
    } else {
      return;
    }
  }

  static drawCardFromDiscards(gameState, cardId) {
    if (gameState.discards.length === 0) {
      console.log("捨て札にカードがありません。");
      return gameState;
    }

    let newGameState = { ...gameState };
    if (newGameState.isSingleMode) {
      const drew = newGameState.discards.find(card => card.id === cardId);
      if (!drew) {
        console.log("カード情報が確認できませんでした。");
        return gameState;
      }
      let me = this.getMyState(newGameState);
      me.hand.push(drew);
      me = { ...me, canDraw: false, canDiscard: true, };

      newGameState = {
        ...newGameState,
        discards: newGameState.discards.filter(card => card.id !== cardId),
        players: [me],
      }
      return newGameState;
    } else {
      return gameState;
    }
  }

  getCardById(id) {
    return values.find(v => v.id === id);
  }

  static discard(gameState, cardId) {
    const me = this.getMyState(gameState);
    if (!me.canDiscard) return gameState;

    let newGameState = { ...gameState };
    if (newGameState.isSingleMode) {
      const discard = me.hand.find(card => card.id === cardId);
      newGameState.discards.push(discard);
      newGameState.turn++
      me.hand = me.hand.filter(card => card.id !== cardId);
      me.canDiscard = false;
      me.canDraw = true;
      return { ...newGameState, players: [me] };
    } else {
      return gameState;
    }
  }
}
