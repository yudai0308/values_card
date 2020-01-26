import { useState, useEffect } from "react";
import { db } from "./firebase";
import { values } from "./conf";

export default function useAllValues(currentState) {
  // const [gameState, setGameState] = useState(currentState);

  /**
   * firestore からカード情報を取得
   */
  /*
  const getAllValues = async () => {
    const cardsRef = db.collection("cards").doc("all");
    const doc = await cardsRef.get();
    if (doc.exists) {
      return doc.data()
    } else {
      console.log("カードが登録されていません。")
    }
    return values;
  }
  */
  return values;
}
