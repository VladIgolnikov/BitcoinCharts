import React from 'react';
import { VictoryLine, VictoryTheme, VictoryChart, VictoryAxis } from 'victory';

class Graph extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }



  render() {
    return (
      <div className='graph'>
        <p>Crypto Graph</p>
        <VictoryChart
          theme={VictoryTheme.material}
        >
          <VictoryAxis
            tickCount = {3}
          />
          <VictoryLine
            style={{
              data: { stroke: "#c43a31" },
              parent: { border: "1px solid #ccc" }
            }}
            data={this.props.prices}
          />
        </VictoryChart>
      </div>
    )
  }
}

export default Graph;
