import React,{ Component } from 'react';

import Header from './components/Header';
import Board from './components/Board';
import Controller from './components/Controller';

import { boardWidth, boardHeight, PlayPiece } from './Constants';

import './App.css';

function parseTurn(data){
  data = data.split(',');
  return {
    color: data[0],
    name: data[1],
    x: data[2],
    y: data[3],
    rotation: data[4],
    flip: data[5]
  }
}

class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      currentBoard: 0,
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
    this.addPiece(parseTurn("RED,1,0,0,1,1"));
    this.addPiece(parseTurn("GREEN,1,1,1,1,1"));
    this.addPiece(parseTurn("YELLOW,1,2,2,1,1"));
    this.addPiece(parseTurn("BLUE,1,3,3,1,1"));
  }

  // RED,L4,19,1,1,1
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
    const { boards, currentBoard } = this.state;
    this.setState({ currentBoard: boards.length-1 });
  }


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
        <Board board={boards[currentBoard]} />
      </div>
    );
  }
}

export default App;
