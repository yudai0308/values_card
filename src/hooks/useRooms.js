import { useState } from "react";
import firebase from "firebase";

export default function useRooms(currentState) {
  const [roomsState, setRoomsState] = useState(currentState);

}
