export const fieldFrame = {
  width: 800,
  height: 600,
  sideWidth: 100
};

export const defaultGameState = {
  wasStarted: false,
  wasEnded: false,
  deck: [],
  discards: [],
  players: [],
};

export const defaultPlayerState = {
  id: null,
  name: "",
  hand: [],
  drew: { id: null, name: "" },
};
