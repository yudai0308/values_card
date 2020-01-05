import { db } from "./firebase";
import { shuffle } from "./libs";
import { defaultGameState } from "./conf";

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
  static async getAllCadrs() {
    const cardsRef = db.collection("cards").doc("all");
    const doc = await cardsRef.get();
    if (doc.exists) {
      return doc.data()
    } else {
      console.log("カードが登録されていません。")
    }
  }

  /**
   * カード情報を取得して配列をシャッフル
   */
  static async createDeck() {
    let card = await this.getAllCadrs();
    const cards = shuffle(card.names);
    return cards;
  }
}
