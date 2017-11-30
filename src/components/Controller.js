import React, { Component } from 'react';

import './Controller.css';

export default class Controller extends Component {
  render() {
    return (
      <div className="controller">
        <div className="arrow-left" />
        <div className="spacer" />
        <div className="arrow-right" />
      </div>
    )
  }
}
