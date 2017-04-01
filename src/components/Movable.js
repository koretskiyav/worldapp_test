import React, { Component, PropTypes } from 'react';
import { inject, observer } from 'mobx-react';
import styled from 'styled-components';

const { bool, number, func } = PropTypes;

const Div = styled.div`
  width: 100px;
  height: 100px;
  padding: 10px;
  font-size: 16px;
  text-align: center;
  display: flex;
  justify-content: center;
  align-items: center;
  background: rgba(200, 150, 100, 0.8);
  user-select: none;
  box-shadow: ${({ isMoving }) => (isMoving ? '5px 5px 30px 3px rgba(0,0,0,0.4), 1px 1px 5px rgba(0,0,0,0.5)' : '1px 1px 5px rgba(0,0,0,0.5)')};
  border: 1px solid #aaa;
  border-radius: 1%;
  position: absolute;
  cursor: pointer;
`;

@inject(({ store }) => ({
  ...store.movable,
  startMoving: store.startMoving,
  endMoving: store.endMoving,
  move: store.move,
}))
@observer
export default class Target extends Component {
  static propTypes = {
    x: number.isRequired,
    y: number.isRequired,
    isMoving: bool.isRequired,
    startMoving: func.isRequired,
  };

  onDown = () => this.props.startMoving();

  render() {
    const { x, y, isMoving } = this.props;

    return (
      <Div style={{ top: y, left: x }} isMoving={isMoving} onMouseDown={this.onDown} >
        Drag me to my target
      </Div>
    );
  }
}
