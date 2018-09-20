import React from 'react';
import { Spinner } from './styled';
/* eslint-disable react/prefer-stateless-function */
class Loader extends React.PureComponent {
  render() {
    return <Spinner>Loading...</Spinner>;
  }
}

export default Loader;
