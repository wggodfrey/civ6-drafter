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
      let leaders = data.toString();
      leaders = leaders.split('<culture/>').join('<img style=\'width:11px; height: 11px;\' src=\'https://s3.amazonaws.com/civ6-drafter/resources/culture.png\'/>');
      leaders = leaders.split('<faith/>').join('<img style=\'width:11px; height: 11px;\' src=\'https://s3.amazonaws.com/civ6-drafter/resources/faith.png\'/>');
      leaders = leaders.split('<food/>').join('<img style=\'width:11px; height: 11px;\' src=\'https://s3.amazonaws.com/civ6-drafter/resources/food.png\'/>');
      leaders = leaders.split('<gold/>').join('<img style=\'width:11px; height: 11px;\' src=\'https://s3.amazonaws.com/civ6-drafter/resources/gold.png\'/>');
      leaders = leaders.split('<production/>').join('<img style=\'width:11px; height: 11px;\' src=\'https://s3.amazonaws.com/civ6-drafter/resources/production.png\'/>');
      leaders = leaders.split('<science/>').join('<img style=\'width:11px; height: 11px;\' src=\'https://s3.amazonaws.com/civ6-drafter/resources/science.png\'/>');
      leaders = leaders.split('<tourism/>').join('<img style=\'width:11px; height: 11px;\' src=\'https://s3.amazonaws.com/civ6-drafter/resources/tourism.png\'/>');
      
      leaders = leaders.split('<amenity/>').join('<img style=\'width:11px; height: 11px;\' src=\'https://s3.amazonaws.com/civ6-drafter/concepts/amenity.png\'/>');
      leaders = leaders.split('<combat/>').join('<img style=\'width:11px; height: 11px;\' src=\'https://s3.amazonaws.com/civ6-drafter/concepts/combat.png\'/>');
      leaders = leaders.split('<housing/>').join('<img style=\'width:11px; height: 11px;\' src=\'https://s3.amazonaws.com/civ6-drafter/concepts/housing.png\'/>');
      leaders = leaders.split('<population/>').join('<img style=\'width:11px; height: 11px;\' src=\'https://s3.amazonaws.com/civ6-drafter/concepts/population.png\'/>');
      leaders = leaders.split('<ranged/>').join('<img style=\'width:11px; height: 11px;\' src=\'https://s3.amazonaws.com/civ6-drafter/concepts/ranged.png\'/>');
      leaders = leaders.split('<relic/>').join('<img style=\'width:11px; height: 11px;\' src=\'https://s3.amazonaws.com/civ6-drafter/concepts/relic.png\'/>');
      leaders = leaders.split('<route/>').join('<img style=\'width:11px; height: 11px;\' src=\'https://s3.amazonaws.com/civ6-drafter/concepts/route.png\'/>');
      leaders = leaders.split(/\r?\n/).slice(1);
      fs.readFileAsync(path.join(__dirname, 'traits.csv'), 'utf-8')
        .then(data => {
          let traits = data.toString().split(/\r?\n/).slice(1).map(trait => trait.splitCSV());
          console.log(traits);
          leaders.forEach(l => {
            let leader = l.splitCSV();
            let civ = {
              id: leader[0],
              dlc_id: leader[1],
              leader: leader[2],
              nation: leader[5],
              bonus_name: leader[3],
              bonus_desc: leader[4].split('<comma/>').join(','),
              ability_name: leader[6],
              ability_desc: leader[7].split('<comma/>').join(','),
              traits: traits.filter(trait => trait[1] === leader[0]),
            };
            Civ.collection.insertOne(civ);
          });
        });
    });
});
