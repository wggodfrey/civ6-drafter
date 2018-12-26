const promise = require('bluebird');
const path    = require('path');
const fs      = promise.promisifyAll(require('fs'));

const db      = require('./index.js');
const Civ     = require('./../models').Civ;

String.prototype.splitCSV = function(sep) {
  for (var foo = this.split(sep = sep || ","), x = foo.length - 1, tl; x >= 0; x--) {
    if (foo[x].replace(/'\s+$/, "'").charAt(foo[x].length - 1) == "'") {
      if ((tl = foo[x].replace(/^\s+'/, "'")).length > 1 && tl.charAt(0) == "'") {
        foo[x] = foo[x].replace(/^\s*'|'\s*$/g, '').replace(/''/g, "'");
      } else if (x) {
        foo.splice(x - 1, 2, [foo[x - 1], foo[x]].join(sep));
      } else foo = foo.shift().split(sep).concat(foo);
    } else foo[x].replace(/''/g, "'");
  } return foo;
};

Civ.collection.deleteMany({}, () => {
  fs.readFileAsync(path.join(__dirname, 'leaders.csv'), 'utf-8')
    .then(data => {
      let leaders = data.toString().split(/\r?\n/).slice(1);
      fs.readFileAsync(path.join(__dirname, 'traits.csv'), 'utf-8')
        .then(data => {
          let traits = data.toString().split(/\r?\n/).slice(1);
          leaders.forEach(l => {
            leader = l.splitCSV();
            let civ = {
              id: leader[0],
              dlc_id: leader[1],
              leader: leader[2],
              nation: leader[5],
              bonus_name: leader[3],
              bonus_desc: leader[4],
              ability_name: leader[6],
              ability_desc: leader[7],
              traits: traits.filter(trait => trait[1] = leader[1]),
            };
            Civ.collection.insertOne(civ);
          });
        });
    });
});
