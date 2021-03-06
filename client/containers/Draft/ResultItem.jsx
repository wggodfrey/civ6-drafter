import { connect } from 'react-redux';

import ResultItem from 'components/Draft/ResultItem';

import { moveToolTip, fillToolTip} from 'actions/tooltip';

const mapStateToProps = null;

const mapDispatchToProps = dispatch => ({
  handleMouseIn: content => dispatch(fillToolTip(content)),
  handleMouseOut: () => dispatch(fillToolTip(null)),
  handleMouseMove: (e) => dispatch(moveToolTip({posX:e.pageX, posY:e.pageY})),
});

export default connect(mapStateToProps, mapDispatchToProps)(ResultItem);