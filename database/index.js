const mongoose = require('mongoose');

const mongoURI = 'mongodb://localhost/civ6drafter';
const db = mongoose.connect(mongoURI, { useNewUrlParser: true, useCreateIndex: true });

module.exports = db;
