import React from 'react';

/* eslint-disable react/prefer-stateless-function */
export default class HomePage extends React.PureComponent {
  render() {
    return (
      <h1>
        {this.props.a} 'as'
      </h1>
    );
  }
}
