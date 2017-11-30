import React,{ Component } from 'react';

import Header from './components/Header';
import Board from './components/Board';
import Controller from './components/Controller';

import { PlayPiece } from './Moves';
import {
  boardWidth,
  boardHeight,
  parseTurn,
  } from './Constants';

import './App.css';

class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      currentBoard: 4,
      boards: [],
      playing: false,
    }
  }

  componentWillMount(){
    const { boards } = this.state;
    const newBoard = [];
    for(var j=0; j<boardHeight; j++){
      newBoard.push([]);
      for(var i=0; i<boardWidth; i++){
        newBoard[j].push({
          color: 'none',
          x: i,
          y: j,
        });
      }
    }
    boards.push(newBoard);
    this.setState({ boards: boards });

    // Testing states
    var name = 't4';
    this.addPiece(parseTurn("RED,"+name+",3,3,0,1"));
    this.addPiece(parseTurn("RED,"+name+",7,7,1,1"));
    this.addPiece(parseTurn("RED,"+name+",12,12,2,1"));
    this.addPiece(parseTurn("RED,"+name+",16,16,3,1"));

    // this.addPiece(parseTurn("GREEN,2,13,11,0,1"));
    // this.addPiece(parseTurn("YELLOW,1,18,18,1,1"));
    this.addPiece(parseTurn("BLUE,1,19,19,1,1"));
  }

  addPiece = (piece) => {
    const { boards } = this.state;
    const lastBoard = boards[boards.length-1];
    const copyBoard = [];

    // Deep copy the latest board state
    for(var j=0; j<boardHeight; j++){
      copyBoard.push([]);
      for(var i=0; i<boardWidth; i++){
        let copyTile = Object.assign({}, lastBoard[j][i]);
        copyBoard[j].push(copyTile);
      }
    }

    const newBoard = PlayPiece(copyBoard, piece);
    boards.push(newBoard);
    this.setState({ boards: boards });
  }

  /*
    Controller Functions
  */

  handleFastBackward = () => {
      this.setState({ currentBoard: 0 });
  }
  handleBackward = () => {
    const { currentBoard } = this.state;
    var newCurrentBoard = Math.max(0, currentBoard-1);
    this.setState({ currentBoard: newCurrentBoard });
  }
  handlePlay = () => {
    const { playing } = this.state;
    this.setState({ playing: !playing });
  }
  play = () => {
    const { playing } = this.state;
    if(playing){
      setTimeout(this.handleForward, 1000);
    }
  }
  handleForward = () => {
    const { boards, currentBoard } = this.state;
    var newCurrentBoard = Math.min(boards.length-1, currentBoard+1);
    this.setState({ currentBoard: newCurrentBoard });
  }
  handleFastForward = () => {
    const { boards } = this.state;
    this.setState({ currentBoard: boards.length-1 });
  }

  /*
    End of Controller Functions
  */

  render() {
    const { boards, currentBoard, playing } = this.state;
    this.play();
    return (
      <div>
        <Header />
        <Controller
          onFastBackward={this.handleFastBackward}
          onBackward={this.handleBackward}
          onPlay={this.handlePlay}
          playing={playing}
          onForward={this.handleForward}
          onFastForward={this.handleFastForward}
        />
        <Board board={boards[boards.length-1]} />
      </div>
    );
  }
}

export default App;
