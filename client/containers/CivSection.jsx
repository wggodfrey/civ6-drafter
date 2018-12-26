import { connect } from 'react-redux';

import CivSection from './../components/CivSection';

const mapStateToProps = state => ({
  dlcs: state.dlcs,
  civs: state.civs,
});

const mapDispatchToProps = null;

export default connect(mapStateToProps, mapDispatchToProps)(CivSection);