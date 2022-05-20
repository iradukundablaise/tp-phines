import React from 'react';
import Memory from './Memory.jsx';

/*
 define root component
*/
export default class App extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return <Memory />
  }
}
