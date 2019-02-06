import { connect } from 'react-redux';

import DraftConfig from 'components/Draft/Config';

import { setPlayers, setCivsPer, setAIs } from 'actions/settings';

const mapStateToProps = state => ({
  players: state.settings.players,
  civsper: state.settings.civsper,
  ais: state.settings.ais,
});

const mapDispatchToProps = dispatch => ({
  handleSelectPlayers: (e) => dispatch(setPlayers(e)),
  handleSelectCivsPer: (e) => dispatch(setCivsPer(e)),
  handleSelectAIs: (e) => dispatch(setAIs(e)),
});

export default connect(mapStateToProps, mapDispatchToProps)(DraftConfig);