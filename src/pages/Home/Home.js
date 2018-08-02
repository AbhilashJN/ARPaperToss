import React, { Component } from 'react';
import * as styled from './style';

export default class Home extends Component {
  render() {
    return (
      <styled.HomePage>
        <styled.ButtonWrapper>
          <styled.Button>
            <styled.Text>Start</styled.Text>
          </styled.Button>
          <styled.Button>
            <styled.Text>High Score</styled.Text>
          </styled.Button>
        </styled.ButtonWrapper>
      </styled.HomePage>
    );
  }
}
