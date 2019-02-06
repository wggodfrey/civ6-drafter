const mongoose = require('mongoose');
const promise = require('bluebird');
const path = require('path');
const fs = promise.promisifyAll(require('fs'));

const Civ = require('./../models').Civ;

String.prototype.splitCSV = function (sep) {
  for (var foo = this.split(sep = sep || ','), x = foo.length - 1, tl; x >= 0; x--) {
    if (foo[x].replace(/'\s+$/, "'").charAt(foo[x].length - 1) == "'") {
      if ((tl = foo[x].replace(/^\s+'/, "'")).length > 1 && tl.charAt(0) == "'") {
        foo[x] = foo[x].replace(/^\s*'|'\s*$/g, '').replace(/''/g, "'");
      } else if (x) {
        foo.splice(x - 1, 2, [foo[x - 1], foo[x]].join(sep));
      } else foo = foo.shift().split(sep).concat(foo);
    } else foo[x].replace(/''/g, "'");
  } return foo;
};

String.prototype.insertHTML = function () {
  let string = this;
  string = string.split('<culture/>').join('<img style=\'width:12px; height: 12px; position: relative; top: 2px;\' src=\'https://s3.amazonaws.com/civ6-drafter/icons/culture.png\'/>');
  string = string.split('<faith/>').join('<img style=\'width:12px; height: 12px; position: relative; top: 2px;\' src=\'https://s3.amazonaws.com/civ6-drafter/icons/faith.png\'/>');
  string = string.split('<food/>').join('<img style=\'width:12px; height: 12px; position: relative; top: 2px;\' src=\'https://s3.amazonaws.com/civ6-drafter/icons/food.png\'/>');
  string = string.split('<gold/>').join('<img style=\'width:12px; height: 12px; position: relative; top: 2px;\' src=\'https://s3.amazonaws.com/civ6-drafter/icons/gold.png\'/>');
  string = string.split('<production/>').join('<img style=\'width:12px; height: 12px; position: relative; top: 2px;\' src=\'https://s3.amazonaws.com/civ6-drafter/icons/production.png\'/>');
  string = string.split('<science/>').join('<img style=\'width:12px; height: 12px; position: relative; top: 2px;\' src=\'https://s3.amazonaws.com/civ6-drafter/icons/science.png\'/>');
  string = string.split('<tourism/>').join('<img style=\'width:12px; height: 12px; position: relative; top: 2px;\' src=\'https://s3.amazonaws.com/civ6-drafter/icons/tourism.png\'/>');
  string = string.split('<visibility/>').join('<img style=\'width:12px; height: 12px; position: relative; top: 2px;\' src=\'https://s3.amazonaws.com/civ6-drafter/icons/visibility.png\'/>');
  string = string.split('<amenity/>').join('<img style=\'width:12px; height: 12px; position: relative; top: 2px;\' src=\'https://s3.amazonaws.com/civ6-drafter/icons/amenity.png\'/>');
  string = string.split('<combat/>').join('<img style=\'width:12px; height: 12px; position: relative; top: 2px;\' src=\'https://s3.amazonaws.com/civ6-drafter/icons/combat.png\'/>');
  string = string.split('<housing/>').join('<img style=\'width:12px; height: 12px; position: relative; top: 2px;\' src=\'https://s3.amazonaws.com/civ6-drafter/icons/housing.png\'/>');
  string = string.split('<population/>').join('<img style=\'width:12px; height: 12px; position: relative; top: 2px;\' src=\'https://s3.amazonaws.com/civ6-drafter/icons/population.png\'/>');
  string = string.split('<ranged/>').join('<img style=\'width:12px; height: 12px; position: relative; top: 2px;\' src=\'https://s3.amazonaws.com/civ6-drafter/icons/ranged.png\'/>');
  string = string.split('<relic/>').join('<img style=\'width:12px; height: 12px; position: relative; top: 2px;\' src=\'https://s3.amazonaws.com/civ6-drafter/icons/relic.png\'/>');
  string = string.split('<route/>').join('<img style=\'width:12px; height: 12px; position: relative; top: 2px;\' src=\'https://s3.amazonaws.com/civ6-drafter/icons/route.png\'/>');
  string = string.split('<eureka/>').join('<img style=\'width:12px; height: 12px; position: relative; top: 2px;\' src=\'https://s3.amazonaws.com/civ6-drafter/icons/eureka.png\'/>');
  string = string.split('<inspiration/>').join('<img style=\'width:12px; height: 12px; position: relative; top: 2px;\' src=\'https://s3.amazonaws.com/civ6-drafter/icons/inspiration.png\'/>');
  string = string.split('<greatperson/>').join('<img style=\'width:12px; height: 12px; position: relative; top: 2px;\' src=\'https://s3.amazonaws.com/civ6-drafter/icons/greatperson.png\'/>');
  string = string.split('<greatprophet/>').join('<img style=\'width:12px; height: 12px; position: relative; top: 2px;\' src=\'https://s3.amazonaws.com/civ6-drafter/icons/greatprophet.png\'/>');
  string = string.split('<greatgeneral/>').join('<img style=\'width:12px; height: 12px; position: relative; top: 2px;\' src=\'https://s3.amazonaws.com/civ6-drafter/icons/greatgeneral.png\'/>');
  string = string.split('<artifact/>').join('<img style=\'width:12px; height: 12px; position: relative; top: 2px;\' src=\'https://s3.amazonaws.com/civ6-drafter/icons/artifact.png\'/>');
  string = string.split('<movement/>').join('<img style=\'width:12px; height: 12px; position: relative; top: 2px;\' src=\'https://s3.amazonaws.com/civ6-drafter/icons/movement.png\'/>');
  string = string.split('<range/>').join('<img style=\'width:12px; height: 12px; position: relative; top: 2px;\' src=\'https://s3.amazonaws.com/civ6-drafter/icons/range.png\'/>');
  return string;
};

Civ.collection.deleteMany({}, () => {
  fs.readFileAsync(path.join(__dirname, 'leaders.csv'), 'utf-8')
    .then((data) => {
      const leaders = data.toString().insertHTML().split(/\r?\n/).slice(1);
      fs.readFileAsync(path.join(__dirname, 'traits.csv'), 'utf-8')
        .then((data) => {
          const traits = data.toString().split(/\r?\n/).slice(1).map(trait => trait.insertHTML().splitCSV());
          leaders.forEach((l) => {
            const leader = l.splitCSV();
            const civ = {
              id: leader[0],
              dlc_id: leader[1],
              leader: leader[2],
              nation: leader[5],
              bonus_name: leader[3].split('<comma/>').join(','),
              bonus_desc: leader[4].split('<comma/>').join(','),
              ability_name: leader[6],
              ability_desc: leader[7].split('<comma/>').join(','),
              traits: traits.filter(trait => trait[1] === leader[0]),
            };
            Civ.collection.insertOne(civ);
          });
        })
        .then(() => mongoose.connection.close());
    });
});
