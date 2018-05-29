import React from "react";

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
/*handleClickCell(index){

}*/
class Cell extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      isMouseOver: false,
    };
  }

  render(){ 
  return(
    <div 
      style = {this.state.isMouseOver? bis : cellStyle}
      onMouseOver={ () => this.setState({ isMouseOver: true})}
      onMouseOut={ () => this.setState({isMouseOver: false})}
    > 
    </div>
  );
 }
}


export default Cell;
