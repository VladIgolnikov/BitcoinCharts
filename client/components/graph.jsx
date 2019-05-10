import React from 'react';
import { VictoryLine } from 'victory';

class Graph extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <div className='graph'>
        <p>Crypto Graph</p>
        <VictoryLine />
        <p>{this.props.prices}</p>
      </div>
    )
  }
}

export default Graph;
