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
      prices: {"2019-04-01":4156.39,"2019-04-02":4908.6883,"2019-04-03":4977.0017,"2019-04-04":4917.8467,"2019-04-05":5053.72,"2019-04-06":5058.34,"2019-04-07":5208.02,"2019-04-08":5296.9317,"2019-04-09":5196.985,"2019-04-10":5319.705,"2019-04-11":5046.865,"2019-04-12":5088.7483,"2019-04-13":5077.7183,"2019-04-14":5172.4517,"2019-04-15":5033.095,"2019-04-16":5214.55,"2019-04-17":5237.38,"2019-04-18":5290.7433,"2019-04-19":5297.5667,"2019-04-20":5326.9383,"2019-04-21":5305.9967,"2019-04-22":5396.5783,"2019-04-23":5540.1117,"2019-04-24":5454.4483,"2019-04-25":5160.64,"2019-04-26":5241.025,"2019-04-27":5247.24,"2019-04-28":5266.3467,"2019-04-29":5259.6267,"2019-04-30":5378.6183}
    };
  }

  // componentDidMount() {
  //   this.fetchPrices(this.state.startDate, this.state.endDate);
  // }

  // fetchPrices(startDate, endDate) {
  //   Axios.get('/prices', {
  //     params: {
  //       startDate: startDate,
  //       endDate: endDate
  //     }
  //   })
  //     .then(response => {
  //       console.log(`fetchPrices response.data --> ${response.data}`);
  //       this.setState({ prices: response.data });
  //     })
  //     .catch(error => console.log(`fetchPrices error --> ${error}`));
  // }

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
        <h1>CryptoCharts</h1>
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
