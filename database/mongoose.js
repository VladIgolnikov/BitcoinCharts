const mongoose = require('mongoose')
const url = 'mongodb://localhost:27017/cryptocharts'

const coinSchema = new mongoose.Schema({
  coin: { type: String, default: 'BTC' },
  date: Date,
  rate: Number
}, { versionKey: false })

mongoose.connect(url, { useNewUrlParser: true, useFindAndModify: false });

const Coin = mongoose.model('coin', coinSchema)

module.exports = { Coin }