import React, { Component } from 'react';

import Tile from './Tile';
import { boardWidth } from '../Constants';

import './TileRow.css';

export default class TileRow extends Component {
  render(){

    const tiles = [];
    for(var i=0; i<boardWidth; i++){
      tiles.push(<Tile key={i} />);
    }

    return (
        <div className="tileRow">
          {tiles}
        </div>
    )
  }
}
