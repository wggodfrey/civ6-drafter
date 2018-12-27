import { connect } from 'react-redux';

import DraftResults from './../components/DraftResults';

const mapStateToProps = state => ({
  results: state.results,
});

const mapDispatchToProps = null;

export default connect(mapStateToProps, mapDispatchToProps)(DraftResults);