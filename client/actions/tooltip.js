const initToolTip = tooltip => ({
  type: 'INIT_TTIP',
  payload: tooltip,
});

const moveToolTip = coords => ({
  type: 'MOVE_TTIP',
  payload: coords,
});

const fillToolTip = content => ({
  type: 'FILL_TTIP',
  payload: content,
});

const getToolTip = () => {
  return dispatch => {
    const tooltip = {
      posX: 0,
      posY: 0,
      content: null,
    };
    dispatch(initToolTip(tooltip));
  }
};

export { getToolTip, moveToolTip, fillToolTip };