const mongoose = require('mongoose');
const db       = require('./index.js');

const CivSchema = new mongoose.Schema({
  dlc_id: Number,
  leader: String,
  nation: String,
  bonus_name: String,
  bonus_desc: String,
  ability_name: String,
  ability_desc: String,
  traits: [],
});
const Civ = mongoose.model('Civ', CivSchema);

module.exports.Civ = Civ;