const models = require('./../database/models.js');

const controller = {};

controller.civs = {
  get: (req, res) => {
    models.Civ.find(req.params, (err, data) => {
      if (err) res.status(500).send(err.message);
      else res.status(200).send(data);
    });
  },
};

module.exports = controller;
