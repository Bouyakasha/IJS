import React from "react";
//ssss
//ddddd
//sszaaaa
//dzqzzqzzqzqdzqdq
// FIXME: change message and color based on `gameState`'s value
const GameInfo = ({ gameState = "stale", currentPlayer = "unkown" }) => (
  <h3>It's your turn {currentPlayer}</h3>
);

export default GameInfo;
