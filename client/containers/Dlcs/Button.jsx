import { connect } from 'react-redux';

import DlcButton from 'components/Dlcs/Button';

import { toggDlc } from 'actions/dlcs';
import { getCivs } from 'actions/civs';

const mapStateToProps = state => ({
  dlcs: state.dlcs,
});

const mapDispatchToProps = dispatch => ({
  handleClick: (index, max) => {
    dispatch(toggDlc(index));
    dispatch(getCivs(max));
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(DlcButton);