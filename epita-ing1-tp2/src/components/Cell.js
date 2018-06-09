import React from "react";
import Board from "./Board";
import GameLayout from "../layouts/GameLayout";

const cellStyle = {
  display: "block",
  backgroundColor: "white",
  width: "200px",
  height: "200px",
  border: "1px solid #333",
  outline: "none",
  textAlign: "center",
  lineHeight: "200px",
  cursor: "pointer"
};

const bis = {
  display: "block",
  backgroundColor: "green",
  width: "200px",
  height: "200px",
  border: "1px solid #333",
  outline: "none",
  textAlign: "center",
  lineHeight: "200px",
  cursor: "pointer"
}



class Cell extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      isMouseOver: false,
        //indexx: 0,
        //value: null
    };
  }
    //8454564547
  render(){
  return(
    <div
      style={this.state.isMouseOver? bis : cellStyle}
      onMouseOver={ () => this.setState({ isMouseOver: true})}
      onMouseOut={ () => this.setState({isMouseOver: false})}
      onClick={ () => this.props.onClick(this.props.index)}
    >
        {this.props.value!==null? this.props.value : '?'}

    </div>
  );
 }
}
export default Cell;
