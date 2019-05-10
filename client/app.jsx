import React from 'react';
import ReactDOM from 'react-dom';
import Graph from './components/graph.jsx'
import Axios from 'axios';


class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      coin: 'BTC',
      startDate: '2019-04-01',
      endDate: '2019-04-30',
      prices: []
    };
  }

  componentDidMount() {
    this.fetchPrices(this.state.startDate, this.state.endDate);
  }

  fetchPrices(startDate, endDate) {
    Axios.get(`/add/${startDate}/${endDate}`)
      .then(response => {
        console.log(`fetchPrices response.data --> ${response.data}`);
        this.setState({ prices: response.data });
      })
      .catch(error => console.log(`fetchPrices error --> ${error}`));
  }

  // handleStartChange(e) {
  //   this.setState({
  //     from: e.target.value
  //   });
  // }

  // handleEndChange(e) {
  //   this.setState({
  //     to: e.target.value
  //   });
  // }

  render() {
    return (
      <div className='appContainer'>
        <div className='currentCoin'>
          <h2>{this.state.coin}</h2>
        </div>
        <span className='dates'>
          <p>From: {this.state.startDate}</p>
          <p>To: {this.state.endDate}</p>
        </span>
        <div className='graphContainer'>
          <Graph prices={this.state.prices} />
        </div>
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById('app'));
