import { connect } from 'react-redux';

import DraftResults from './../../components/Draft/Results';

const mapStateToProps = state => ({
  results: state.results,
  tooltip: state.tooltip.content,
});

const mapDispatchToProps = null;

export default connect(mapStateToProps, mapDispatchToProps)(DraftResults);