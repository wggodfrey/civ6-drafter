import { connect } from 'react-redux';

import CivButton from './../components/CivButton';

import { toggCiv } from './../actions/civs';

const mapStateToProps = null;

const mapDispatchToProps = dispatch => ({
  handleClick: index => {
    dispatch(toggCiv(index));
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(CivButton);