import { connect } from 'react-redux';

import DraftButton from 'components/Draft/Button';

import { setResults } from 'actions/results';

const mapStateToProps = state => ({
  dlcs: state.dlcs,
  civs: state.civs,
  players: state.settings.players,
  civsper: state.settings.civsper,
  ais: state.settings.ais,
});

const mapDispatchToProps = dispatch => ({
  handleSelect: (dlcs, civs, players, civsper, ais) => {
    let availableCivs = civs.filter(civ => civ.active && dlcs[civ.dlc_id].active);
    let results = {};
    for (let i = 1; i <= players; i++) {
      results[`Player ${i}`] = [];
      for (let j = 0; j < civsper; j++) {
        let random = Math.floor(Math.random() * availableCivs.length);
        results[`Player ${i}`].push(availableCivs[random]);
        availableCivs.splice(random, 1);
      }
    }
    results['AIs'] = [];
    for (let i = 1; i <= ais; i++) {
      let random = Math.floor(Math.random() * availableCivs.length);
      results['AIs'].push(availableCivs[random]);
      availableCivs.splice(random, 1);
    }
    dispatch(setResults(results));
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(DraftButton);