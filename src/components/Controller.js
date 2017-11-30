import React, { Component } from 'react';
import { ButtonToolbar, ButtonGroup, Button, Glyphicon } from 'react-bootstrap';

import './Controller.css';

export default class Controller extends Component {
  render() {
    const { onFastBackward, onBackward, onPlay, playing, onForward, onFastForward } = this.props;
    var playButtonStyle = playing ? 'success' : 'default'
    return (
      <div className="controller-wrapper">
        <div className="controller">
          <ButtonToolbar>
            <ButtonGroup>
              <Button onClick={onFastBackward}><Glyphicon glyph="fast-backward" /></Button>
              <Button onClick={onBackward}><Glyphicon glyph="step-backward" /></Button>
              <Button onClick={onPlay} bsStyle={playButtonStyle}><Glyphicon glyph="play" /></Button>
              <Button onClick={onForward}><Glyphicon glyph="step-forward" /></Button>
              <Button onClick={onFastForward}><Glyphicon glyph="fast-forward" /></Button>
            </ButtonGroup>
          </ButtonToolbar>
        </div>
      </div>
    )
  }
}
