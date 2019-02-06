import { connect } from 'react-redux';

import DraftButton from 'components/Draft/Button';

import { setResults } from 'actions/results';

const mapStateToProps = state => ({
  dlcs: state.dlcs,
  civs: state.civs,
  players: state.settings.players,
  civsper: state.settings.civsper,
});

const mapDispatchToProps = dispatch => ({
  handleSelect: (dlcs, civs, players, civsper) => {
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
    dispatch(setResults(results));
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(DraftButton);