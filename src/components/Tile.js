import React, { Component } from 'react';

import './Tile.css';

export default class Tile extends Component {
  render(){
    const { x, y, color } = this.props;
    var style = {};
    if(x === 19){
      style.borderRight = "none";
    }
    if(y === 19){
      style.borderBottom = "none";
    }

    switch (color) {
      case 'RED':
        style.backgroundColor = '#ED5565';
        break;
      case 'BLUE':
        style.backgroundColor = '#5D9CEC';
        break;
      case 'YELLOW':
        style.backgroundColor = '#FFCE54';
        break;
      case 'GREEN':
        style.backgroundColor = '#A0D468';
      default:

    }


    return (
      <div className="tile" style={style} />
    )
  }
}
