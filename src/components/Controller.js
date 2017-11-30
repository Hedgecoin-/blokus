import React, { Component } from 'react';
import { ButtonToolbar, ButtonGroup, Button, Glyphicon } from 'react-bootstrap';

import './Controller.css';

export default class Controller extends Component {
  render() {
    return (
      <div className="controller-wrapper">
        <div className="controller">
          <ButtonToolbar>
            <ButtonGroup>
              <Button><Glyphicon glyph="fast-backward" /></Button>
              <Button><Glyphicon glyph="step-backward" /></Button>
              <Button><Glyphicon glyph="play" /></Button>
              <Button><Glyphicon glyph="step-forward" /></Button>
              <Button><Glyphicon glyph="fast-forward" /></Button>
            </ButtonGroup>
          </ButtonToolbar>
        </div>
      </div>
    )
  }
}
