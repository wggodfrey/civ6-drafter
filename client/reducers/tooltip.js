const tooltipReducer = (state = {}, action) => {
  switch (action.type) {
    case 'INIT_TTIP':
      return action.payload;

    case 'MOVE_TTIP':
      return { ...state, posX: action.payload.posX, posY: action.payload.posY };

    case 'FILL_TTIP':
      return { ...state, content: action.payload };

    default:
      return state;
  }
};

export default tooltipReducer;
