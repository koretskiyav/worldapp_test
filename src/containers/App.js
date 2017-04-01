import React, { Component } from 'react';
import styled from 'styled-components';
import Target from 'components/Target';

const Wrapper = styled.div`
  width: 90vw;
  height: 90vh;
  margin: 5vh 5vw;
  box-shadow: 3px 3px 20px rgba(0,0,0,0.5);
  background: #eee;
  border: none;
  border-radius: 5px;
  position: relative;
`;

export default class App extends Component {
  render() {
    return (
      <Wrapper>
        <Target />
      </Wrapper>
    );
  }
}
