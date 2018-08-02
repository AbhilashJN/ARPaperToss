import React, { Component } from 'react';
import * as styled from './style';

export default class Home extends Component {
  render() {
    return (
      <styled.HomePage>
        <styled.Button>
          <styled.Text>START</styled.Text>
        </styled.Button>
      </styled.HomePage>
    );
  }
}
