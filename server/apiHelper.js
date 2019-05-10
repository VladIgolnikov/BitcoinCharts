const axios = require('axios');

// dates must be in yyyy-mm-dd format
module.exports = getAPI = (startDate, endDate) => {
  return axios.get(`https://api.coindesk.com/v1/bpi/historical/close.json?start=${startDate}&end=${endDate}`)
}