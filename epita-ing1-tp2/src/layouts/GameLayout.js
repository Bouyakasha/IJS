import React from "react";
import Board from "../components/Board";
import GameInfo from "../components/GameInfo";

const gameLayoutStyle = {
    width: 650,
    height: `calc(90%)`,
    top: 0,
    bottom: 0,
    left: 0,
    right: 0,
    margin: "auto"
};

class GameLayout extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            cells: Array(9).fill(null),
            currentPlayer: "player 1",
            cellDisp: "x"
        };
    }

    // getDerivedStateFromProps is called before every render,
    // use it to infer new state values from props or state changes.
    static getDerivedStateFromProps(props, state) {
        return state;
    }

    handleClick(){
        this.setState({
            currentPlayer: this.state.currentPlayer === "player 2" ? "player 1" : "player 2",
            cellDisp: this.state.cellDisp === "x" ? "o" : "x"});
    };



    render() {
        return (
            <div
                style={gameLayoutStyle}
                onClick={() => this.handleClick()}/*setState({currentPlayer: this.state.currentPlayer === "player 2" ? "player 1" : "player 2"})}*/
            >
                <GameInfo currentPlayer={this.state.currentPlayer} />
                <Board cells={this.state.cells}/>

            </div>
        );
    }
}

export default GameLayout;
