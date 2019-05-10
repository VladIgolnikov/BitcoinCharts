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
            tickCount={3}
          />
          <VictoryAxis dependentAxis />
          <VictoryLine
            style={{
              data: { stroke: "#c43a31" },
              parent: { border: "1px solid #ccc" },
              labels: { angle: -90, fill: "red", fontSize: 20 }
            }}
            data={this.props.prices}
            style={{ data: { stroke: "gold", strokeWidth: 5 } }}
          />
        </VictoryChart>
      </div>
    )
  }
}

export default Graph;
