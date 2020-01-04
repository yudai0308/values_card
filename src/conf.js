export const fieldFrame = {
  width: 800,
  height: 600,
  sideWidth: 100
};

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
  name: "",
  hand: [],
  drew: { id: null, name: "" },
  result: { value: [], comment: "" }
};
