const mongoose = require('mongoose');

const mongoURI = 'mongodb://player:pass@35.160.213.207/civ6drafter';
const db = mongoose.connect(mongoURI, { useNewUrlParser: true, useCreateIndex: true });

module.exports = db;
