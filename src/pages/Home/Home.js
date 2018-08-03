import React, { Component } from 'react';
import * as s from './style';

export default class Home extends Component {
  render() {
    return (
      <s.HomePage>
        <s.ButtonContainer>
          <s.Button>
            <s.Text>Start</s.Text>
          </s.Button>
          <s.Button>
            <s.Text>High Score</s.Text>
          </s.Button>
        </s.ButtonContainer>
      </s.HomePage>
    );
  }
}
