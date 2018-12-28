import { connect } from 'react-redux';

import DraftConfig from './../../components/Draft/Config';

import { toggMenu1, toggMenu2, setPlayers, setCivsPer } from './../../actions/settings';

const mapStateToProps = state => ({
  players: state.settings.players,
  civsper: state.settings.civsper,
  menu1open: state.settings.menu1open,
  menu2open: state.settings.menu2open,
});

const mapDispatchToProps = dispatch => ({
  toggleMenu1: () => dispatch(toggMenu1()),
  toggleMenu2: () => dispatch(toggMenu2()),
  handleSelect1: (e) => dispatch(setPlayers(e.target.value)),
  handleSelect2: (e) => dispatch(setCivsPer(e.target.value)),
});

export default connect(mapStateToProps, mapDispatchToProps)(DraftConfig);