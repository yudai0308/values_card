import { db } from "./firebase";
import { shuffle } from "./libs";

// firestore からカード情報を取得
const getAllCadrs = async () => {
  const cardsRef = db.collection("cards").doc("all");
  const doc = await cardsRef.get();
  if (doc.exists) {
    return doc.data()
  } else {
    console.log("カードが登録されていません。")
  }
}

// カード情報を取得して配列をランダムに再配置
export const createDeck = async () => {
  let data = await getAllCadrs();
  data = shuffle(data);
  return data;
}
