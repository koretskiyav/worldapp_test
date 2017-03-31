import React, { Component, PropTypes } from 'react';
import styled from 'styled-components';

const { bool } = PropTypes;

const Div = styled.div`
  width: 20%;
  height: 20%;
  padding: 10px;
  font-size: 20px;
  background: ${props => (props.droped ? 'mediumseagreen' : '#ccc')};
  border: 1px solid #aaa;
  border-radius: 3%;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`;

export default class Target extends Component {
  static propTypes = {
    droped: bool,
  };

  static defaultProps = {
    droped: false,
  };

  render() {
    const { droped } = this.props;
    return (
      <Div droped={droped}>
        {droped ? 'Droped!' : 'Drop here'}
      </Div>
    );
  }
}
