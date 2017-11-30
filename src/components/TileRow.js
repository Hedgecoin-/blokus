import React, { Component } from 'react';

import Tile from './Tile';
import { boardWidth } from '../Constants';

import './TileRow.css';

export default class TileRow extends Component {
  render(){
    const { boardRow } = this.props;


    const tiles = [];
    for(var i=0; i<boardWidth; i++){
      tiles.push(<Tile key={i} x={boardRow[i].x} y={boardRow[i].y} color={boardRow[i].color} center={boardRow[i].center} />);
    }

    return (
        <div className="tileRow">
          {tiles}
        </div>
    )
  }
}
