const { Coin } = require('../database/mongoose.js');
const getAPI = require('./apiHelper.js')

module.exports = {
  add: (req, res) => {
    console.log('PARAMS: ', req.params);
    let startDate = req.params.startDate;
    let endDate = req.params.endDate;
    getAPI(startDate, endDate)
      .then(({ data }) => {
        let dataArr = [];
        let dataObjs = data.bpi;
        console.log('API DATA: ', dataObjs)
        for (let day in dataObjs) {
          dataArr.push({ [day]: dataObjs[day] })
          Coin.findOneAndUpdate(
            {
              date: day
            },
            {
              coin: 'BTC',
              date: day,
              rate: dataObjs[day]
            },
            {
              upsert: true
            }
          )
            .exec()
            .catch((err) => {
              console.error('Error adding/updating to MongoDB', err);
            })
        }
        res.send(dataArr)
      })
      .catch((err) => {
        console.error('Error requesting to Crypto API: ', err);
        res.send(err);
      })
  },

  fetch: (req, res) => {
    console.log('FETCH PARAMS: ', req.params);
    let startDate = req.params.startDate
    let endDate = req.params.endDate
    Coin.find({ "date": { "$gte": startDate, "$lt": endDate } })
      .exec()
      .catch((err) => {
        console.error('Error fetching data: ', err);
        res.send(err);
      })
      .then((data) => { res.send(data) })
  },
}