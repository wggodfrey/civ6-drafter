import { connect } from 'react-redux';

import DraftConfig from './../components/DraftConfig';

import { toggMenu1, toggMenu2 } from './../actions/settings';

const mapStateToProps = state => ({
  players: state.settings.players,
  civsper: state.settings.civsper,
  menu1open: state.settings.menu1open,
  menu2open: state.settings.menu2open,
});

const mapDispatchToProps = dispatch => ({
  toggleMenu1: () => dispatch(toggMenu1()),
  toggleMenu2: () => dispatch(toggMenu2()),
});

export default connect(mapStateToProps, mapDispatchToProps)(DraftConfig);