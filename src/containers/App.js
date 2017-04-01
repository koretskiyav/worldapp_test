import React, { Component, PropTypes } from 'react';
import { inject, observer } from 'mobx-react';
import styled from 'styled-components';
import Target from 'components/Target';
import Movable from 'components/Movable';

const { bool, func } = PropTypes;

const Wrapper = styled.div`
  width: 96vw;
  height: 96vh;
  margin: 2vh 2vw;
  box-shadow: 3px 3px 20px rgba(0,0,0,0.5);
  background: #eee;
  border: none;
  border-radius: 5px;
  position: relative;
`;

@inject(({ store }) => ({
  isMoving: store.movable.isMoving,
  endMoving: store.endMoving,
  move: store.move,
}))
@observer
export default class App extends Component {
  static propTypes = {
    isMoving: bool.isRequired,
    endMoving: func.isRequired,
    move: func.isRequired,
  };

  onUp = () => this.props.endMoving();
  onMove = (ev) => {
    if (this.props.isMoving) {
      this.props.move(ev.nativeEvent.movementX, ev.nativeEvent.movementY);
    }
  }

  render() {
    return (
      <Wrapper onMouseUp={this.onUp} onMouseMove={this.onMove}>
        <Target />
        <Movable />
      </Wrapper>
    );
  }
}
