import { connect } from 'react-redux';

import DlcButton from './../components/DlcButton';

import { toggDlc } from './../actions/dlcs';

const mapStateToProps = null;

const mapDispatchToProps = dispatch => ({
  handleClick: index => {
    dispatch(toggDlc(index));
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(DlcButton);