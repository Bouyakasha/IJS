import React from "react";
import Cell from "./Cell";

const boardStyle = {
  display: "grid",
  width: "600px",
  height: "calc(100%)",
  grid: "auto-flow dense / 1fr 1fr 1fr",
  gridAutoRows: "auto"
};
//ssshbuuynj
//csdfcsff
//errrrrrrrrrr
//slt
const Board = ({ cells = [] }) => (
  <div
      style={boardStyle}
  >

      {cells.map((c, index) => <Cell value="?" onClick={() => this.handleClickCell(index)} />)}</div>
);

export default Board;
