import React, { Component, PropTypes } from 'react';
import { inject, observer } from 'mobx-react';
import { findDOMNode } from 'react-dom';
import styled from 'styled-components';

const { bool, shape, func } = PropTypes;

const Div = styled.div`
  width: 20%;
  height: 20%;
  padding: 10px;
  font-size: 20px;
  background: ${props => (props.droped ? 'mediumseagreen' : '#ccc')};
  border: 1px solid #aaa;
  border-radius: 1%;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`;

@inject('store')
@observer
export default class Target extends Component {
  static propTypes = {
    store: shape({
      droped: bool.isRequired,
      init: func.isRequired,
    }).isRequired,
  };

  onInit = (el) => {
    const node = findDOMNode(el);
    const parent = node.offsetParent;

    this.props.store.init({
      top: parent.offsetTop,
      left: parent.offsetLeft,
      height: parent.offsetHeight,
      width: parent.offsetWidth,
    }, {
      top: node.offsetTop,
      left: node.offsetLeft,
      height: node.offsetHeight,
      width: node.offsetWidth,
    });
  }

  render() {
    const { droped } = this.props.store;

    return (
      <Div droped={droped} ref={this.onInit}>
        {droped ? 'Droped!' : 'Drop here'}
      </Div>
    );
  }
}
