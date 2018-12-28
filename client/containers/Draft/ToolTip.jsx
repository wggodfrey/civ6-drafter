import { connect } from 'react-redux';

import ToolTip from './../../components/Draft/ToolTip';

const mapStateToProps = state => ({
  posX: state.tooltip.posX,
  posY: state.tooltip.posY,
  content: state.tooltip.content,
});

const mapDispatchToProps = null;

export default connect(mapStateToProps, mapDispatchToProps)(ToolTip);