import React, { Component } from 'react';

import TileRow from './TileRow';
import { boardHeight } from '../Constants';

import './Board.css';


export default class Board extends Component {
  render(){
    const tileRows = [];

    for(var i=0; i<boardHeight; i++){
      tileRows.push(<TileRow key={i} />);
    }

    return (
      <div className="board-wrapper">
        <div className="board">
          {tileRows}
        </div>
      </div>
    )
  }
}
