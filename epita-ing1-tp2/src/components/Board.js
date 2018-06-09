import React from "react";
import Cell from "./Cell";

const boardStyle = {
  display: "grid",
  width: "600px",
  height: "calc(100%)",
  grid: "auto-flow dense / 1fr 1fr 1fr",
  gridAutoRows: "auto"
};
//55555
const Board = ({ cells = [],onClickCell }) => (
  <div
      style={boardStyle}
  >
      {cells.map((c, index) => <Cell value={c} onClick={() => onClickCell(index)} />)}</div>
);
export default Board;
//++
//4866746764648648
