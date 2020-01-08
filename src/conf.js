export const fieldFrame = {
  width: 800,
  height: 600,
  sideWidth: 100
};

export const cardFrame = {
  width: 64,
  height: 80,
}

export const defaultGameState = {
  isSingleMode: true,
  wasStarted: false,
  wasEnded: false,
  deck: [],
  discards: [],
  players: [],
  timestamp: new Date(),
};

export const defaultPlayerState = {
  id: null,
  isMyState: false,
  isReady: false,
  canDraw: false,
  canDiscard: false,
  name: "",
  hand: [],
  drew: null,
  result: { value: [], comment: "" }
};

// export const values = [
//   "ロジック・論理", "エモーション・感情", "グローバル", "ドメスティック",
//   "リーダーシップ", "フォロワーシップ", "挑戦", "安定", "変化", "一貫",
//   "躍動的な人生", "平穏な人生", "自己成長", "貢献", "革新性", "創造性",
//   "行動", "思考", "多様性", "一体感", "仕事", "家族", "情熱", "冷静",
//   "忍耐力", "爆発力", "ビジョン", "堅実", "謙虚", "尊敬", "信頼", "努力",
//   "友情", "勝利", "正直", "勇気", "愛", "感謝", "影響力", "ポジティブ",
//   "心地よさ", "喜び", "健康", "幸せ", "刺激", "個性", "遊び心", "責任感",
//   "プロフェッショナル", "全力", "誇り", "学習", "効率", "最先端", "シンプル",
//   "伝統", "自由", "能力", "気合い", "経験",
// ];

export const values = [
  { id: 1, name: "ロジック・論理" }, { id: 2, name: "エモーション・感情" },
  { id: 3, name: "グローバル" }, { id: 4, name: "ドメスティック" },
  { id: 5, name: "リーダーシップ" }, { id: 6, name: "フォロワーシップ" },
  { id: 7, name: "挑戦" }, { id: 8, name: "安定" },
  { id: 9, name: "変化" }, { id: 10, name: "一貫" },
];
