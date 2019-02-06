import { connect } from 'react-redux';

import DlcSection from 'components/Dlcs/Section';

const mapStateToProps = state => ({
  dlcs: state.dlcs,
});

const mapDispatchToProps = null;

export default connect(mapStateToProps, mapDispatchToProps)(DlcSection);